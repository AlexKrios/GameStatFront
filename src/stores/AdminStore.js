import {action, makeObservable, observable} from "mobx";

import AbstractFormStore from "./AbstractFormStore";

export default class AdminStore extends AbstractFormStore{
  @observable
  users = [];

  constructor(parent) {
    super();
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;
  }

  @action
  loadUsers() {
    return this.api.loadUsers().then(({data}) => {
      this.setUsers(data);
    });
  }

  @action
  setUsers(data) {
    this.users = data;
  }
}
