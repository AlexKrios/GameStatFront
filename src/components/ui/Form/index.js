import React from "react";

import {Form as AntForm} from "antd";

import {FormContext} from "../../../contexts/FormContext";

const initialValues = config => {
  const initialValuesObj = {};

  config.forEach(key => {
    if (key.initialValue) {
      initialValuesObj[key.name] = key.initialValue;
    }
  })

  return initialValuesObj;
}

export const Form = ({config, onFinish, children}) => {
  return (
    <FormContext.Provider value={{config}}>
      <AntForm onFinish={onFinish} initialValues={initialValues(config)}>
        {children}
      </AntForm>
    </FormContext.Provider>
  );
};