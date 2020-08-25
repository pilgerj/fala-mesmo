import styled from 'styled-components';
//import {shade} from 'polished'
// Template Literals >> ``

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
    margin-bottom: 80px;    
`;

export const CardContainer = styled.div`
    margin-top: 80px;
    max-width: 700px;
    border: 1;
    
    border-color: black;

    div {
        float: left;
    }
`; 