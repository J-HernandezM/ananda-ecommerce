import { render } from '@testing-library/react';
import HomeCard from '.';

const mockProps = {
  category: {
    title: 'Mock Category Title',
  },
  drag: false,
  distance: 0,
  type: 'Categorias',
  setAutoSlide: Function.prototype,
};

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('<HomeCard />', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<HomeCard {...mockProps} />);

    const categoryTitle = getByTestId('category-title');
    const expectedTitle = mockProps.category.title;

    expect(categoryTitle.textContent).toBe(expectedTitle);
  });
});
