import React, {Component} from "react";

import {inject, observer} from "mobx-react";

import {Table, Modal, message, Button} from "antd";

import Protected from "../../Protected";

import {Container} from "../../../styles/container";

import {COLUMNS} from "./columns";

import CreateUserModal from "../../modals/CreateUserModal";
import UpdateUserModal from "../../modals/UpdateUserModal";

@Protected()
@inject(provider => ({
  getUsersStore: provider.store.root.getUsersStore,
  createUserStore: provider.store.root.createUserStore,
  updateUserStore: provider.store.root.updateUserStore,
  deleteUserStore: provider.store.root.deleteUserStore
}))
@observer
class AdminPanel extends Component {
  componentDidMount() {
    const {getUsersStore} = this.props;

    getUsersStore.loadUsers();
  }

  columns = COLUMNS.concat({
    title: "Actions",
    dataIndex: "actions",
    render: (_, row) => {
      const {updateUserStore} = this.props;

      return (
        <>
          <a onClick={() => updateUserStore.setModalData("update", row._id)}>Update</a>
          <a onClick={() => this.handleDelete(row)}>Delete</a>
        </>
      );
    }
  });

  handleDelete = row => {
    const {getUsersStore, deleteUserStore} = this.props;

    Modal.confirm({
      title: "Are you sure?",
      content: `This user ${row.username} will be permanently deleted`,
      icon: false,
      onOk() {
        deleteUserStore.deleteUser(row._id)
          .then(() => getUsersStore.loadUsers())
          .then(() => message.success("User deleted", 2));
      }
    });
  }

  render() {
    const {getUsersStore, createUserStore} = this.props;
    const {users} = getUsersStore;

    return (
      <Container>
        <h1>Users</h1>
        <Button onClick={() => createUserStore.setModalVisible("create")}>Create User</Button>
        <Table columns={this.columns} dataSource={users} pagination={false} bordered/>
        <CreateUserModal/>
        <UpdateUserModal/>
      </Container>
    );
  }
}

export default AdminPanel;