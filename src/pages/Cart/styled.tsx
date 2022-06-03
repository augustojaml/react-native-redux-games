import { theme } from '@global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 15px 15px 0 15px;
`;

export const Total = styled.View`
  width: 40%;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${theme.colors.main001};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.text};
  font-size: 13px;
`;

export const Value = styled.Text`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.title};
  font-size: 18px;
`;
