import React from 'react';

import Card from '../../components/Card';

import {Title, CardContainer} from './styles';

const Dashboard: React.FC = () => {

    return (
        <>
            <Title>Fala Mesmo !</Title>

            <CardContainer>
                <Card/>
            </CardContainer>
        </>
    )
}

export default Dashboard;