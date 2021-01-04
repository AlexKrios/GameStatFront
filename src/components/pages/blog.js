import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../styles/style.less"

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello from blog</h1>
        <Link to="/">
          Return
        </Link>
      </div>
    );
  }
}

export default Blog;
