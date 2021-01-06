import React, {Component, Fragment} from "react";

import {inject, observer} from "mobx-react";

import {Col, Row, Spin} from "antd";

import {Form} from "../../../ui/Form";
import Input from "../../../ui/Input";

import {Title} from "../../../../styles/admin";
import Submit from "../../../../styles/ui/Submit";

@inject(provider => ({
  updateUserStore: provider.store.root.updateUserStore
}))
@observer
class UpdateUserForm extends Component {
  handleFinish = values => {
    const {updateUserStore} = this.props;

    updateUserStore.updateUser(values);
  }

  render() {
    const {updateUserStore} = this.props;

    if (updateUserStore.loading) {
      return <Spin style={{position: "fixed", top: "50%", left: "50%"}}/>;
    }

    return (
      <Fragment>
        <Title>Update User</Title>
        <Form config={updateUserStore.fields} onFinish={this.handleFinish}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Input name="username"/>
            </Col>
            <Col span={12}>
              <Input name="email"/>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Input name="age"/>
            </Col>
            <Col span={12}>
              <Input name="password"/>
            </Col>
          </Row>
          <Submit type="primary" htmlType="submit">Update User</Submit>
        </Form>
      </Fragment>
    );
  }
}

export default UpdateUserForm;
