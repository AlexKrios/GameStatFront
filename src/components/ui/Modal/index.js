import React, {Component} from "react";

import {Modal as ModalAnt} from "antd";

class Modal extends Component {
  render() {
    const {children, visible, title, footer, ...props} = this.props;

    return (
      <ModalAnt
        visible={visible}
        title={title || null}
        footer={footer || null}
        {...props}
      >
        {children}
      </ModalAnt>
    );
  }
}

export default Modal;