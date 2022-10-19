import { FlowNode } from './flow-node';

export type NodeExitMap = {
    [exitName: string]: NodeExit
}

export class NodeExit {

    private _disabled: boolean         = false;
    private _exitName: string          = '#';
    private _exitInfo: string | null   = null;
    private _exitNode: FlowNode | null = null;
    private _exitColor: string         = 'green';

    public setExitName (name: string): NodeExit {
        this._exitName = name;

        return this;
    }

    public setDisabled (disabled: boolean): NodeExit {
        this._disabled = disabled;

        return this;
    }

    public setExitInfo (info: string) : NodeExit {
        this._exitInfo = info;

        return this;
    }

    public setExitNode (node: FlowNode | null): NodeExit {
        this._exitNode = node;

        return this;
    }

    public setExitColor (color: string): NodeExit {
        this._exitColor = color;

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
}