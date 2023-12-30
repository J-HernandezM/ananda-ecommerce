'use client'

import React from "react";
import { useFetch } from "../shared/useFetch";
import { sanitizeApiResponse } from "../shared/sanitizeApiResponse";

export const ProductsContext = React.createContext();

const myHeaders = new Headers();
myHeaders.append("Authorization", process.env.NEXT_PUBLIC_API_KEY);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export default function ProductsProvider({children}){
    const {
        data, 
        loading, 
        error, 
        handleCancelRequest
    } = useFetch(`${process.env.NEXT_PUBLIC_URL_API}/products?populate=*`, requestOptions)

    const products = sanitizeApiResponse(data)

    return(
        <ProductsContext.Provider
            value={{
                products,
                data,
                loading,
                error,
                handleCancelRequest
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}