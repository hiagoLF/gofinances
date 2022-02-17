import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
    title: string
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}

export default Button;