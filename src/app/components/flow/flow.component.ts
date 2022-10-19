import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlowNode }                     from '../../node-base/flow-node';
import { FlowService }                  from '../../services/flow.service';
import { Subject, takeUntil }           from 'rxjs';

@Component ({
    selector: 'app-flow',
    templateUrl: './flow.component.html'
})
export class FlowComponent implements OnInit, OnDestroy {

    public nodes: FlowNode[] = [];

    public onDestroy$: Subject<null> = new Subject<null> ();

    constructor (
        private _flowService: FlowService
    ) {
    }

    ngOnInit (): void {
        this._flowService.flowNodes$
        .pipe (takeUntil (this.onDestroy$))
        .subscribe (nodes => {
            this.nodes = nodes;
        });
    }

    ngOnDestroy (): void {
        this.onDestroy$.next (null);
        this.onDestroy$.complete ();
    }
}
