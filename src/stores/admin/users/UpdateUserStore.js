import {action, makeObservable, observable} from "mobx";

import {message} from "antd";

import AbstractFormStore from "../../AbstractFormStore";
import config from "../../../components/forms/admin/update/config";

export default class UpdateUserStore extends AbstractFormStore {
  @observable
  modals = {
    update: {
      visible: false,
      id: null
    }
  };

  constructor(parent) {
    super(config);
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;

    this.formId = "update-user-form";
  }

  @action
  updateUser(value) {
    const {getUsersStore} = this.parent;

    return this.api.updateUser(this.modals.update.id, value)
      .then(() => getUsersStore.loadUsers())
      .then(() => this.setModalVisible("update"))
      .then(() => message.success("User updated", 2))
      .catch(err => {
        console.log(err);
        message.error("Error");
      })
  }

  @action
  async setModalData(name, id) {
    this.setLoading(true);

    this.setModalVisible(name);
    await this.api.loadUser(id)
      .then(response => {
        this.modals.update.id = response.data._id;
        this.setInitialValues(response.data);
      })
      .catch(err => {
        console.log(err);
        message.error("Error");
      })
      .finally(() => {
        this.setLoading(false);
      });
  }
}
