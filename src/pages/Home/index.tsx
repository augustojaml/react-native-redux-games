import { Catalog } from '@components/Catalog';
import { Header } from '@components/Header';
import { Container, Title } from './styled';

export function Home() {
  return (
    <>
      <Header title="MyShop" showBackButton={false} showIconShop={true} />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}
