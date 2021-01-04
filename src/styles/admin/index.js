import styled from "styled-components";
import {Button} from "antd";

export const Wrapper = styled.div`    
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center; 
`;

export const FormWrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(0,0,0,0.2);
`;

export const Title = styled.h2`
    margin: 0 auto 25px; 
    text-align: center;
`;

export const Submit = styled(Button)`
    width: 150px;
    margin: 25px auto 0;
    padding: 10px;
    display: block;
`;
