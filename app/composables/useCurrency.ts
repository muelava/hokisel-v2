export const useFormatters = () => {
  const toRupiah = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)
  }

  const formatRating = (rating: number): string => {
    return rating.toFixed(1);
  };

  return { toRupiah, formatRating}
}