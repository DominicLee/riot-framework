"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RiotFramework {
    constructor() {
    }
    static initialise() {
        console.log("Initialised");
    }
    static createController(_view) {
        return new Controller(_view);
    }
}
exports.default = RiotFramework;
class Controller {
    constructor(linkedView) {
        this.linkedView = linkedView;
        this.viewOpts = this.linkedView.opts;
    }
    changeOpts(_newOptions) {
        this.linkedView.opts = Object.assign(this.viewOpts, _newOptions);
        this.linkedView.update();
    }
    changeProperty(_property) {
        Object.assign(this.linkedView, _property);
        this.linkedView.update();
    }
    registerFunction(_config) {
        this[_config.key] = _config.callback;
    }
}
exports.Controller = Controller;
