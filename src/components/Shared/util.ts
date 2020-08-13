export const formatNumber = (num: number) => {
  if (!num) {
    return '0';
  }
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  return num.toLocaleString('en', options);
};

export const formatCurrency = (num: number) => {
  return `\$${formatNumber(num)}`;

  // if (!num) {
  //   return '';
  // }
  // const options = {
  //   style: 'currency',
  //   currency: 'USD'
  // };
  // return num.toLocaleString('en', options);
};
