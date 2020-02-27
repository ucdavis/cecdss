export const formatNumber = (num: number) => {
  if (!num) {
    return '';
  }
  const options = {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  };
  return num.toLocaleString('en', options);
};
