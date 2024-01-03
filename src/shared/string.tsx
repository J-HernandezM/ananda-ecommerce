export const formatPrice = (price: Number) => {
  const priceString = price.toString();
  return priceString.slice(0, -3) + '.' + priceString.slice(-3);
};
