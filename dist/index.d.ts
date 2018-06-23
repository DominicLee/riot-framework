export default class RiotFramework {
    constructor();
    static initialise(): void;
    static createController(_view: any): Controller;
}
export declare class Controller {
    private linkedView;
    viewOpts: any;
    constructor(linkedView: any);
    changeOpts(_newOptions: any): void;
    changeProperty(_property: object): void;
    registerFunction(_config: FunctionConfig): void;
}
interface FunctionConfig {
    key: string;
    callback: Function;
}
export {};
