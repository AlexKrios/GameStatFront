import React, {Component} from "react";
import {observer} from "mobx-react";

import AdminForm from "../../../forms/admin/login";

import {Wrapper} from "../../../../styles/admin";

@observer
class AdminLogin extends Component {
  render() {
    return (
      <Wrapper>
        <AdminForm/>
      </Wrapper>
    );
  }
}

export default AdminLogin;
