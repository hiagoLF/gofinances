import React from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Button, ImageContainer, Text } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

const SignInSocialButton: React.FC<Props> = ({ title, svg: Svg, ...rest }) => {
  return (
    <Button>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
};

export default SignInSocialButton;
