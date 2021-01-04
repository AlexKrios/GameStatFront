import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    margin-bottom: 25px;
    box-shadow: 0 0 25px rgba(0,0,0,0.2);
    position: relative;
    z-index: 10;
`;

export const Container = styled.div`    
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    padding: 20px 0;
`;


export const Navigation = styled.div`
    display: flex;
    font-family: "OpenSans";    
    
    a {
        color: black;        
        font-size: 18px;
        text-decoration: none;
        margin: 0 0 0 15px;
        padding: 10px;
        
        &:hover {
            color: grey;
        }
    }
`;

