import {action, makeObservable, observable} from "mobx";

export default class FieldObject {
  name;

  @observable type;

  @observable placeholder;

  @observable rules;

  @observable error;

  @observable validateStatus;

  @observable help;

  constructor(name, config) {
    makeObservable(this);

    const {type, placeholder, rules} = config;

    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.rules = rules;
  }

  @action
  setValidateStatus() {
    if (this.error) {
      return "error";
    }

    return null;
  }

  @action
  setError(error) {
    this.error = error;
    this.help = error;
    this.validateStatus = this.setValidateStatus();
  }
}
