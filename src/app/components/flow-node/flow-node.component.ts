import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FlowNode }                                                       from '../../node-base/flow-node';
import { NodeWithExits }                                                  from '../../node-base/node-with-exits';
import { NodeExit }                                                       from '../../node-base/node-exit';
import { FlowControllerService }                                          from '../../services/flow-controller.service';
import { UndefinedNode }                                                  from '../../node-types/undefined-node';
import { KeyValue }                                                       from '@angular/common';

@Component ({
    selector: 'flow-node[flowNode]',
    templateUrl: './flow-node.component.html',
    styleUrls: [ './flow-node.component.scss' ]
})
export class FlowNodeComponent implements OnInit {

    private _flowNode!: FlowNode;

    public hasExits: boolean = false;

    public get flowNode (): FlowNode {
        return this._flowNode;
    }

    @Input ()
    public set flowNode (node: FlowNode) {
        this._flowNode = node;

        if (node instanceof NodeWithExits) {
            this.hasExits = true;
        }
    }

    @Input()
    isChild: boolean = false;

    /**
     * Wrapper function that will only be run if the node extends NodeWithExits.
     */
    public getNodeExits (): { [ exitName: string ]: NodeExit } {
        if (!this.hasExits) {
            return {};
        }

        return (this.flowNode as NodeWithExits).getExits ()
    }

    public getPassThroughNodeIds (idx: number): number [] {
        let output = [];

        let exits = this.getNodeExits();
        let exitNames = Object.keys(exits);

        for (let exitIdx = idx; exitIdx < exitNames.length; exitIdx++) {
            let exit = exits[exitNames[exitIdx]].getExitNode ();

            if (!exit) {
                continue;
            }

            output.push(exit.getNodeId());
        }

        return output;
    }

    constructor (
        private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
    }

    handleNodeClick (event: MouseEvent): void {
        this._flowController.selectNode(this._flowNode);
    }

    originalOrder = (): number => {
        return 0;
    }

}
