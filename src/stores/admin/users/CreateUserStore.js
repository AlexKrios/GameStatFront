import {action, makeObservable, observable} from "mobx";

import {message} from "antd";

import AbstractFormStore from "../../AbstractFormStore";
import config from "../../../components/forms/admin/create/config";

export default class CreateUserStore extends AbstractFormStore {
  @observable
  modals = {
    create: {
      visible: false
    }
  };

  constructor(parent) {
    super(config);
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;

    this.formId = "create-user-form";
  }

  @action
  createUser(value) {
    const {getUsersStore} = this.parent;

    return this.api.createUser(value)
      .then(() => getUsersStore.loadUsers())
      .then(() => this.setModalVisible("create"))
      .then(() => message.success("User created"))
      .catch(err => {
        console.log(err);
        message.error("Error");
      })
  }
}
