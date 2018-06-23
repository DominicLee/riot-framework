export default class RiotFramework {

    constructor() {
    }

    static initialise() {
        console.log("Initialised");
    }

    static createController(_view: any): Controller {
        return new Controller(_view)
    }
}

export class Controller {

    public viewOpts: any;

    constructor(private linkedView: any) {
        this.viewOpts = this.linkedView.opts;
    }

    public changeOpts(_newOptions: any): void {
        this.linkedView.opts = Object.assign(this.viewOpts, _newOptions);
        this.linkedView.update();
    }

    public changeProperty(_property:object):void {
        Object.assign(this.linkedView, _property);
        this.linkedView.update();
    }

    public registerFunction(_config:FunctionConfig) {
        this[_config.key] = _config.callback;
    }
}

interface FunctionConfig {
    key: string
    callback: Function
}