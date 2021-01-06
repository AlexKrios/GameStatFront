import {action, makeObservable, observable} from "mobx";

import AbstractFormStore from "../../AbstractFormStore";

import {message} from "antd";

export default class DeleteUserStore extends AbstractFormStore {
  @observable
  modal = {
    visible: false,
    username: ""
  };

  constructor(parent) {
    super();
    makeObservable(this);

    this.parent = parent;
    this.api = parent.api;
  }

  @action
  deleteUser(id) {
    return this.api.deleteUser(id)
      .catch(err => {
        console.log(err);
        message.error("Error");
      })
  }

  @action
  setModalData(username) {
    this.modal.username = username;
    this.modal.visible = !this.modal.visible;
  }
}
