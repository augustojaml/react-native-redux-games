import { theme } from '@global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  width: 48%;
  margin-bottom: 10px;
  padding: 4px;
  border-radius: 8px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContainerTitle = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text};
  font-size: 12px;
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.title};
  font-size: 18px;
  margin-bottom: 12px;
`;
