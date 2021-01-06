import {action, makeObservable, observable} from "mobx";

import {message} from "antd";

import AbstractFormStore from "./AbstractFormStore";

import config from "../components/forms/admin/create/config";

export default class AdminStore extends AbstractFormStore {
  @observable
  users = [];

  constructor(parent) {
    super(config);
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
  createUser(value) {
    return this.api.createUser(value)
      .then(() => this.loadUsers())
      .then(() => message.success("User created"))
      .catch(() => message.error("Error"));
  }

  @action
  updateUser(values) {
    return this.api.updateUser(values);
  }

  @action
  deleteUser(id) {
    return this.api.deleteUser(id)
      .then(() => this.loadUsers())
      .then(() => message.success("User deleted"))
      .catch(() => message.error("Error"));
  }

  @action
  setUsers(data) {
    data.forEach((row, i) => {
      row.key = i;
    });

    this.users = data;
  }
}
