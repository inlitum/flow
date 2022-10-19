import { NodeWithExits } from '../node-base/node-with-exits';
import { NodeConfig }    from '../node-base/flow-node';

export class UndefinedNode extends NodeWithExits {

    protected nodeIcon: string = 'question_mark';
    protected nodeType: string = 'Undefined';

    private _rawConfig: NodeConfig = {};

    getExitNames (): string[] {
        return [];
    }

    initFromConfig (config: NodeConfig): void {
        this._rawConfig = config;
    }

    storeToConfig (): NodeConfig {
        return this._rawConfig;
    }

}