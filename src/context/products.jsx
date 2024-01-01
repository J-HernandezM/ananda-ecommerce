import React from "react";
import { sanitizeApiResponse } from "../shared/sanitizeApiResponse";

export const ProductsContext = React.createContext();

const myHeaders = new Headers();
myHeaders.append("Authorization", process.env.NEXT_PUBLIC_API_KEY);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url = `${process.env.NEXT_PUBLIC_URL_API}/products?populate=*`;

export default async function ProductsProvider({children}){
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    const products = sanitizeApiResponse(data);

    console.log(products);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
