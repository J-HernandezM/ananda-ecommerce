// @packages
// import { useSearchParams } from 'next/navigation';

// @scripts
import { NextPage } from 'next';
import { fetchCollectionProducts } from '../../../../lib/data/collections';
import ProductGrid from '../../../../components/ProducsGrid';

type CategoryPageProps = {
  params: {
    categoryType: string,
  },
};

const CategoryPage: NextPage<CategoryPageProps> = async ({ params }) => {
  const { title, products } = await fetchCollectionProducts(
    params.categoryType,
  );
  // const searchParams = useSearchParams();

  // TODO: change data for products at GRID and organize the attributes at ReusableCard

  // const sortBy = searchParams.get('sortBy');

  // const categoryTitle = categories.find(
  //   (category) => category.slug === params.categoryType,
  // ).title;

  // const sortedData = sortBy
  //   ? mock.sort((a, b) => {
  //       switch (sortBy) {
  //         case 'popularity':
  //           return b.popularity - a.popularity;
  //         case 'price-high':
  //           return b.price - a.price;
  //         case 'price-low':
  //           return a.price - b.price;
  //       }
  //     })
  //   : mock;

  // const setFilters = (event) => {
  //   const current = new URLSearchParams(Array.from(searchParams.entries()));
  //   const value = event.target.value;

  //   if (value === 'default') {
  //     current.delete('sortBy');
  //   } else {
  //     current.set('sortBy', value);
  //   }
  // };

  // const filterBy = params.categoryType use this to filter using the route
  return <ProductGrid products={products} title={title} />;
};

export default CategoryPage;
