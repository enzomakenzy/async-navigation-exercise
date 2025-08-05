import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView).attrs({
  edges: ["top", "left", "right"]
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[300]};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[400]};
  padding: 15px 20px;
`;

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
  font-size: 20px;
  margin-bottom: 16px;
`;

export const AddTaskButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  padding: 12px;
  border-radius: 6px;
`;

export const TextAddTaskButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
  font-size: 16px;
  text-align: center; 
`;