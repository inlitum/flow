import { Injectable } from '@angular/core';
import * as Nodes     from '../node-types/nodes';
import { FlowNode }   from '../node-base/flow-node';

@Injectable ({
    providedIn: 'root'
})
export class NodeFactoryService {
    constructor () {
    }

    /**
     * Will generate a blank node class. The node class chosen
     * depends on which nodeType it provided.
     * @param nodeType The type of the node.
     */
    public generateNode (nodeType: string) {
        let node: FlowNode;
        try {
            node = new (<any>Nodes)[ nodeType ];
        } catch (e) {
            node = new (<any>Nodes)[ 'Undefined' ];
        }

        return node;
    }
}
