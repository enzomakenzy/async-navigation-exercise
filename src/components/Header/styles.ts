import styled, { css } from "styled-components/native";
import { CaretLeftIcon } from "phosphor-react-native";

import theme from "@theme/index";

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY[300]};
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
`;

export const ScreenName = styled.Text`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD };
    color: ${ theme.COLORS.WHITE };
  `} 
  font-size: 24px;
  margin: auto;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})`
  position: absolute;
  margin-left: 20px;
`

export const BackIcon = styled(CaretLeftIcon).attrs({
  size: 30,
  color: theme.COLORS.WHITE
})``;