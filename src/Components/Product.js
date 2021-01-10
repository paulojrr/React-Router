import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Head from './Head';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Image = styled.img`
  margin-bottom: 2rem;
`;

const Price = styled.span`
  padding: 0.5rem;
  background: #91fb5d;
  color: #017e01;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
`;

const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;
`;

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        setError('An error happened');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <Content className="animeLeft">
      <Head title={`React | ${product.nome}`} />

      <div>
        {product.fotos.map((pic) => (
          <Image key={pic.src} src={pic.src} alt={pic.titulo} />
        ))}
      </div>

      <div>
        <h1>{product.nome}</h1>
        <Price>R$ {product.preco}</Price>
        <Description>{product.descricao}</Description>
      </div>
    </Content>
  );
};

export default Product;
