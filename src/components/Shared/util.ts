export const formatNumber = (num: number) => {
  if (!num) {
    return '';
  }
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
