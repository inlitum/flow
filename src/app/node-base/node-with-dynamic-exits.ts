import { NodeWithExits } from './node-with-exits';
import { NodeExit }      from './node-exit';

export abstract class NodeWithDynamicExits extends NodeWithExits {
    // Abstract

    protected abstract minimumExits: number;
    protected abstract maximumExits: number;
    protected totalExits: number = 1;

    public canAddExit (): boolean {
        return this.exitTotal < this.maximumExits;
    }

    public canRemoveExit (): boolean {
        if (this.minimumExits < 1) {
            // There must be at least one exit.
            this.minimumExits = 1;
        }

        let exitNames = Object.keys (this.exits);
        // Check that the last exit is null.
        if (this.exits[ exitNames[ exitNames.length - 1 ] ] !== null) {
            return false;
        }

        return this.exitTotal > this.minimumExits;
    }

    public addExit () {
        if (!this.canAddExit ()) {
            return;
        }

        this.totalExits++;
        // Get the names for all the exits.
        const exitNames = this.getExitNames ();

        if (exitNames.length !== this.totalExits) {
            // If the exit names array doesn't match the total exits then it is a bug, most likely created by bad implementation of a node.
            return;
        }
        const exitName = exitNames[ exitNames.length - 1 ];
        // Add an empty exit to the end with the new name.
        this.exits[ exitName ] = new NodeExit().setExitName(exitName);
    }

    public removeExit () {
        if (!this.canRemoveExit ()) {
            return;
        }
        //Get all the names.
        const exitNames        = Object.keys (this.exits);
        const exitNameToDelete = exitNames[ exitNames.length - 1 ];
        // Delete the exit.
        delete this.exits[ exitNameToDelete ];
        this.totalExits--;
    }
}