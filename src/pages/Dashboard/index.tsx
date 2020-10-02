import React, {useEffect, useState, useCallback, ChangeEvent, Fragment, useRef } from 'react';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';

import Foto from '../../assets/rascunho.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ComboBox from '../../components/ComboBox';
import ComboBoxImpact from '../../components/ComboBoxImpact';

import {FiBookmark, FiMapPin, FiFlag, FiUser, FiAlignJustify, FiZap} from 'react-icons/fi';
import {Title, CardContainer, Container, UserInfo, CardInfo, Categoria, LikeInfo, Impacto, Infos} from './styles';

//import {Container, LeafletMapContainer, FormContainer, MarkedPointsContainer, MarkedPoint} from './styles';
//import api from '../../services/api';
//import * as Yup from 'yup';
//import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
    user: string;
    title: string;
    description: string;
    address: string;
    category: string;
    impact: string,
}

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const [formData, setFormData] = useState<FormData[]>([]);

    const handleSubmit = useCallback(async (data: FormData) => {
        try {
            formRef.current?.setErrors({});
            setFormData([...formData, data]);
        } catch (error) {
            
        }
    }, [formData])

    return (
        <>
            <Title>Fala Mesmo !</Title>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name='user' icon={FiUser} placeholder='Nome completo' maxLength={11} />
                <Input name='title' icon={FiBookmark} placeholder='Título' maxLength={11} />
                <Input name='description' icon={FiAlignJustify} placeholder='Descrição' maxLength={11} />
                <Input name='address' icon={FiMapPin} placeholder='Endereço' maxLength={25}/>
                
                <ComboBox name='category' />
                <ComboBoxImpact name='impact' />

                <Button type='submit'>Enviar</Button>
            </Form>

            <CardContainer>
                { formData.map( data => (
                    <Container>  
                        <UserInfo>
                            <img src={Foto}></img>
                            <p>{data.user}</p>

                            <LikeInfo>
                                <button onClick={() => {}}><FiFlag/></button>
                                <p>50 apoiaram</p>
                            </LikeInfo>
                        </UserInfo>
                    </Container>
                    )
                )}
            </CardContainer>
        </>
    )
}

export default Dashboard;