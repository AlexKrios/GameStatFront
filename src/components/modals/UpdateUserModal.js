import React, {Component} from "react";

import {inject, observer} from "mobx-react";

import {Modal} from "../../styles/ui/Modal";

import UpdateUserForm from "../forms/admin/update";

@inject(provider => ({
  updateUserStore: provider.store.root.updateUserStore
}))
@observer
class UpdateUserModal extends Component {
  render() {
    const {updateUserStore} = this.props;
    const {visible} = updateUserStore.modals.update;

    return (
      <Modal
        visible={visible}
        title={null}
        footer={null}
        onCancel={() => updateUserStore.setModalVisible("update")}
      >
        <UpdateUserForm/>
      </Modal>
    );
  }
}

export default UpdateUserModal;