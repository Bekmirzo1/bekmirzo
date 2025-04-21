import type { PricePercentRange, WorkDataMultiType } from "./types";

export function roundingUpPrice(num: number, percent: number): number {
  // return Math.trunc(((num / 100) * percent) / 5) * 5;
  return Math.floor(((num / 100) * percent) / 5) * 5;
}
export function countTime(num: number, percent: number): number {
  return (num / 100) * percent;
}
//====================================================================================================

export function countPriceMulti(
  workDataMulti: WorkDataMultiType,
  price: number | undefined = undefined,
  startPrice: number | undefined = undefined,
  percent: PricePercentRange | undefined = undefined,
): { price: number; startPrice: number } {
  if (!price) {
    price = workDataMulti.pagePrice;
  }
  if (!startPrice) {
    startPrice = workDataMulti.startPrice;
  }
  if (!percent) {
    percent = workDataMulti.regularPercent;
  }
  return {
    price: roundingUpPrice(price, percent),
    startPrice: roundingUpPrice(startPrice, percent),
  };
}
export function countPriceMultiFinal(
  workDataMulti: WorkDataMultiType,

  price: number | undefined = undefined,
  startPrice: number | undefined = undefined,
  amount: number | undefined = undefined,
  percent: PricePercentRange | undefined = undefined,
): number {
  if (!price) {
    price = workDataMulti.pagePrice;
  }
  if (!startPrice) {
    startPrice = workDataMulti.startPrice;
  }
  if (!amount) {
    amount = workDataMulti.minVal;
  }
  if (percent) {
    const result = countPriceMulti(workDataMulti, price, startPrice, percent);
    return amount * result.price + result.startPrice;
  }
  return amount * price + startPrice;
}
//====================================================================================================

export function amountSkip(currentAmount: number, notCount: number[]): number {
  for (let index = 0; index < notCount.length; index++) {
    const number = notCount[index];
    if (number < currentAmount) {
      currentAmount = currentAmount - (notCount.length - index);
      break;
    }
  }
  return currentAmount;
}
