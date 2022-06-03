import { shadow } from '@components/Catalog/Item';
import { cartsSlice } from '@global/redux/carts/cartsSlice';
import { checkProductStockByIdAndAddToCart } from '@global/redux/carts/cartsThunks';
import { ICartProduct } from '@global/redux/carts/cartsTypes';
import { IStoreDispatch } from '@global/redux/store';
import { MinusCircle, PlusCircle, Trash } from 'phosphor-react-native';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  ActionsButton,
  ActionsContainer,
  Container,
  Image,
  Label,
  TextContainer,
  TextQuantity,
  Title,
  Value,
} from './styled';

interface ICartItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface ICartItemProps {
  cart: {
    product: ICartItem;
    quantity: number;
  };
}

export function CartItem({ cart }: ICartItemProps) {
  const dispatch: IStoreDispatch = useDispatch();

  const handleAddProductQuantityToCard = useCallback(
    (product: ICartProduct) => {
      dispatch(checkProductStockByIdAndAddToCart(product));
    },
    [dispatch]
  );

  const handleRemoveProductQuantityToCard = useCallback(
    (product: ICartProduct) => {
      dispatch(cartsSlice.actions.removeProductQuantityToCart(product));
    },
    [dispatch]
  );

  const handleRemoveProductToCard = useCallback(
    (product: ICartProduct) => {
      dispatch(cartsSlice.actions.removeProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <Container style={shadow}>
        <Image
          source={{
            uri: cart.product.image,
          }}
        />
        <Title>{cart.product.title}</Title>
        <ActionsContainer>
          <ActionsButton onPress={() => handleRemoveProductQuantityToCard(cart.product)}>
            <MinusCircle size={20} />
          </ActionsButton>

          <TextContainer>
            <TextQuantity>{cart.quantity}</TextQuantity>
          </TextContainer>

          <ActionsButton onPress={() => handleAddProductQuantityToCard(cart.product)}>
            <PlusCircle size={20} />
          </ActionsButton>
        </ActionsContainer>

        <Label>Unit price</Label>
        <Value>$ {cart.product.price}</Value>

        <Label>Unit price</Label>
        <Value>$ {cart.quantity * cart.product.price}</Value>

        <ActionsButton
          style={{ marginTop: 16 }}
          onPress={() => handleRemoveProductToCard(cart.product)}
        >
          <Trash size={20} />
        </ActionsButton>
      </Container>
    </>
  );
}
