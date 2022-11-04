import { NodeWithExits } from './node-with-exits';

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

export abstract class NodeWithSplitExits extends NodeWithExits {
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
    }

    public currentNumberOfExits (): number {
        if (this.split) {
            return this.numberOfExits[ 1 ];
        } else {
            return this.numberOfExits[ 0 ];
        }
    }
}