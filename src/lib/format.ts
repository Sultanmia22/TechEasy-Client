export const formatCompact = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(amount)
}