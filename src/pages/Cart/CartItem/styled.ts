import { theme } from '@global/styles/theme';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title};
  margin: 10px 0;
  color: ${theme.colors.main001};
`;

export const ActionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
  width: 40px;
  height: 25px;
  margin: 0 10px;
`;

export const TextQuantity = styled.Text`
  font-family: ${theme.fonts.title};
`;

export const ActionsButton = styled(TouchableOpacity)``;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.title};
  color: ${theme.colors.main003};
`;

export const Value = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title};
`;

export const OutOfStockContainer = styled.View`
  background-color: ${theme.colors.main001};
  height: 20px;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const OutOfStockText = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.background};
`;
