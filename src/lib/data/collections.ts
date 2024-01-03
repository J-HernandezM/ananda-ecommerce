import { sanitizeApiResponse } from '../../shared/sanitizeApiResponse';
import { Product } from './products';

const createUrl = (slug: string) =>
  `${process.env.NEXT_PUBLIC_URL_API}/collections?filters[slug][$eq]=${slug}&populate[products][populate]=*`;

type Collection = {
  title: string,
  description: string,
  slug: string,
  products: Product[],
};

type FetchCollectionProductsResponse = {
  title: Collection['title'],
  products: Product[],
};

export const fetchCollectionProducts = async (
  collectionSlug: string,
): Promise<FetchCollectionProductsResponse> => {
  try {
    const url = createUrl(collectionSlug);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    const data = await res.json();
    const cleanCollectionData: Collection[] = sanitizeApiResponse(data);

    const [collection] = cleanCollectionData;
    const { products } = collection;

    return {
      title: collection.title,
      products: sanitizeApiResponse(products),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
