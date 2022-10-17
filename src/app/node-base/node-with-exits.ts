import { FlowNode } from './flow-node';
import { NodeExit } from './node-exit';

export abstract class NodeWithExits extends FlowNode {

    /**
     * The array from this can be either hard coded or dynamically set.
     *  <br>
     * For static nodes that have a set number of exits, return all exit names.
     * <br>
     * For dynamic nodes that have an uncertain number of exits, use the `totalExits` property
     * to get the current total number of exits.
     */
    public abstract getExitNames (): string[];

    // Overridable
    protected get exits (): { [ exitName: string ]: NodeExit } {
        // If the exits map isn't yet defined, generate the map.
        if (!this._exits) {
            this._exits   = {};
            let exitNames = this.getExitNames ();

            for (let exit of exitNames) {
                this._exits[ exit ] = new NodeExit().setExitName(exit);
            }
        }

        return this._exits;
    }

    get exitTotal (): number {
        return Object.keys (this.exits).length;
    }

    public setExit (node: FlowNode | null, exit: number) {
        let exitNames = this.getExitNames ();

        if (exit > this.exitTotal - 1 || !exitNames[ exit ]) {
            // If the exit given is out of bounds, then just return.
            return;
        }

        this.exits[ exitNames[ exit ] ].setExitNode(node);
    }

    public getExits(): {[exitName: string]: NodeExit} {
        return this.exits;
    }

    // Private

    private _exits: { [ exitName: string ]: NodeExit } | null = null;
}