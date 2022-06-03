import { Header } from '@components/Header';
import { ICartState } from '@global/redux/carts/cartsTypes';
import { IStoreReducer } from '@global/redux/store';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { Container, Label, Total, Value } from './styled';

export function Cart() {
  const { items, isLoading } = useSelector<IStoreReducer, ICartState>((state) => state.carts);

  const totals = items.reduce((accumulator, item) => {
    return (accumulator += item.quantity * item.product.price);
  }, 0);

  return (
    <>
      <Header title="Cart" showBackButton={true} showIconShop={false} />
      <Container>
        <FlatList
          data={items}
          keyExtractor={(item) => '_' + item.product.id}
          renderItem={({ item }) => <CartItem cart={item} />}
        />
      </Container>
      <Total>
        <Label>Total to pay</Label>
        <Value>$ {totals.toFixed(2)}</Value>
      </Total>
    </>
  );
}
