import { Injectable }    from '@angular/core';
import { FlowNode }      from '../node-base/flow-node';
import { StartNode }     from '../node-types/start-node';
import { LinkNode }      from '../node-types/link-node';
import { UndefinedNode } from '../node-types/undefined-node';

@Injectable ({
    providedIn: 'root'
})
export class NodeFactoryService {

    private _nodeTypes: { [ key: string ]: () => FlowNode } = {};

    constructor () {

        /********************************
         *        Register Nodes        *
         ********************************/
        // Base nodes.
        this._registerNodeType ('Start', () => {
            return new StartNode ();
        });
        this._registerNodeType ('Link', () => {
            return new LinkNode ();
        });
        this._registerNodeType ('Undefined', () => {
            return new UndefinedNode ();
        });
    }

    /**
     * Will generate a blank node class. The node class chosen
     * depends on which nodeType it provided.
     * @param nodeType The type of the node.
     */
    public generateNode (nodeType: string) {
        let node: FlowNode;

        if (!this._nodeTypes[ nodeType ]) {
            nodeType = 'Undefined';
        }

        const callback = this._nodeTypes[ nodeType ];
        node           = callback ();

        return node;
    }

    private _registerNodeType (nodeType: string, creationFunction: () => FlowNode) {
        if (!this._nodeTypes) {
            this._nodeTypes = {};
        }

        this._nodeTypes[ nodeType ] = creationFunction;
    }
}
