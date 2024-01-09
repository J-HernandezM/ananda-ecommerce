export const formatPrice = (price: number, locale = 'es-CO') => {
  const priceFormatted = new Intl.NumberFormat(locale).format(price);
  return `$${priceFormatted}`;
};
