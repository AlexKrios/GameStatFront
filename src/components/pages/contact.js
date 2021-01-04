import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../styles/style.less"

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello from contact</h1>
                <Link to="/">
                    Return
                </Link>
            </div>
        );

    }
}

export default Contact;
