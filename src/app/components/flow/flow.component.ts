import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlowNode }                     from '../../node-base/flow-node';
import { FlowControllerService }        from '../../services/flow-controller.service';
import { Subject, takeUntil }           from 'rxjs';

@Component ({
    selector: 'app-flow',
    templateUrl: './flow.component.html'
})
export class FlowComponent implements OnInit, OnDestroy {

    public nodes: { [ nodeId: number ]: FlowNode } = {};

    public onDestroy$: Subject<null> = new Subject<null> ();

    constructor (
        private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
        this._flowController.flowNodes$
        .pipe (takeUntil (this.onDestroy$))
        .subscribe (nodes => {
            console.log(nodes)

            this.nodes = nodes;
        });
    }

    ngOnDestroy (): void {
        // this._flowController.cleanUp();
        this.onDestroy$.next (null);
        this.onDestroy$.complete ();
    }
}
