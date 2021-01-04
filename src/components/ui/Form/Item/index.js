import React, {Component} from "react";

import {observer} from "mobx-react";

import {FormContext} from "../../../../contexts/FormContext";

import {ItemStyled} from "./style";

@observer
class Item extends Component {
  static contextType = FormContext;

  render() {
    const {name, children} = this.props;
    const {config} = this.context;

    const {rules, validateStatus, help} = config.get(name);

    return (
      <ItemStyled name={name} rules={rules} validateStatus={validateStatus} help={help}>
        {children}
      </ItemStyled>
    );
  }
}

export default Item;