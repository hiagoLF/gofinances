import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
  type: 'up' | 'down'
}

export const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
  title,
  isActive,
  type,
  ...rest
}) => {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}