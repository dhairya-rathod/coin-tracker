/**
 * It takes a currency code and a number and returns a formatted currency string.
 * @param {string} currency - The currency code to use.
 * @param {number} value - number - The value to be formatted.
 * @returns A function that takes two arguments, currency and value.
 */
export const getFormattedCurrency = (currency: string, value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  });

  return formatter.format(value);
};

/**
 * If the currency is inr, return an empty string, otherwise return a dollar sign.
 * @param {string} currency - string - The currency code
 * @returns A function that takes a string and returns a string.
 */
export const getCUrrencySign = (currency: string): string => {
  return currency === 'inr' ? '₹' : '$';
};
