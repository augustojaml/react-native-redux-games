import { theme } from '@global/styles/theme';
import { ShoppingCartSimple } from 'phosphor-react-native';
import { darken } from 'polished';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background-color: ${theme.colors.main001};
  height: 35px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${darken(0.1, theme.colors.main001)};
  position: relative;
`;

export const Icon = styled(ShoppingCartSimple)`
  color: ${theme.colors.background};
`;

export const TitleContainer = styled.View`
  flex: 1;
  height: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Title = styled.Text`
  color: ${theme.colors.background};
  font-size: 12px;
  font-family: ${theme.fonts.text};
`;

export const QuantityContent = styled.View`
  background-color: ${theme.colors.background};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
`;

export const Quantity = styled.Text`
  color: ${theme.colors.main001};
  background-color: transparent;
  font-size: 10px;
  font-family: ${theme.fonts.text};
  top: -2px;
`;
