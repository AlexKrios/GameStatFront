import React from "react";

import {Form as AntForm} from "antd";

import {FormContext} from "../../../contexts/FormContext";

export const Form = ({config, onFinish, children}) => (
  <FormContext.Provider value={{config}}>
    <AntForm onFinish={onFinish}>
      {children}
    </AntForm>
  </FormContext.Provider>
);
