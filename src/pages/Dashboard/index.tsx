import React, {useEffect, useState, FormEvent, ChangeEvent, Fragment, useRef, useCallback} from 'react';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {FiBookmark, FiMapPin, FiTag, FiAlignJustify, FiZap} from 'react-icons/fi';
import {Title, CardContainer} from './styles';

//import {Container, LeafletMapContainer, FormContainer, MarkedPointsContainer, MarkedPoint} from './styles';
//import api from '../../services/api';
//import * as Yup from 'yup';
//import getValidationErrors from '../../utils/getValidationErrors';

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };



    return (
        <>
            <Title>Fala Mesmo !</Title>

            <Form ref={formRef} onSubmit={() => {}}>
                <Input name='title' icon={FiBookmark} placeholder='Título' maxLength={11} />
                <Input name='description' icon={FiAlignJustify} placeholder='Descrição' maxLength={11} />
                <Input name='address' icon={FiMapPin} placeholder='Endereço' maxLength={25}/>
                <Input name='category' icon={FiTag} placeholder='Categoria' maxLength={25}/>
                <Input name='impact' icon={FiZap} placeholder='Impacto' maxLength={25}/>

                <Button type='submit'>Enviar</Button>
            </Form>

            <CardContainer>
                <Card/>
            </CardContainer>
        </>
    )
}

export default Dashboard;