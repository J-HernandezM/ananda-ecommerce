// @scripts
import { sanitizeApiResponse } from '../../shared/sanitizeApiResponse';

type MenuItems = {
  id: number,
  title: string,
  url: string,
};

const url = `${process.env.NEXT_PUBLIC_URL_API}/menu?populate=*`;

const fetchMenu = async (): Promise<MenuItems[]> => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    const data = await res.json();

    const { items } = sanitizeApiResponse(data);
    return items;
  } catch (error) {
    console.error('[fetchMenu]', error);
  }
};

export default fetchMenu;
