import { Injectable }               from '@angular/core';
import { NodeFactoryService }       from './node-factory.service';
import { FlowNode }                 from '../node-base/flow-node';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class FlowService {

    private _flowNode: FlowNode[]          = [];
    public flowNodes$: Subject<FlowNode[]> = new BehaviorSubject<FlowNode[]> (([]));

    constructor (
        private _nodeFactory: NodeFactoryService
    ) {
        let node = this._nodeFactory.generateNode ('s');

        node.initFromConfig({test: 'bruv'})

        this._flowNode.push (node);
        this.flowNodes$.next (this._flowNode);
    }
}
