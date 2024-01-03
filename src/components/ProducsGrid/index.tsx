/** @jsxImportSource @emotion/react */
'use client';

// @packages
import styled from '@emotion/styled';

// @scripts
import { Product } from '../../lib/data/products';
import ReusableCard from '../ReusableCard';
import Controls from './Controls';

type ProductGridProps = {
  products: Product[],
  title: string,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 172px);
  gap: 15px;
  margin-top: 8px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 30px;
    margin-top: 15px;
  }
`;

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  const onClickProduct = () => {};

  return (
    <StoreBox>
      <Controls onChange={() => {}} title={title} value="default" />
      <Grid>
        {products.map((product) => (
          <ReusableCard
            key={`product-${product.title}`}
            title={product.title}
            onClick={onClickProduct}
            image={product.featuredImage}
          />
        ))}
      </Grid>
    </StoreBox>
  );
};

const StoreBox = styled.div`
  padding: 0 16px;
  min-width: 400px;
  @media (min-width: 600px) {
    padding: 0 32px;
  }
`;

export default ProductGrid;
