import { theme } from '@global/styles/theme';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styled';

interface BackButtonProps extends TouchableOpacityProps {}

export function BackButton({ ...rest }: BackButtonProps) {
  return (
    <>
      <Container {...rest}>
        <Icon color={theme.colors.background} />
      </Container>
    </>
  );
}
