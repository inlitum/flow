import { FlowNode } from './flow-node';

export type NodeExitMap = {
    [ exitName: string ]: NodeExit
}

export class NodeExit {

    // Whether the node exit is disabled.
    private _disabled: boolean                                    = false;
    // The name of the exit.
    private _exitName: string                                     = '#';
    // A short blurb to give extra context to the node exit (ie. percentage)
    private _exitInfo: string | null                              = null;
    // The actual node stored within the exit.
    private _exitNode: FlowNode | null                            = null;
    // The color that will display for the node exit.
    private _exitColor: string                                    = 'green';
    // Whether the node exit is clickable. If a callback function is defined, then the node exit is clickable.
    private _clickable: boolean                                   = false;
    // The callback function that will be called when the node exit is clicked.
    private _clickedCallback: ((exitName: string) => void) | null = null;

    public setExitName (name: string): NodeExit {
        this._exitName = name;

        return this;
    }

    public setDisabled (disabled: boolean): NodeExit {
        this._disabled = disabled;

        return this;
    }

    public setExitInfo (info: string): NodeExit {
        this._exitInfo = info;

        return this;
    }

    public setExitNode (node: FlowNode | null): NodeExit {
        this._exitNode = node;
        if (!node) {
            this._disabled = true;
        }
        return this;
    }

    public setExitColor (color: string): NodeExit {
        this._exitColor = color;

        return this;
    }

    public setClickedCallback (callback: (exitName: string) => void) {
        this._clickable = true;
        this._clickedCallback = callback;

        return this;
    }

    public getDisabled (): boolean {
        return this._disabled;
    }

    public getExitName (): string {
        return this._exitName;
    }

    public getExitInfo (): string | null {
        return this._exitInfo;
    }

    public getExitNode (): FlowNode | null {
        return this._exitNode;
    }

    public getExitColor (): string {
        return this._exitColor;
    }

    public getClickable (): boolean {
        return this._clickable;
    }

    public getClickedCallback (): ((exitName: string) => void) | null {
        return this._clickedCallback;
    }
}