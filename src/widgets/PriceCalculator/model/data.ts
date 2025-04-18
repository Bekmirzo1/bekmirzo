import {
  roundingUpPrice,
  workDataLanding,
  workDataMulti,
} from "@/feauters/PriceForm";
import type { PriceCalculatorData } from "./types";

const priceCalculatorLandStart =
  workDataLanding.blockPrice * workDataLanding.minVal;
const priceCalculatorLandDiscount =
  workDataLanding.countPrice() * workDataLanding.minVal;

export const priceCalculatorLanding: PriceCalculatorData = {
  content: `Лендинг (${workDataLanding.minVal} блоков)`,
  contentAnim: `Добавление анимации`,
  contentPart: `Добавление блока`,
  price: `$${priceCalculatorLandStart}`,
  animation: `$${workDataLanding.countPrice(priceCalculatorLandStart, workDataLanding.animPercent) - priceCalculatorLandStart}`,
  part: `$${workDataLanding.blockPrice}`,
  discount: `$${priceCalculatorLandDiscount}`,
  animationDiscount: `$${workDataLanding.countPrice(priceCalculatorLandDiscount, workDataLanding.animPercent) - priceCalculatorLandDiscount}`,
  partDiscount: `$${workDataLanding.countPrice()}`,
};
const priceCalculatorMultiStart = workDataMulti.countPriceFinal();
const priceCalculatorMultiDiscountData = workDataMulti.countPrice(
  undefined,
  undefined,
  workDataMulti.regularPercent,
);
const priceCalculatorMultiDiscount = workDataMulti.countPriceFinal(
  undefined,
  undefined,
  undefined,
  workDataMulti.regularPercent,
);
export const priceCalculatorMulti: PriceCalculatorData = {
  content: `Многостраничный сайт (${workDataMulti.minVal} страницы)`,
  contentAnim: `Добавление анимации`,
  contentPart: `Дополнительная страница`,
  price: `$${priceCalculatorMultiStart}`,
  animation: `$${workDataMulti.countPriceFinal(undefined, undefined, undefined, workDataMulti.animPercent) - priceCalculatorMultiStart}`,
  part: `$${workDataMulti.pagePrice}`,
  discount: `$${priceCalculatorMultiDiscount}`,
  animationDiscount: `$${workDataMulti.countPriceFinal(priceCalculatorMultiDiscountData.price, priceCalculatorMultiDiscountData.startPrice, undefined, workDataMulti.animPercent) - priceCalculatorMultiDiscount}`,
  partDiscount: `$${roundingUpPrice(workDataMulti.pagePrice, workDataMulti.regularPercent)}`,
};
