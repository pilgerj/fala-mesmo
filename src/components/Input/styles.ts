import styled, {css} from 'styled-components';

import Tooltip from '../Tooltip'
interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    
    border: 2px solid black;
    color: black;
    display: flex;
    align-items: center;
    
    & + div {
        margin-top: 10px;
    }
    ${(props) => props.isErrored && 
        css`
            border-color: #c53030;
        `
    }
    ${(props) => props.isFocused && 
        css`
            color: coral;
            border-color: coral;
        `
    }
    ${(props) => props.isFilled && 
        css`
            color: coral;
        `
    }  
   
   input {  
       flex: 1;
       background: transparent;
       border: 0;
       text-decoration: none;
       color: black;
       cursor: pointer;
       ::-webkit-input-placeholder {
         color: black;
        }

    }
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px; 
    margin-left: 16px;
    
    svg {
        margin: 0;
    }
    span{
        background: #c53030;
        color: #fff;
        &::before{
            border-color: #c53030 transparent;
        }
    }
`;
