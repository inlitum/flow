import { NodeWithExits }    from '../node-base/node-with-exits';
import { NodeConfig }       from '../node-base/flow-node';
import { OperationsConfig } from '../services/flow-controller.service';

/**
 * The undefined node is the default error node for when a node type is node
 * found for whatever reason.
 */
export class UndefinedNode extends NodeWithExits {

    protected nodeIcon: string                 = 'question_mark';
    protected nodeType: string                 = 'Undefined';
    // The config supplied to the node. This should remain untouched.
    private _rawConfig: NodeConfig | undefined = undefined;

    constructor () {
        super ();
    }

    setRawConfig (config: OperationsConfig) {
        this._rawConfig = config;
        // Set the name of the node so the user can tell that the
        // node has been seen as undefined.
        let name: string;
        // If the name has a custom name, might as well use it.
        if (config.name && config.name !== config.type) {
            name = `Undefined - ${config.name}`;
        } else {
            name = `Undefined - ${config.type}`;
        }
        this.setCustomName (name);

    }

    getExitNames (): string[] {
        if (!this._rawConfig || !this._rawConfig[ 'exits' ]) {
            return [];
        }
        // Fetch the exit names from the raw config.
        return Object.keys (this._rawConfig[ 'exits' ]).map(e => {
            // Exits are zero indexed in the array, make it one-indexed.
            let n: number = Number.parseInt(e, 10);
            return (n + 1).toString();
        });
    }

    initFromConfig (config: NodeConfig): void {
    }

    storeToConfig (): NodeConfig {
        return {};
    }

}