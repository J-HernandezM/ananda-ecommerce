// @scripts
import { sanitizeApiResponse } from '../../shared/sanitizeApiResponse';

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_KEY,
  },
};

let url = `${process.env.NEXT_PUBLIC_URL_API}/products?populate=*`;

type ProductImage = {
  alternativeText: string,
  name: string,
  url: string,
};

type PriceDetail = {
  quantity: number,
  value: number,
};

export type Product = {
  id: string,
  title: string,
  description: string,
  images: ProductImage[],
  featuredImage: ProductImage,
  priceDetails: PriceDetail[],
};

const fetchProducts = async (id?: number): Promise<Product[]> => {
  if (id) {
    url = `${process.env.NEXT_PUBLIC_URL_API}/products/${id}?populate=*`;
  }
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  return sanitizeApiResponse(data);
};

export default fetchProducts;
