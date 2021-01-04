import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../styles/style.less"

import {Container} from "../../styles/container";

export default class Index extends Component {
  render() {
    return (
      <Container>
        <h1>Hello</h1>
        <Link to="/admin/login">
          Admin
        </Link>
        <br/>
        <Link to="/blog">
          Blog
        </Link>
      </Container>
    );
  }
}
