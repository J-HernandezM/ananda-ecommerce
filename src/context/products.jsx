'use client'

import React from "react";
import { useFetch } from "../shared/useFetch";
import { sanitizeApiResponse } from "../shared/sanitizeApiResponse";

export const ProductsContext = React.createContext();

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 932ae15adebc593dd0243c41f99474e536809316b75d9fa2d38c20790db1d0f0f6c8d005ed923248ee04fa89d476d88208c18706cd6439d83382bc69e209e5f7060bbe16fdd071b9bddedd8eff8e207fba37655a70f95652760b2328e09caf080eb3975f391eaa8a71c1af8d1edf14463d40ecd93c00d48c15572def7b05189c");

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
    } = useFetch('http://146.190.145.102:1337/api/products', requestOptions)

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