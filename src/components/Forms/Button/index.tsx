import React from "react";
import {
  RectButtonProps,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
};

export default Button;
