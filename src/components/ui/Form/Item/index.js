import React, {Component} from "react";

import {observer} from "mobx-react";

import {FormContext} from "../../../../contexts/FormContext";

import {ItemStyled} from "../../../../styles/ui/Form/Item";

@observer
class Item extends Component {
  static contextType = FormContext;

  render() {
    const {name, value, children} = this.props;
    const {config} = this.context;

    const {rules, validateStatus, help} = config.get(name);

    return (
      <ItemStyled
        name={name}
        value={value}
        rules={rules}
        validateStatus={validateStatus}
        help={help}
      >
        {children}
      </ItemStyled>
    );
  }
}

export default Item;