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
  disabled?: boolean;
  title?: string;
}

export function Button({
  quantity = 0,
  disabled = false,
  title = 'Button',
  ...rest
}: IButtonProps) {
  return (
    <>
      <Container disabled={disabled} {...rest}>
        <IconContainer>
          {quantity > 0 && (
            <QuantityContent>
              <Quantity>{quantity}</Quantity>
            </QuantityContent>
          )}

          <Icon color={theme.colors.background} size={18} />
        </IconContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Container>
    </>
  );
}
