import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";

import {inject, observer} from "mobx-react";

import {Spin} from "antd";

import "../../styles/style.less"

import {Container, Logo, Navigation, Wrapper} from "./style";

@inject(provider => ({
  authStore: provider.store.root.authStore
}))
@observer
class MainLayout extends Component {
  componentDidMount() {
    const {authStore} = this.props;

    authStore.setLoading(false);
  }

  render() {
    const {authStore, children} = this.props;

    if (authStore.loading) {
      return <Spin style={{position: "fixed", top: "50%", left: "50%"}}/>;
    }

    return (
      <Fragment>
        <Wrapper>
          <Container>
            <Logo>
              <img src="../../static/logo.png" alt="logo"/>
            </Logo>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/admin">Admin</Link>
              {authStore.authenticated && (
                <Link to="/admin/login" onClick={() => authStore.logout()}>Logout</Link>
              )}
            </Navigation>
          </Container>
        </Wrapper>
        {children}
      </Fragment>
    );
  }
}

export default MainLayout;