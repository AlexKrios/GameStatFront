import {action, makeObservable, observable} from "mobx";

export default class FieldObject {
  name;

  @observable initialValue;

  @observable type;

  @observable placeholder;

  @observable rules;

  @observable error;

  @observable validateStatus;

  @observable help;

  constructor(name, config) {
    makeObservable(this);

    const {type, placeholder, rules, initialValue} = config;

    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.rules = rules;
    this.initialValue = initialValue;
  }

  @action
  setInitialValue(value) {
    this.initialValue = value;
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
