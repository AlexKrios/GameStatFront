import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../styles/style.less"

import {Container, Logo, Navigation, Wrapper} from "./style";

export default class MainLayout extends Component {
    render() {
        const {children} = this.props;

        return (
            <>
                <Wrapper>
                    <Container>
                        <Logo>
                            <img src="../../static/logo.png" alt="logo"/>
                        </Logo>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/admin">Admin</Link>
                        </Navigation>
                    </Container>
                </Wrapper>
                {children}
            </>
        );
    }
}
