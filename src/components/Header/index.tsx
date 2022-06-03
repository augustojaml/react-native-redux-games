import { BackButton } from '@components/BackButton';
import { ICartState } from '@global/redux/carts/cartsTypes';
import { IStoreReducer } from '@global/redux/store';
import { theme } from '@global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  CartContainer,
  CartIndicatorContainer,
  Container,
  IConShop,
  IndicatorNumber,
  Title,
  TitleContainer,
} from './styled';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showIconShop?: boolean;
}

export function Header({
  title = 'Header',
  showBackButton = false,
  showIconShop = false,
}: HeaderProps) {
  const navigation = useNavigation();
  const { items } = useSelector<IStoreReducer, ICartState>((state) => state.carts);

  function navigationToHome() {
    navigation.navigate('Home');
  }

  function navigationToCard() {
    navigation.navigate('Cart');
  }

  return (
    <>
      <Container>
        <TitleContainer>
          {showBackButton && <BackButton onPress={navigationToHome} />}
          <Title>{title}</Title>
        </TitleContainer>

        {showIconShop && (
          <CartContainer onPress={navigationToCard}>
            {items.length > 0 && (
              <CartIndicatorContainer>
                <IndicatorNumber>{items.length}</IndicatorNumber>
              </CartIndicatorContainer>
            )}
            <IConShop color={theme.colors.background} />
          </CartContainer>
        )}
      </Container>
    </>
  );
}
