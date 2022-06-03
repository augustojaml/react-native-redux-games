import { theme } from '@global/styles/theme';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Icon,
  IconContainer,
  Quantity,
  QuantityContent,
  Title,
  TitleContainer,
} from './styled';

interface IButtonProps extends TouchableOpacityProps {
  quantity?: number;
}

export function Button({ quantity = 0, ...rest }: IButtonProps) {
  return (
    <>
      <Container {...rest}>
        <IconContainer>
          {quantity > 0 && (
            <QuantityContent>
              <Quantity>{quantity}</Quantity>
            </QuantityContent>
          )}

          <Icon color={theme.colors.background} size={18} />
        </IconContainer>
        <TitleContainer>
          <Title>Add To Cart</Title>
        </TitleContainer>
      </Container>
    </>
  );
}
