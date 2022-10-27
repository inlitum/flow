import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NodeExit }                                                                                     from '../../node-base/node-exit';
import { FlowNode }                                                                                     from '../../node-base/flow-node';
import { FlowControllerService }                                                                        from '../../services/flow-controller.service';
import { Subject, takeUntil }                                                                           from 'rxjs';
import { LinkNode }                                                                                     from '../../node-types/link-node';

@Component ({
    selector: 'flow-node-exit[nodeExit]',
    templateUrl: './node-exit.component.html',
    styleUrls: [ './node-exit.component.scss' ]
})
export class NodeExitComponent implements OnInit, AfterViewInit, OnDestroy {

    private _nodeExit!: NodeExit;
    // This section of variables just unpacks the node exit class into more workable variables.
    public node: FlowNode | null                                  = null;
    public exitName: string                                       = '';
    public exitInfo: string                                       = '';
    public exitColor: string                                      = '';
    public exitClickable: boolean                                 = false;
    public exitClickCallback: ((exitName: string) => void) | null = null;
    public exitDisabled: boolean                                  = false;

    private _isFirst: boolean = false;
    private _isLast: boolean  = false;
    // The exit wrapper, used to calculate the height of the bottom line.
    @ViewChild ('exitWrapper')
    private _exitWrapper!: ElementRef;

    // The node exit associated with this node exit component.
    @Input ()
    set nodeExit (value: NodeExit) {
        this._nodeExit         = value;
        // Unpack that node exit.
        this.node              = value.getExitNode ();
        this.exitName          = value.getExitName ();
        this.exitInfo          = value.getExitInfo () ?? '';
        this.exitColor         = value.getExitColor ();
        this.exitClickable     = value.getClickable ();
        this.exitDisabled      = value.getDisabled ();
        this.exitClickCallback = value.getClickedCallback ();
    }

    @Input ()
    public parentNodeId: number = -1;

    // State information that should be passed on via the node exit loop within the flow node component.
    @Input ()
    set isFirst (value: boolean) {
        // If the current node is the first node, then the top line is hidden while the left line is not.
        this.topLineState  = value ? 'hidden' : 'normal';
        this.leftLineState = value ? 'normal' : 'hidden';

        this._isFirst = value;
    }

    @Input ()
    set isLast (value: boolean) {
        // No need for a bottom line if there is nothing under you...
        this.bottomLineState = value ? 'hidden' : 'normal';

        this._isLast = value;
    }

    @Input ()
    public passThroughNodeIds: number[] = [];

    // Line states, this will change depending on where the node exit is in the array and if any nodes are clicked.
    // These three are always shown by default.
    public rightLineState: 'normal' | 'path-to' | 'path-from'             = 'normal';
    public middleDotState: 'normal' | 'path-to' | 'path-from'             = 'normal';
    public exitLineState: 'normal' | 'path-to' | 'path-from'              = 'normal';
    // These three are hidden/shown depending on the position of the node.
    public topLineState: 'hidden' | 'normal' | 'path-to' | 'path-from'    = 'hidden';
    public leftLineState: 'hidden' | 'normal' | 'path-to' | 'path-from'   = 'hidden';
    public bottomLineState: 'hidden' | 'normal' | 'path-to' | 'path-from' = 'hidden';
    // The total height of the bottom line, default to 24.
    public bottomLineHeight: number                                       = 24;

    private _onDestroy: Subject<any> = new Subject<any> ();

    constructor (
        private _changeDetector: ChangeDetectorRef
        , private _flowController: FlowControllerService
    ) {
    }

    ngOnInit (): void {
        this._flowController.selectedNode$
        .pipe (
            takeUntil (this._onDestroy)
        )
        .subscribe (node => {
                if (!node) {
                    return;
                }
                // If the currently selected node is the parent node, set the path to this node exit as path-from.
                if (node.getNodeId () === this.parentNodeId) {
                    this.topLineState    = this._isFirst ? 'hidden' : 'path-from';
                    this.rightLineState  = 'path-from';
                    this.bottomLineState = this._isLast ? 'hidden' : 'path-from';
                    this.leftLineState   = this._isFirst ? 'path-from' : 'hidden';
                    this.middleDotState  = 'path-from';
                    this.exitLineState   = 'path-from';
                    return;
                }
                // If the current node is included in the pass through array
                if (this.passThroughNodeIds.includes (node.getNodeId ())) {
                    // Get if the pass through is this node exit's node
                    let isCurrentNode = node.getNodeId() === this.node?.getNodeId()
                    this.topLineState    = this._isFirst ? 'hidden' : 'path-to';
                    this.rightLineState  = isCurrentNode ? 'path-to' : 'normal';
                    // If the current node is not this node exit's, then just pass through.
                    this.bottomLineState = !isCurrentNode ? 'path-to' : (this._isLast ? 'hidden' : 'normal');
                    this.leftLineState   = this._isFirst ? 'path-to' : 'hidden';
                    this.middleDotState  = 'path-to';
                    this.exitLineState   = isCurrentNode ? 'path-to' : 'normal';
                    return;
                }

                this.topLineState    = this._isFirst ? 'hidden' : 'normal';
                this.rightLineState  = 'normal';
                this.bottomLineState = this._isLast ? 'hidden' : 'normal';
                this.leftLineState   = this._isFirst ? 'normal' : 'hidden';
                this.middleDotState  = 'normal';
                this.exitLineState   = 'normal';
            }
        );
    }

    ngOnDestroy (): void {
        this._onDestroy.next (null);
        this._onDestroy.complete ();
    }

    // Fetch the current height of the exit wrapper and pass that to the bottom line Height
    ngAfterViewInit (): void {
        if (!this._exitWrapper) {
            return;
        }
        this.bottomLineHeight = this._exitWrapper.nativeElement.offsetHeight - 26;
        this._changeDetector.detectChanges ();
    }

    // Handle when a node exit is clicked, will call the exit callback if one is defined.
    public nodeExitClicked () {
        console.log (this.parentNodeId, this.node?.getNodeId (), this.passThroughNodeIds);

        if (!this.exitClickable || !this.exitClickCallback) {
            return;
        }

        this.exitClickCallback (this.exitName);
    }
}
