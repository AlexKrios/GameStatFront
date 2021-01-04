import {action, observable} from "mobx";

import FieldObject from "../components/ui/FieldObject";

export default class AbstractFormStore {
  @observable
  loading = true;

  fields = new Map();

  config = {};

  constructor(config) {
    if (config) {
      this.config = config;
    }

    this.createFieldsMap();
  }

  @action
  setLoading(value) {
    this.loading = value;
  }

  createFieldsMap() {
    for (const key of Object.keys(this.config)) {
      this.config[key].name = key;

      this.fields.set(key, new FieldObject(key, this.config[key]));
    }
  }

  @action
  setErrorsForm(data) {
    const fieldNames = Object.keys(data.errors);

    fieldNames.forEach(fieldName => {
      const errorText = data.errors[fieldName];
      this.fields.get(fieldName).setError(errorText);
    });
  }
}
