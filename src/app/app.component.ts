import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FlowControllerService }                               from './services/flow-controller.service';
import { TEST_FLOW }                                           from './testing/test-flow';
import { Subject, takeUntil }                                  from 'rxjs';
import { FlowNode }                                            from './node-base/flow-node';
import { flow }                                                from 'lodash';

@Component ({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'flow';

    @ViewChild ('flow')
    private flowElement!: ElementRef;

    private _onDestroy$: Subject<null> = new Subject<null> ();

    constructor (private _flowController: FlowControllerService) {
    }

    ngOnInit (): void {
        this._flowController.parseFlow (TEST_FLOW);

        this._flowController.selectedNode$
        .pipe (takeUntil(this._onDestroy$))
        .subscribe (selectedNode => this.handleSelectedNodeChanged(selectedNode));

        this._flowController.focusChanged$
        .pipe (takeUntil (this._onDestroy$))
        .subscribe (focusDiff => this.handleFocusChanged(focusDiff));
    }

    ngOnDestroy (): void {
        this._onDestroy$.next (null);
        this._onDestroy$.complete ();
    }

    public mouseDown: boolean = false;

    handleMouseDown () {
        this.mouseDown = true;
    }

    handleMouseUp () {
        this.mouseDown  = false;
        this.lastMouseX = null;
        this.lastMouseY = null;
    }

    private lastMouseY: number | null = null;
    private lastMouseX: number | null = null;

    handleMouseMove (event: MouseEvent) {
        if (!this.mouseDown) {
            return;
        }

        let currentMouseX = event.x;
        let currentMouseY = event.y;

        if (!this.lastMouseY || !this.lastMouseX) {
            this.lastMouseX = currentMouseX;
            this.lastMouseY = currentMouseY;
            return;
        }

        let xDiff = currentMouseX - this.lastMouseX;
        let yDiff = currentMouseY - this.lastMouseY;

        this.flowElement.nativeElement.scrollTop -= yDiff;
        this.flowElement.nativeElement.scrollLeft -= xDiff;

        this.lastMouseX = currentMouseX;
        this.lastMouseY = currentMouseY;
    }

    /**
     * The primary function of this node is to move the view area a little
     * if the selected node is outside the view area.
     * Called whenever a new node is selected.
     * @param node The selected node.
     */
    handleSelectedNodeChanged (node: FlowNode | null) {
        // If there is no node or there isn't any flow element, return.
        if (!node || !this.flowElement) {
            return;
        }
        // Store the native element in memory just to make calling a little easier.
        let nElement = this.flowElement.nativeElement;
        // Get the bounds of the flow element.
        let flowHeight = nElement.clientHeight;
        let flowWidth = nElement.clientWidth;
        // Get the node component related to the selected node.
        let nodeComponent = this._flowController.getNodeComponentFromId(node.getNodeId());
        // Check that there is a node component linked to the node.
        if (!nodeComponent) {
            return;
        }
        // Get the current position of the node.
        let currentPos = nodeComponent.nodeWrapper.nativeElement.getBoundingClientRect ();
        // These variables store the amount the scroll bar needs to move to bring the node into view.
        let changeHeight = 0;
        let changeWidth = 0;

        // Check if the current position is less than 12.
        // If the number is negative it means the top of the node
        // is off the screen, the 12 is a little buffer around the node
        if (currentPos.top < 12) {
            changeHeight = currentPos.top - 12;
        } else if (flowHeight - currentPos.top < 34) {
            // flowHeight - currentPos.top will give us the difference
            // the top of the current position is from the bottom.
            // If the difference is less than 34 (the height of a node)
            // then the view port needs to be moved.
            changeHeight = currentPos.top - flowHeight + 46;
        }
        // Check if the current position is less than 12.
        if (currentPos.left < 12) {
            changeWidth = currentPos.left - 12;
        } else if (flowWidth - currentPos.left < 160) {
            // Check if the current position is outside the viewport.
            // Check the height check for a breakdown of this code.
            changeWidth = currentPos.left - flowWidth + 172;
        }
        // Change the scroll position
        nElement.scrollTop += changeHeight;
        nElement.scrollLeft += changeWidth;
    }

    /**
     * Handles when the flow controller sends a new update to the focused node.
     *
     * This will move the current scroll position to center on the focused node.
     * @param focusDiff
     */
    handleFocusChanged (focusDiff: {top: number, left: number}): void {
        if (!this.flowElement) {
            return;
        }

        let nElement = this.flowElement.nativeElement;
        // Get the flow bounds.
        let flowHeight = nElement.offsetHeight;
        let flowWidth = nElement.offsetWidth;
        // Calculate the center position of the flow
        let centerHeight = flowHeight / 2;
        let centerWidth = flowWidth / 2;
        // Calculate the amount needed to scroll to center on the focused node.
        // +17 & +80 is half the bounds of the node element (36 & 160)
        let dH = focusDiff.top - centerHeight + 17;
        let dW = focusDiff.left - centerWidth + 80;

        nElement.scrollTop += dH;
        nElement.scrollLeft += dW;

    }
}
