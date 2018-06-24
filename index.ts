import {FirebaseController} from './FirebaseController';

export default class RiotFramework {

    constructor() {
    }

    static initialise() {
        console.log("Initialised");
    }

    static initialiseDatabase(_config:IFirebaseConfig):void {
        FirebaseController.initialise(_config);
    }

    static createController(_view: any): Controller {
        return new Controller(_view)
    }

    static postToDatabase(_config:IUserScore):void {
        FirebaseController.postToDatabase(_config);
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