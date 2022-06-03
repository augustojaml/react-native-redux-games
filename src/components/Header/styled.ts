import { theme } from '@global/styles/theme';
import styled from 'styled-components/native';

import { ShoppingBag } from 'phosphor-react-native';

export const Container = styled.View`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${theme.colors.main003};
  padding: 15px 15px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.background};
  font-size: 20px;
`;

export const CartContainer = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const IConShop = styled(ShoppingBag)`
  width: 20px;
  height: 20px;
`;

export const CartIndicatorContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: 5px;
  right: -5px;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${theme.colors.main001};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IndicatorNumber = styled.Text`
  font-family: ${theme.fonts.title};
  font-size: 10px;
  color: ${theme.colors.background};
  top: -1px;
`;
