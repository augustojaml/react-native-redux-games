import { checkProductStockByIdAndAddToCart } from '@global/redux/carts/cartsThunks';
import { ICartProduct, ICartState } from '@global/redux/carts/cartsTypes';
import { IStoreDispatch, IStoreReducer } from '@global/redux/store';
import { theme } from '@global/styles/theme';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { Container, ContainerTitle, Image, Price, Title } from './styled';

export const shadow = {
  elevation: 4,
  shadowOffset: { width: 5, height: 5 },
  shadowColor: theme.colors.main001,
  shadowOpacity: 0.5,
  shadowRadius: 10,
};

interface CatalogProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface IItemProps {
  item: CatalogProduct;
}

export function Item({ item }: IItemProps) {
  const dispatch: IStoreDispatch = useDispatch();
  const { items } = useSelector<IStoreReducer, ICartState>((state) => state.carts);

  const quantity = items.find((cart) => cart.product.id === item.id)?.quantity || 0;

  const handleAddProductQuantityToCard = useCallback(
    (product: ICartProduct) => {
      dispatch(checkProductStockByIdAndAddToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <Container style={shadow}>
        <Image
          source={{
            uri: item.image,
          }}
        />
        <ContainerTitle>
          <Title>{item.title}</Title>
        </ContainerTitle>
        <Price>$ {item.price}</Price>
        <Button quantity={quantity} onPress={() => handleAddProductQuantityToCard(item)} />
      </Container>
    </>
  );
}
