import React from 'react';
import Foto from '../../assets/rascunho.png';

import {FiThumbsUp, FiFlag, FiStar} from 'react-icons/fi';

import {Container, UserInfo, CardInfo, Categoria, LikeInfo, Impacto, Infos} from './styles';

interface FormData {
    user: string;
    title: string;
    description: string;
    address: string;
    category: string;
    impact: string,
}

const Card: React.FC<FormData[]> = (data: FormData[]) => {
    //Darkina GRAFITADAH]

    return (

        <>
        <Container>
            <UserInfo>
                <img src={Foto}></img>
                <p>João pilger</p>

                <LikeInfo>
                    <button><FiFlag/></button>
                    <p>50 apoiaram</p>
                </LikeInfo>
            </UserInfo>

            <CardInfo>
                <h1>Lixo na rua</h1>
                <p>muito lixo na calcada atrapalhando o pessoal</p>

                <p>Rua Osmindo Dietrich, Centro - Igrejinha</p>
            </CardInfo>

            <Infos>
                <Categoria>
                    <p>Ameaça</p>
                </Categoria>

                    <title>Impacto</title>
                <Impacto>

                    <button style={{backgroundColor: "green"}} >Baixa</button>
                    <button style={{backgroundColor: "yellow"}} >Media</button>
                    <button style={{backgroundColor: "red"}} >Alta</button>

                </Impacto>
            </Infos>

            
        </Container>

        <Container>
            <UserInfo>
                <img src={Foto}></img>
                <p>Marcela Pilger</p>

                <LikeInfo>
                    <button><FiFlag/></button>
                    <p>20 apoiaram</p>
                </LikeInfo>
            </UserInfo>

            <CardInfo>
                <h1>Poste com luz queimada</h1>
                <p>O poste principal da rua está queimado </p>

                <p>Rua Coronel Fleck, Centro - Igrejinha</p>
            </CardInfo>

            <Infos>
                <Categoria>
                    <p>Aviso</p>
                </Categoria>

                    <title>Impacto</title>
                <Impacto>

                    <button style={{backgroundColor: "green"}} >Baixa</button>
                    <button style={{backgroundColor: "yellow"}} >Media</button>
                    <button style={{backgroundColor: "red"}} >Alta</button>

                </Impacto>
            </Infos>

            
        </Container>

        </>
    );
}

export default Card;