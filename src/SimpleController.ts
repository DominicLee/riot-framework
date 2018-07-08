export class SimpleController {

  public viewOpts: any;

  constructor(private linkedView: any) {
    this.viewOpts = this.linkedView.opts;
  }

  public changeOpts(_newOptions: any): void {
    this.linkedView.opts = <any>Object.assign(this.viewOpts, _newOptions);
    this.linkedView.update();
  }

  public changeProperty(_property: object): void {
    <any>Object.assign(this.linkedView, _property);
    this.linkedView.update();
  }

  public registerFunction(_config: IFunctionConfig) {
    this[_config.key] = _config.callback;
  }
}