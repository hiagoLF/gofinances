import React from 'react';
import { Container, Category, Icon } from './styles';

interface CategorySelectButtonProps {
    title: string;
    onPress: () => void
}

export const CategorySelectButton: React.FC<CategorySelectButtonProps> = ({title, onPress}) => {
  return (
      <Container onPress={onPress}>
          <Category>{title}</Category>
          <Icon name='chevron-down'/>
      </Container>
  )
}
