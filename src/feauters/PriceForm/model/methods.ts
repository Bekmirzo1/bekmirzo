export function roundingUpPrice(num: number, percent: number): number {
  // return Math.trunc(((num / 100) * percent) / 5) * 5;
  return Math.floor(((num / 100) * percent) / 5) * 5;
}
export function countTime(num: number, percent: number): number {
  return (num / 100) * percent;
}