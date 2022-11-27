import { Component, Input, OnInit } from '@angular/core';
import { NodeWithExits }            from '../../node-base/node-with-exits';
import { FlowNode }                 from '../../node-base/flow-node';
import { FlowControllerService }    from '../../services/flow-controller.service';
import { OriginalOrder }            from '../../utils/utils';

@Component ({
    selector: 'flow-sidebar-node-exits[node]',
    templateUrl: './sidebar-node-exits.component.html',
    styleUrls: [ './sidebar-node-exits.component.scss' ]
})
export class SidebarNodeExitsComponent implements OnInit {
    public originalOrder = OriginalOrder;

    @Input()
    public node!: NodeWithExits;

    constructor (
        private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
    }

    public handleExitNameClick (node: FlowNode | null) {
        if (!node) {
            return;
        }
        this._flowController.selectNode (node);
        this._flowController.focusOnNode (node);
    }
}
