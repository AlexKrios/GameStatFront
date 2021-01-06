import React, {Component, Fragment} from "react";

import {inject, observer} from "mobx-react";

import {Col, Row, Spin} from "antd";

import {Form} from "../../../ui/Form";
import Input from "../../../ui/Input";

import {Title} from "../../../../styles/admin";
import Submit from "../../../../styles/ui/Submit";

@inject(provider => ({
  createUserStore: provider.store.root.createUserStore
}))
@observer
class CreateUserForm extends Component {
  handleFinish = values => {
    const {createUserStore} = this.props;

    createUserStore.createUser(values);
  }

  render() {
    const {createUserStore} = this.props;

    if (createUserStore.loading) {
      return <Spin style={{position: "fixed", top: "50%", left: "50%"}}/>;
    }

    return (
      <Fragment>
        <Title>Create User</Title>
        <Form config={createUserStore.fields} onFinish={this.handleFinish}>
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
          <Submit type="primary" htmlType="submit">Create User</Submit>
        </Form>
      </Fragment>
    );
  }
}

export default CreateUserForm;
