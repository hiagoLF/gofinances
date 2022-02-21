import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, Icon, Title, Button } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface TransactionTypeButtonProps extends RectButtonProps {
  title: string;
  isActive: boolean;
  type: "up" | "down";
}

export const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
  title,
  isActive,
  type,
  ...rest
}) => {
  return (
    <GestureHandlerRootView style={{width: '49%'}}>
      <Button {...rest}>
        <Container isActive={isActive} type={type}>
          <Icon name={icons[type]} type={type} />
          <Title>{title}</Title>
        </Container>
      </Button>
    </GestureHandlerRootView>
  );
};
