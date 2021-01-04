import styled from "styled-components";
import {Form, Input as InputAnt} from "antd";

export const Input = styled(InputAnt)`
    width: 100%;    
    padding: 10px;    
`;


export const Item = styled(Form.Item)`
    margin: 0 0 10px;
        
    &:last-of-type {
        margin: 0;
    }
    
    /* Error */
    &.ant-form-item-has-error {
        ${Input} {
            border: 1px solid red;
        }
        
        .ant-form-item-explain-error {
                color:red;
        }                     
    }        
`;
