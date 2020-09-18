import React, {InputHTMLAttributes, useRef, useState, useEffect, useCallback} from 'react';
import {useField} from '@unform/core';
import {IconBaseProps} from 'react-icons';
import {FiTag as Icon} from 'react-icons/fi'

import {Container, Error} from './styles';


interface ComboProps extends InputHTMLAttributes<HTMLSelectElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const ComboBox: React.FC<ComboProps> = ({name, ...rest}) => {
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

    const [ categories ] = React.useState([
        { label: "Ameaca", value: "Ameaca" },
        { label: "Aviso", value: "Aviso" },
        { label: "Melhoria", value: "Melhoria" },
    ]);

    return (
        <Container>
            <Icon size={20}/>

            <select onChange={e => setValue(e.currentTarget.value)} {...rest} >
                { categories.map( cat => (
                    <option key={cat.value} value={cat.value} >
                        {cat.label}
                    </option>
                ))}
                
            </select>

        </Container>
    );
};
export default ComboBox;