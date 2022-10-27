import { FlowNode }              from './flow-node';
import { NodeExit, NodeExitMap } from './node-exit';


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
    public exitRule: 'showAll' | 'nonEmpty' | 'betweenFirstAndLast' | 'showAllIfOne' = 'showAll';

    // Overridable
    protected get exits (): NodeExitMap {
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

    /**
     * Checks the node's exit rules and returns the node exits based on that
     * rule.
     * - nonEmpty: Only node exits that have a non-null exit will be returned.
     * - betweenFirstAndLast: All exits between the first non-null exit and the last will be returned. (null exits included)
     * - showAllIfOne: If a single exit has a non-null exit, all exits will be return, else none.
     * - showAll: All exits (including null exits) will be returned.
     */
    getDisplayExits (): NodeExitMap {
        switch (this.exitRule) {
            case 'nonEmpty':
                return this._getNonEmptyExits();
            case 'betweenFirstAndLast':
                return this._getBetweenFirstAndLastExits();
            case 'showAllIfOne':
                return this._showAllExitsIfOneExists();
            case 'showAll':
            default:
                return this.getExits();
        }
    }

    // Private

    private _exits: NodeExitMap | null = null;

    /**
     * Gets node exits that have a non-null exit will be returned.
     * @private
     */
    private _getNonEmptyExits (): NodeExitMap {
        let exits = this.getExits();
        let outputExits: NodeExitMap = {};
        let exitNames = Object.keys(exits);

        for (let exitName of exitNames) {
            let exit = exits[exitName];

            if (exit.getExitNode() != null) {
                outputExits[exitName] = exit;
            }
        }

        return outputExits;
    }

    /**
     * All exits between the first non-null exit and the last will be returned. (null exits included)
     */
    private _getBetweenFirstAndLastExits(): NodeExitMap {
        let exits = this.getExits();
        let outputExits: NodeExitMap = {};
        let exitNames = Object.keys(exits);

        let firstIdx = -1;
        let lastIdx = -1;

        // Get the first non-null exit.
        for (let i = 0; i < exitNames.length; i++) {
            let exit = exits[exitNames[i]];

            if (exit.getExitNode() != null) {
                firstIdx = i;
                break;
            }
        }
        // If no exits are found, just return an empty output.
        if (firstIdx === -1) {
            return outputExits;
        }

        // Find the last non-null exit.
        for (let i = exitNames.length - 1; i >= firstIdx; i--) {
            let exit = exits[exitNames[i]];

            if (exit.getExitNode() != null) {
                lastIdx = i;
                break;
            }
        }
        // Since first exit is defined, it can be assumed that the first will either be a node after or the first node.
        for (let i = firstIdx; i <= lastIdx; i++) {
            // Add all nodes between the first and last idx (including first and last) to the output map.
            let exitName = exitNames[i];
            outputExits[exitName] = exits[exitName];
        }

        return outputExits;
    }

    /**
     * If a single exit has a non-null exit, all exits will be return, else none.
     * @private
     */
    private _showAllExitsIfOneExists (): NodeExitMap {
        let exits = this.getExits();
        let exitNames = Object.keys(exits);

        for (let exitName of exitNames) {
            let exit = exits[exitName];
            if (exit.getExitNode() != null) {
                return exits;
            }
        }

        return {};
    }
}