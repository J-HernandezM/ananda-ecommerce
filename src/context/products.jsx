'use client';

import React from 'react';
import { useFetch } from '../shared/useFetch';

export const ProductsContext = React.createContext();

export default function ProductsProvider({ children }) {
  const { data, loading, error, handleCancelRequest } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  );

  return (
    <ProductsContext.Provider
      value={{
        data,
        loading,
        error,
        handleCancelRequest,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
