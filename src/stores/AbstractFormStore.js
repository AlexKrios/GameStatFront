import {action, observable} from "mobx";

import FieldObject from "../components/ui/FieldObject";

export default class AbstractFormStore {
  @observable
  loading = false;

  formId = "";

  fields = new Map();

  config = {};

  constructor(config) {
    if (config) {
      this.config = config;
    }

    this.createFieldsMap();
  }

  createFieldsMap() {
    for (const key of Object.keys(this.config)) {
      this.config[key].name = key;

      this.fields.set(key, new FieldObject(key, this.config[key]));
    }
  }

  @action
  setInitialValues(data) {
    /* Need Object with fields data */
    Object.keys(data).forEach(key => {
      const field = this.fields.get(key);

      if (field) {
        field.setInitialValue(data[key]);
      }
    });
  }

  @action
  setErrorsForm(data) {
    const fieldNames = Object.keys(data.errors);

    fieldNames.forEach(fieldName => {
      const errorText = data.errors[fieldName];
      this.fields.get(fieldName).setError(errorText);
    });
  }

  /* Loading section */
  @action
  setLoading(value) {
    this.loading = value;
  }

  /* Modal section */
  @action
  setModalVisible(name) {
    const modal = this.modals[name];

    modal.visible = !modal.visible;
  }
}
