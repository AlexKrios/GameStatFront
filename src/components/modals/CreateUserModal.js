import React, {Component} from "react";

import {inject, observer} from "mobx-react";

import {Modal} from "../../styles/ui/Modal";

import CreateUserForm from "../forms/admin/create";

@inject(provider => ({
  createUserStore: provider.store.root.createUserStore
}))
@observer
class CreateUserModal extends Component {
  render() {
    const {createUserStore} = this.props;
    const {visible} = createUserStore.modals.create;

    return (
      <Modal
        visible={visible}
        title={null}
        footer={null}
        onCancel={() => createUserStore.setModalVisible("create")}
      >
        <CreateUserForm/>
      </Modal>
    );
  }
}

export default CreateUserModal;