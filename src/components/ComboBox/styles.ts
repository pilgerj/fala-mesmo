import styled, {css} from 'styled-components';

import Tooltip from '../Tooltip'

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div`
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


export const Select = styled.select`
border-radius: 10px;
    padding: 16px;
    width: 100%;
    
`;