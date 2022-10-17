import { FixedArray, NodeWithSplitExits } from '../node-base/node-with-split-exits';

export interface TestNodeConfig {
    test: string;
}

export class TestNode extends NodeWithSplitExits {

    protected nodeIcon: string = 'bug_report';
    protected nodeType: string = 'test';

    getExitNames (): string[] {
        return ['Exit 1'];
    }

    initFromConfig (config: TestNodeConfig): void {
    }

    storeToConfig (): TestNodeConfig {
        return {
            test: 'bruv'
        };
    }

    protected numberOfExits: FixedArray<number, 2> = [1, 2];

}