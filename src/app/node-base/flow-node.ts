export interface NodeConfig {
    [ keys: string ]: any;
}

export abstract class FlowNode {
    // Abstract

    protected abstract nodeType: string;
    protected abstract nodeIcon: string;

    public abstract initFromConfig (config: NodeConfig): void;

    public abstract storeToConfig (): NodeConfig;

    // Override-able
    protected customName: string | null = null;
    protected canRename: boolean        = true;
    private _selected: boolean          = false;
    private _errored: boolean           = false;
    private _warning: boolean           = false;
    private _modified: boolean          = false;

    public getNodeType (): string {
        return this.nodeType;
    }

    public getDisplayName (): string {
        return this.customName ?? this.nodeType;
    }

    public setCustomName (name: string) {
        if (this.canRename) {
            this.customName = name;
        }
    }

    public getNodeIcon (): string {
        return this.nodeIcon;
    }

    public getNodeId (): number {
        return this._nodeId;
    }

    public setNodeId (id: number) {
        this._nodeId = id;
    }

    public getState (): 'normal' | 'selected' | 'errored' | 'warning' | 'modified' {
        if (this._selected) {
            return 'selected';
        }

        if (this._errored) {
            return 'errored';
        }

        if (this._warning) {
            return 'errored';
        }

        if (this._modified) {
            return 'modified';
        }

        return 'normal';
    }

    public hasNodeNote (): boolean {
        return this._nodeNotes != null && this._nodeNotes.length > 0;
    }

    public getNodeNotes (): string[] {
        return this._nodeNotes ?? [];
    }

    public setNodeNote (notes: string[]) {
        this._nodeNotes = notes;
    }

    public getSelected (): boolean {
        return this._selected;
    }

    public setSelected (value: boolean) {
        this._selected = value;
    }

    public getErrored (): boolean {
        return this._errored;
    }

    public setErrored (value: boolean) {
        this._errored = value;
    }

    public getWarning (): boolean {
        return this._warning;
    }

    public setWarning (value: boolean) {
        this._warning = value;
    }

    public getModified (): boolean {
        return this._modified;
    }

    public setModified (value: boolean) {
        this._modified = value;
    }

    /* +-=-=-=-=-=--=-=-=- Private -=-=-=-=-=--=-=-=-+ */

    private _nodeId: number             = -1;
    private _nodeNotes: string[] | null = null;

}