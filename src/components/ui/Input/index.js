import React, {Component} from "react";

import {observer} from "mobx-react";

import {FormContext} from "../../../contexts/FormContext";

import Item from "../Form/Item";

import {Input as InputStyled} from "../../../styles/ui/Input";

@observer
class Input extends Component {
  static contextType = FormContext;

  render() {
    const {name} = this.props;
    const {config} = this.context;

    const {value, type, placeholder} = config.get(name);

    return (
      <Item name={name}>
        <InputStyled
          type={type}
          placeholder={placeholder}
        />
      </Item>
    );
  }
}

export default Input;