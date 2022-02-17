import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';
import { Control, Controller } from 'react-hook-form'

interface InputFormProps extends TextInputProps {
    control: Control;
    name: string;
    error?: string;
}

const InputForm: React.FC<InputFormProps> = ({
    control,
    name,
    error,
    ...rest
}) => {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
            {error && <Error>{error}</Error>}
        </Container>
    );
}

export default InputForm;