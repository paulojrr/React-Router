import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Head from './Head';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const Title = styled.h1`
  margin: 0.5rem 0;
`;

const Image = styled.img`
  border-radius: 10px;
`;

const Products = () => {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  if (products === null) return null;
  return (
    <Container className="animaLeft">
      <Head title={'React'} />
      {products.map((prod) => (
        <Link to={`/produto/${prod.id}`} key={prod.id}>
          <Image src={prod.fotos[0].src} alt={prod.fotos[0].titulo} />
          <Title>{prod.nome}</Title>
        </Link>
      ))}
    </Container>
  );
};

export default Products;
