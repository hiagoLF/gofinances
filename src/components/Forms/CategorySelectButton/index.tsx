import React from 'react';
import { Container, Category, Icon } from './styles'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

interface CategorySelectButtonProps {
    title: string;
    onPress: () => void
}

export const CategorySelectButton: React.FC<CategorySelectButtonProps> = ({title, onPress}) => {
  return (
    <GestureHandlerRootView>
      <Container onPress={onPress}>
          <Category>{title}</Category>
          <Icon name='chevron-down'/>
      </Container>
    </GestureHandlerRootView>
  )
}
