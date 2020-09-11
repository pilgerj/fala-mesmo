import React, {InputHTMLAttributes, useRef, useState, useEffect, useCallback} from 'react';
import {useField} from '@unform/core';
import {IconBaseProps} from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi'

import {Container, Error} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ( {name, icon: Icon, ...rest} ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const {fieldName, defaultValue, error, registerField} = useField(name);

    useEffect( () => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);

    const handleInputFocous = useCallback( () => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback( () => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);
    
    return (
        <Container
          isFilled={isFilled}
          isFocused={isFocused}
          isErrored={!!error}
        >
            {Icon && <Icon size={20}/>}
            <input 
              onFocus={handleInputFocous}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              ref={inputRef}
              {...rest}
            />

            {error && (
                <Error title={error}>
                    <FiAlertCircle color='#c53030' size={20}/>
                </Error>
                )
            }
        </Container>
    );
};
export default Input;