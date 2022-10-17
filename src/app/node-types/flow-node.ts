type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

export abstract class FlowNode {
    // Abstract

    protected abstract nodeName: string;
    protected customName: string | null = null;

    public abstract initFromConfig(config: {[key: string]: any}): void;
    public abstract storeToConfig(): {[key: string]: any };

    // Overridable

    public getNodeName (): string {
        return this.nodeName;
    }

    public getDisplayName (): string {
        return this.customName ?? this.nodeName;
    }

    public init() {

    };

    // Private
}

export abstract class ExitNode extends FlowNode{

    /**
     * The array from this can be either hard coded or dynamically set.
     * Assume the array won't represent the correct number
     */
    public abstract getExitNames (): string[];

    // Overridable

    get exits (): {[exitName: string]: FlowNode | null} {
        if (!this._exits) {
            this._exits = {};
            let exitNames = this.getExitNames();

            for (let exit of exitNames) {
                this._exits[ exit ] = null;
            }
        }

        return this._exits;
    }

    get exitTotal (): number {
        return Object.keys(this.exits).length;
    }

    public setExit (node: FlowNode, exit: number) {
        let exitNames = this.getExitNames();

        if (exit > this.exitTotal - 1 || !exitNames[exit]) {
            // If the exit given is out of bounds, then just return.
            return;
        }

        this.exits[exitNames[exit]] = node;
    }

    // Private

    private _exits: {[exitName: string]: FlowNode | null} | null = null;
}

export abstract class DynamicExitNode extends ExitNode {
    // Abstract

    protected abstract minimumExits: number;
    protected abstract maximumExits: number;

    public canAddExit (): boolean {
        return this.exitTotal < this.maximumExits;
    }

    public canRemoveExit (): boolean {
        if (this.minimumExits < 1) {
            // If a node class extends this class, then it must have an exit.
            this.minimumExits = 1;
        }

        return this.exitTotal > this.minimumExits;
    }

    public addExit () {
        if (!this.canAddExit()) {
            return;
        }
    }
}

export abstract class SplitExitNode extends ExitNode {
    /**
     *
     * ** Each entry should be greater than 1 **
     *
     * To get the current total, use the `getCurrentExitTotal()` function.
     */
    protected abstract numberOfExits: FixedArray<number, 2>;
    /**
     * The current index to get the total number of exits from the `numberOfExits` array.
     * @protected
     */
    protected split = false;

    public toggleSplit () {
        this.split = !this.split;



        if (this.split) {

            for (let i = 0; i < this.currentNumberOfExits(); i ++) {

            }
        }
    }

    public currentNumberOfExits (): number {
        if (this.split) {
            return this.numberOfExits[1];
        } else {
            return this.numberOfExits[0];
        }
    }
}

export class Test extends SplitExitNode {

    getExitNames (): string[] {
        if (this.split) {
            return ['test 1', 'test 2'];
        } else {
            return ['test']
        }
    }

    initFromConfig (config: { [ p: string ]: any }): void {
    }

    storeToConfig (): { [ p: string ]: any } {
        return {};
    }

    protected nodeName: string = 'Test';
    protected numberOfExits: FixedArray<number, 2> = [1, 3];
}