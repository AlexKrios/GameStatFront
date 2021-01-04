import React, {Component} from "react";

import {inject, observer} from "mobx-react";

import Protected from "../../Protected";

import {CustomTable} from "../../../styles/table";

import {Container} from "../../../styles/container";

@Protected()
@inject(provider => ({adminStore: provider.store.root.adminStore}))
@observer
class AdminPanel extends Component {
  componentDidMount() {
    const {adminStore} = this.props;

    adminStore.loadUsers();
  }

  render() {
    const {users} = this.props.adminStore;

    return (
      <Container>
        <h1>Users</h1>
        <CustomTable columns={columns} dataSource={users} pagination={false}/>
      </Container>
    );
  }
}

const columns = [
  {
    title: 'User Name',
    dataIndex: 'username',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }
];

export default AdminPanel;