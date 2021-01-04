import React, {Component} from "react";
import {withRouter} from "react-router";

import {inject, observer} from "mobx-react";

import {Form} from "../../../ui/Form";
import Input from "../../../ui/Input";

import {FormWrapper, Submit, Title} from "../../../../styles/admin";

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
          <Input name="username"/>
          <Input name="password"/>
          <Submit type="primary" htmlType="submit">Login</Submit>
        </Form>
      </FormWrapper>
    );
  }
}

export default AdminForm;
