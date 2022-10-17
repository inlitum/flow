import { NodeWithExits } from '../node-base/node-with-exits';
import { NodeConfig }    from '../node-base/flow-node';

export class StartNode extends NodeWithExits {
    protected nodeIcon: string = '';
    protected nodeType: string = 'Start';

    constructor () {
        super ();

        this.canRename = false;
    }

    getExitNames (): string[] {
        return ['Start'];
    }

    initFromConfig (config: NodeConfig): void {
    }

    storeToConfig (): NodeConfig {
        return {};
    }

}