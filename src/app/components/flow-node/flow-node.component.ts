import { Component, Input, OnInit } from '@angular/core';
import { FlowNode }                 from '../../node-base/flow-node';
import { NodeWithExits }            from '../../node-base/node-with-exits';
import { NodeExit }                 from '../../node-base/node-exit';

@Component ({
    selector: 'flow-node[flowNode]',
    templateUrl: './flow-node.component.html',
    styleUrls: [ './flow-node.component.scss' ]
})
export class FlowNodeComponent implements OnInit {

    private _flowNode!: FlowNode;

    public state: string = '';

    public hasExits: boolean = false;

    public get flowNode (): FlowNode {
        return this._flowNode;
    }

    @Input ()
    public set flowNode (node: FlowNode) {
        this._flowNode = node;

        this.state = this._flowNode.getState ();

        if (node instanceof NodeWithExits) {
            this.hasExits = true;
        }
    }

    /**
     * Wrapper function that will only be run if the node extends NodeWithExits.
     */
    public getNodeExits (): { [ exitName: string ]: NodeExit } {
        if (!this.hasExits) {
            return {};
        }

        return (this.flowNode as NodeWithExits).getExits ();
    }

    constructor () {
    }

    ngOnInit (): void {
    }

    handleNodeClick (): void {
        let state: "normal" | "selected" | "errored" | "warning" | "modified" = 'normal';
        switch (this._flowNode.getState()) {
            case 'selected':
                state = 'normal';
                break;
            case 'normal':
                state = 'selected';
                break;
        }
        this._flowNode.setState (state);
    }

}
