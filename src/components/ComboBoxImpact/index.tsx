import React, {SelectHTMLAttributes, useRef, useState, useEffect } from 'react';
import {useField} from '@unform/core';
import {IconBaseProps} from 'react-icons';
import {FiZap as Icon} from 'react-icons/fi'

import {Container, Error} from './styles';


interface ComboProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const ComboBoxImpact: React.FC<ComboProps> = ({name, ...rest}) => {
    const inputRef = useRef<HTMLSelectElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [value, setValue] = useState("");
    
    const {fieldName, defaultValue, error, registerField} = useField(name);

    useEffect( () => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    });

    const [ impacts ] = React.useState([
        { label: "Impacto", value: "Impacto" },
        { label: "Baixo", value: "Baixo" },
        { label: "Médio", value: "Médio" },
        { label: "Alto", value: "Alto" },
    ]);

    return (
        <Container>
            <Icon size={20}/>

            <select 
            //onChange={e => setValue(e.currentTarget.value)} 
            ref={inputRef}
            {...rest} 
            >
                { impacts.map( imp => (
                    <option key={imp.value} value={imp.value} >
                        {imp.label}
                    </option>
                ))}
                
            </select>

        </Container>
    );
};
export default ComboBoxImpact;