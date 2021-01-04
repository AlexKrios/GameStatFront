import React, {Component} from "react";
import {Redirect} from "react-router";

import {inject, observer} from "mobx-react";

const Protected = () => SecuredComponent => {
  @inject(provider => ({authStore: provider.store.root.authStore}))
  @observer
  class AuthenticatedComponent extends Component {
    render() {
      const {authStore, ...rest} = this.props;

      authStore.setAuthenticated();

      if (authStore.authenticated) {
        return (
          <SecuredComponent {...rest} />
        );
      }

      return <Redirect to="/admin/login" />
    }
  }

  return AuthenticatedComponent;
}

export default Protected;
