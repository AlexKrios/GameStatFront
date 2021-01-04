import {action, makeObservable, observable} from "mobx";

import AbstractFormStore from "./AbstractFormStore";

import config from "../components/forms/admin/login/config";

export default class AuthStore extends AbstractFormStore {
  @observable
  authenticated = false;

  @observable
  submitting = true;

  constructor(parent) {
    super(config);
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;
  }

  @action
  setToken(token) {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }

  @action
  setAuthenticated() {
    this.authenticated = !!localStorage.getItem("token");
  }

  @action
  setSubmitting(value) {
    this.submitting = value;
  }

  login(values) {
    return new Promise((resolve, reject) => {
      this.setSubmitting(true);

      return this.api.adminLogin(values)
        .then(response => {
          this.setToken(response.token);
          this.setAuthenticated();
          resolve();
        })
        .catch(e => {
          this.setErrorsForm(e.response.data)
          reject();
        })
        .finally(() => this.setSubmitting(false));
    });
  }
}
