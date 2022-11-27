import { FlowNode, NodeConfig } from '../node-base/flow-node';

export class LinkNode extends FlowNode {

    protected nodeIcon: string = 'link';
    protected nodeType: string = 'Link';

    private _linkedNodeId: number | null = null;

    public override initFromConfig (config: NodeConfig): void {
    }

    public storeToConfig (): NodeConfig {
        return {};
    }

    public setLinkedNodeId (nodeId: number) {
        this._linkedNodeId = nodeId;

        this.setCustomName (`Linked to node #${this._linkedNodeId}`);
    }

    public getLinkedNodeId (): number | null {
        return this._linkedNodeId;
    }

}