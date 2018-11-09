export const convertFromCurrency = (gvt, rate) => {
  return parseFloat(gvt) * parseFloat(rate);
};

export const convertToCurrency = (value = 0, rate) => {
  return value / rate;
};

export const calculateValueOfEntryFee = (value = 0, percentage) => {
  return value * percentage / 100;
};
