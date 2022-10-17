import { Component, OnInit } from '@angular/core';
import { TestNode }          from '../../node-types/test-node';
import { FlowNode }          from '../../node-base/flow-node';
import { StartNode }         from '../../node-types/start-node';

@Component ({
    selector: 'app-flow',
    templateUrl: './flow.component.html'
})
export class FlowComponent implements OnInit {

    public nodes: FlowNode[] = []

    constructor () {
        let testNode = new TestNode();
        let startNode = new StartNode();

        startNode.setExit(testNode, 0);

        testNode.setPosition({x: 200, y: 0})

        this.nodes.push(testNode);
        this.nodes.push(startNode);
    }

    ngOnInit (): void {
    }

}
