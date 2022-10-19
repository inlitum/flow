import { Injectable }               from '@angular/core';
import { NodeFactoryService }       from './node-factory.service';
import { FlowNode }                 from '../node-base/flow-node';
import { BehaviorSubject, Subject } from 'rxjs';
import { NodeWithDynamicExits }     from '../node-base/node-with-dynamic-exits';
import { NodeWithExits }            from '../node-base/node-with-exits';
import { UndefinedNode }            from '../node-types/undefined-node';
import { LinkNode }                 from '../node-types/link-node';
import { Link }                     from '../node-types/nodes';
import { cloneDeep }                    from 'lodash';

export interface OperationsConfig {
    name: string,
    id: number,
    config: { [ key: string ]: any },
    exits?: (number | null)[],
    base_node: string,
    notes: string[],
    type: string,
    seenNode?: boolean
}

export interface FlowConfig {
    'customer_id'?: number,
    'is_active_in_future'?: number,
    'version'?: number,
    'is_active'?: boolean,
    'flow_version_id'?: number,
    'operations'?: { [ id: number ]: OperationsConfig },
    'change_date'?: string,
    'customer_name'?: string,
    'id'?: string,
    'name'?: string,
    'change_user'?: string
}

@Injectable ({
    providedIn: 'root'
})
export class FlowControllerService {

    private _startNode: FlowNode | null              = null;
    private _nodes: { [ nodeId: number ]: FlowNode } = {};
    private _flowConfig: FlowConfig | null           = null;

    private _linkNodes: LinkNode[] = [];

    public flowNodes$: Subject<{ [ nodeId: number ]: FlowNode }> = new BehaviorSubject<{ [ nodeId: number ]: FlowNode }> ({});

    constructor (
        private _nodeFactory: NodeFactoryService
    ) {
    }

    private _operations: { [ nodeId: string ]: OperationsConfig } = {};
    private _currentId: number                                    = 1;

    private nodeXOffset: number = 200;
    private nodeYOffset: number = 44;

    private lastYOffset: number = 0;

    parseFlow (flow: FlowConfig) {
        if (!flow || !flow.operations) {
            return;
        }

        this._flowConfig = cloneDeep (flow);

        let startNode: OperationsConfig | null = null;

        this._operations = flow.operations;
        let operationIds: string[] = Object.keys(flow.operations);

        // Get the start node.
        for (let operationId of operationIds) {
            const id = Number.parseInt(operationId, 10);

            if (flow.operations[id].type === 'Start') {
                startNode = flow.operations[id];
                break;
            }
        }

        if (!startNode) {
            return;
        }

        this._startNode = this.parseNode (startNode);

        // Once all nodes are parsed, render the flow.
        this.renderFlow ();
        this.flowNodes$.next(this._nodes);
    }

    renderFlow () {
        if (!this._startNode) {
            return;
        }

        this.setNodePosition(this._startNode);
        this.flowNodes$.next(this._nodes)
    }

    setNodePosition (node: FlowNode, depth: number = 0) {
        if (!node) {
            return;
        }

        node.setPosition({x: depth * this.nodeXOffset, y: this.lastYOffset});
        // If the node won't ever have exits, we can just return
        // as the node just needs a position.
        if (!(node instanceof NodeWithExits)) {
            return;
        }

        const exits = node.getDisplayExits();
        const exitNames = Object.keys(exits);

        if (node.getNodeId() === 13) {
            console.log(exits);
        }

        for (let exitIdx = 0; exitIdx < exitNames.length; exitIdx++) {
            const exitName  = exitNames[ exitIdx ];
            let exitNode    = exits[ exitName ].getExitNode();
            // Increment the y offset only if the exit node isn't on the same
            // level.
            if (exitIdx !== 0) {
                this.lastYOffset += this.nodeYOffset;
            }
            if (!exitNode) {
                continue;
            }


            this.setNodePosition (exitNode, depth + 1);
        }
    }

    /**
     * Recursively parses a node from the config provided.
     * This function will check for exits and if some are found, the node
     * will parse those exits recursively.
     * @param nodeConfig The base config of the node.
     */
    parseNode (nodeConfig: OperationsConfig): FlowNode | null {
        // Generate the new node using the node factory, we are going to need this.
        let newNode = this._nodeFactory.generateNode (nodeConfig.type);
        // Add information about the node.
        newNode.setNodeNote (nodeConfig.notes);
        if (nodeConfig.name && nodeConfig.name !== nodeConfig.type) {
            newNode.setCustomName (nodeConfig.name);
        }
        // If the node is undefined, call the `setRawConfig` now so the node can generate exits.
        if (newNode instanceof UndefinedNode) {
            newNode.setRawConfig (nodeConfig);
        }
        // If the created node's type allows for exits, generate them.
        if (newNode instanceof NodeWithExits && nodeConfig.exits != null && nodeConfig.exits.length > 0) {

            for (let exitIdx = 0; exitIdx < nodeConfig.exits.length; exitIdx++) {
                const exitId = nodeConfig.exits[ exitIdx ];
                // Increment the total exits on nodes that extend `NodeWithDynamicExits`
                // This will allow the node to be added to the node.
                if (newNode instanceof NodeWithDynamicExits) {
                    newNode.addExit ();
                }
                // Exit node to be added to the current node. Default to null
                let exit: FlowNode | null = null;

                if (exitId != null) {
                    // Get the operations from the operations map.
                    const exitOperation = this._operations[ exitId ];
                    // If the operation exits and isn't null, lets parse it.
                    if (exitOperation) {
                        // If the node has been seen before, we can skip parsing
                        // and instead add a link node here.
                        if (exitOperation.seenNode != null) {
                            const linkNode = this._nodeFactory.generateNode ('Link');
                            if (!(linkNode instanceof LinkNode)) {
                                console.error ('Error: Unable to load link node. THIS IS BAD!');
                                continue;
                            }

                            linkNode.setNodeId (this._currentId);
                            linkNode.setLinkedNodeId (exitId);
                            this._linkNodes.push(linkNode);

                            this._nodes[ this._currentId ] = linkNode;

                            exit = linkNode;
                            this._currentId++;
                        } else {
                            // Set the current operation to being seen, this will
                            // stop some recursion overflows.
                            exitOperation.seenNode = true;
                            // Finally recursively parse the exit operation/
                            exit                   = this.parseNode (exitOperation);
                        }
                    }
                }
                newNode.setExit (exit, exitIdx);
            }
        }
        // Set the ID of the current node
        newNode.setNodeId (this._currentId);
        // Add the node to the flow's node array.
        this._nodes[ this._currentId ] = newNode;

        if (nodeConfig.config) {
            newNode.initFromConfig (nodeConfig.config);
        }

        // Increment the current ID for the next node.
        this._currentId++;
        return newNode;
    }

    reloadFlow () {
        this._nodes      = {};
        this._linkNodes  = [];
        this._startNode  = null;
        this.lastYOffset = 0;
        this._currentId = 1;

        if (!this._flowConfig) {
            return;
        }

        this.parseFlow (this._flowConfig);
    }

    rerenderFlow () {
        this.lastYOffset = 0;
        this.renderFlow ();
    }
}
