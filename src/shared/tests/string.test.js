import { formatPrice } from '../string';

describe('formatPrice', () => {
  it('Should format price correctly', () => {
    const price = 16000;
    const expected = '$16.000';
    const result = formatPrice(price);

    expect(result).toBe(expected);
  });
});
