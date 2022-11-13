import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlowNode }                     from '../../node-base/flow-node';
import { FlowControllerService }        from '../../services/flow-controller.service';
import { Subject, takeUntil }           from 'rxjs';
import { NodeWithExits }                from '../../node-base/node-with-exits';

@Component ({
    selector: 'flow-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit, OnDestroy {

    public selectedNode: FlowNode | null = null;
    public nodeWithExits: NodeWithExits | null = null;

    private _onDestroy: Subject<any> = new Subject<any> ();

    constructor (
        private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
        this._flowController.selectedNode$
        .pipe (takeUntil (this._onDestroy))
        .subscribe (node => {
            this.selectedNode = node;

            if (node instanceof NodeWithExits) {
                this.nodeWithExits = node;
            }
        });
    }

    ngOnDestroy (): void {
        this._onDestroy.next (null);
        this._onDestroy.complete ();
    }

    handleFocusClicked (): void {
        if (!this.selectedNode) {
            return;
        }
        this._flowController.focusOnNode(this.selectedNode);
    }
}
