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


export const Container = styled.div`
    width: 950px;
    float: left;
    display: flex;
    background-color: white;
    
    align-items: center;
    margin-top: 80px;
    min-width: 700px;

`;

export const UserInfo = styled.div`
    float:left;
    background-color: white;
    display: flex;
    img {
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 100px;
        height: 50px;
        width: 50px;
        border: 2px solid;
        border-radius: 35px;
        background-color: white;
    }

    p {
        margin: 10px;
        float:left;
        background-color: white;        
    }

    div {
        float: left;
        align-items: initial;
        margin-bottom: 5px;
    }
`;

export const LikeInfo = styled.div`   
    
    display: flex;
    position: absolute;
    margin-bottom: 5px;
    margin-top: 150px;
    justify-content: center;
    
    margin-left: 10px;
    width: 170px;

    border: 1px solid;
    
    background-color: #F0FFFF;
    height: 30px;

    button {
        padding: 0;
        background-color: white; 
        border: 0.5 solid; 
        border-radius: 20px;
    } 
    svg {
        margin-top: 5px;
        background-color: white;
        align-items: center;
        width: 25px;
        border-radius: 20px;
          
    }

    p {
        margin-top: 5px;
        font-size: 15px;
        background-color: white;
    }
`;


export const CardInfo = styled.div`
    float: left;
    width: 100%;
    min-width: 350px;
  
    height: 200px;  
    margin: 20px;    
    padding: 20px;
    background-color: white;
    
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
   
    h1 {
        background-color: white; 
        width: 100%;
    }

    p {
        margin-top: 20px;
        width: 100%;
        background-color: white;
    }
`;

export const Infos = styled.div`
    background-color: white;
    
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
    width: 200px;

    title {
        margin-top: 20px;
        width: 100%;
        background-color: white;
    }
`;

export const Categoria = styled.div`
    padding: 10px;
    border-radius: 200px;
    margin-right: 175px;

    float: left;
    
    width: 200px;
    float:left;
    background-color: red;

    display: flex;
    align-items:center;
    justify-content: center;

    p { 
    align-items: center;
    top: 5px;
    background-color:red;
    }

`;

export const Impacto = styled.div`
    display: flex;
    float: left;
    align-items:center;
    justify-content: space-between;
    margin-right: 180px;
    background-color: white;
    
    button {
        padding: 20px;
        width: 60px;
        margin: 5px;
        border-radius:50px;
        border: 0px;

        display: flex;
        float: left;
        align-items: center;
        justify-content: center;
    }
`;