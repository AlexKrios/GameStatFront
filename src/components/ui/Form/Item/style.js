import styled from "styled-components";
import {Form} from "antd";
import {Input} from "../../Input/style";

export const ItemStyled = styled(Form.Item)`
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
