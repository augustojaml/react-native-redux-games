import { Container } from './styled';
import { ActivityIndicator, FlatList } from 'react-native';
import { Item } from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreDispatch, IStoreReducer } from '@global/redux/store';
import { IProductsState } from '@global/redux/products/productsTypes';
import { useEffect } from 'react';
import { loadingProducts } from '@global/redux/products/productsThunks';
import { theme } from '@global/styles/theme';

export function Catalog() {
  const dispatch: IStoreDispatch = useDispatch();

  const { products, isLoading } = useSelector<IStoreReducer, IProductsState>(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(loadingProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {isLoading ? (
          <ActivityIndicator size="large" color={theme.colors.main002} />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => '_' + item.id}
            renderItem={({ item }) => <Item item={item} />}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        )}
      </Container>
    </>
  );
}
