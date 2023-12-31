'use client';

import { useContext } from 'react';
import { ProductsContext } from '../../../../context/products';
import ReusableCard from '../../../../components/ReusableCard';
import styled from '@emotion/styled';
import categories from '../../../../data/categories';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const mock = [
  { name: 1, popularity: 1, price: 200 },
  { name: 3, popularity: 3, price: 300 },
  { name: 5, popularity: 5, price: 400 },
  { name: 0, popularity: 0, price: 500 },
  { name: 8, popularity: 8, price: 1000 },
  { name: 10, popularity: 10, price: 100 },
];

export default function CategoryPage({ params }) {
  const { data, loading } = useContext(ProductsContext);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortBy = searchParams.get('sortBy');
  const categoryTitle = categories.find(
    (category) => category.slug === params.categoryType,
  ).title;

  const sortedData = sortBy
    ? mock.sort((a, b) => {
        switch (sortBy) {
          case 'popularity':
            return b.popularity - a.popularity;
          case 'price-high':
            return b.price - a.price;
          case 'price-low':
            return a.price - b.price;
        }
      })
    : mock;

  console.log(sortedData);

  const setFilters = (event) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const value = event.target.value;

    if (value === 'default') {
      current.delete('sortBy');
    } else {
      current.set('sortBy', value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  // const filterBy = params.categoryType use this to filter using the route
  return (
    <StoreBox>
      <div className="controls">
        <Title>{categoryTitle}</Title>
        <select
          onChange={setFilters}
          name="sortBy"
          id="sortBy"
          defaultValue={sortBy ? sortBy : 'default'}
        >
          <option value="default">Orden por defecto</option>
          <option value="popularity">Ordenar por popularidad</option>
          <option value="price-low">Ordenar por precio: bajo a alto</option>
          <option value="price-high">Ordenar por precio: alto a bajo</option>
        </select>
      </div>
      {loading && <p>Cargando...</p>}
      {!loading && data && <ProductGrid data={data} />}
    </StoreBox>
  );
}

function ProductGrid({ data }) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <Grid>
      {data.map((product) => (
        <ReusableCard
          key={product.id}
          product={product}
          handleClick={handleClick}
        />
      ))}
    </Grid>
  );
}

const StoreBox = styled.div`
  padding: 0 16px;
  min-width: 400px;

  & .controls {
    display: flex;
    justify-content: space-between;
    /* max-width: 1370px; */
    align-items: center;

    & select {
      height: fit-content;
      width: 170px;

      @media (min-width: 600px) {
        width: 250px;
      }
    }
  }

  @media (min-width: 600px) {
    padding: 0 32px;
  }
`;

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

const Title = styled.h2`
  font-family: var(--font-abnormal-n);
  font-size: var(--xl);
  padding: 4px 0;
  color: var(--secondary);

  @media (min-width: 600px) {
    padding: 8px 0;
  }
`;
