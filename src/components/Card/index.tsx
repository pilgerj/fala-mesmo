import React from 'react';
import Foto from '../../assets/rascunho.png';

import {FiThumbsUp, FiFlag} from 'react-icons/fi';

import {Container, UserInfo, CardInfo, RateInfo, LikeInfo, Impacto} from './styles';
const Card: React.FC = () => {
    return (

        <>
        <Container>
            <UserInfo>
                <img src={Foto}></img>
                <p>Darkina GRAFITADAH</p>

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

            <RateInfo>
                <div>
                    <p>Ameaça</p>

                    <Impacto>

                    </Impacto>
                </div>
            </RateInfo>

        </Container>

        <Container>
            <UserInfo>
                <img src={Foto}></img>
                <p>Leona TRINKADENT</p>

                <LikeInfo>
                <button onClick={ () => console.log('test')}><FiThumbsUp/></button>
                    <p>23 concordancias</p>
                </LikeInfo>
            </UserInfo>

            <CardInfo>
                <h1>Uso de drogas</h1>
                <p>os cria do ap 606 estao fora de controle</p>

                <p>Rua Osmindo Dietrich, Centro - Igrejinha</p>
            </CardInfo>

            <RateInfo>

            </RateInfo>

        </Container>

        </>
    );
}

export default Card;