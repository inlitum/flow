import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FlowControllerService }                       from '../../services/flow-controller.service';
import { Subject, takeUntil }           from 'rxjs';
import { FlowNode }                     from '../../node-base/flow-node';

@Component ({
    selector: 'app-flow',
    templateUrl: './flow.component.html',
    styleUrls: [ './flow.component.scss' ]
})
export class FlowComponent implements OnInit, OnDestroy, AfterViewInit {

    public startNode: FlowNode | null = null;

    public onDestroy$: Subject<null> = new Subject<null> ();

    constructor (
        private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
        this._flowController.startNode$
        .pipe (takeUntil (this.onDestroy$))
        .subscribe (startNode => {
            this.startNode = startNode;
        });
    }

    ngOnDestroy (): void {
        this.onDestroy$.next (null);
        this.onDestroy$.complete ();
    }

    ngAfterViewInit (): void {
        if (this.startNode) {
            // After the whole flow is rendered, focus on the start node.
            this._flowController.focusOnNode(this.startNode);
        }
    }
}
