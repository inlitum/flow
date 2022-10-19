import { NodeWithExits } from '../node-base/node-with-exits';
import { NodeConfig }    from '../node-base/flow-node';

/**
 * The undefined node is the default error node for when a node type is node
 * found for whatever reason.
 */
export class UndefinedNode extends NodeWithExits {

    protected nodeIcon: string = 'question_mark';
    protected nodeType: string = 'Undefined';
    // The config supplied to the node. This should remain untouched.
    private _rawConfig: NodeConfig | undefined = undefined;

    setRawConfig (config: {[key: string]: any}) {
        this._rawConfig = config;
    }

    getExitNames (): string[] {
        if (!this._rawConfig || !this._rawConfig['exits']) {
            return [ ];
        }
        // Fetch the exit names from the raw config.
        return Object.keys(this._rawConfig['exits']);
    }

    initFromConfig (config: NodeConfig): void {}
    storeToConfig (): NodeConfig { return {}; }


}