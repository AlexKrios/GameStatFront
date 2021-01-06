import React, {Component} from "react";
import {withRouter} from "react-router";

import {inject, observer} from "mobx-react";

import {Col, Row} from "antd";

import {Form} from "../../../ui/Form";
import Input from "../../../ui/Input";

import {FormWrapper, Title} from "../../../../styles/admin";

import Submit from "../../../../styles/ui/Submit";

@withRouter
@inject(provider => ({store: provider.store.root.authStore}))
@observer
class AdminForm extends Component {
  handleFinish = values => {
    const {store, history} = this.props;

    store.login(values).then(() => history.push("/admin"));
  }

  render() {
    const {store} = this.props;

    return (
      <FormWrapper>
        <Title>Admin</Title>
        <Form config={store.fields} onFinish={this.handleFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Input name="username"/>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Input name="password"/>
            </Col>
          </Row>
          <Submit type="primary" htmlType="submit">Login</Submit>
        </Form>
      </FormWrapper>
    );
  }
}

export default AdminForm;
