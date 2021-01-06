import {action, makeObservable, observable} from "mobx";

import AbstractFormStore from "../../AbstractFormStore";
import {message} from "antd";

export default class GetUsersStore extends AbstractFormStore {
  @observable
  users = [];

  constructor(parent) {
    super();
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;
  }

  @action
  async loadUser(id) {
    this.setLoading(true);

    return await this.api.loadUser(id)
      .then(({data}) => {
        this.setUsers(data);
      })
      .catch(err => {
        console.log(err);
        message.error("Error");
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  @action
  async loadUsers() {
    this.setLoading(true);

    return await this.api.loadUsers()
      .then(({data}) => {
        this.setUsers(data);
      }).catch(err => {
        console.log(err);
        message.error("Error");
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  @action
  setUsers(data) {
    data.forEach((row, i) => {
      row.key = i;
    });

    this.users = data;
  }
}
