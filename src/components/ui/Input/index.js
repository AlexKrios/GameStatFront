import React, {Component} from "react";

import {FormContext} from "../../../contexts/FormContext";

import Item from "../Form/Item";

import {Input as InputStyled} from "./style";

export default class Input extends Component {
    static contextType = FormContext;

    render() {

        const {name} = this.props;
        const {config} = this.context;

        const {type, placeholder} = config.get(name);

        return (
            <Item name={name}>
                <InputStyled type={type} placeholder={placeholder}/>
            </Item>
        );
    }
}
