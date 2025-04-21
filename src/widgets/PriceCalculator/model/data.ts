import {
  countPriceMulti,
  countPriceMultiFinal,
  roundingUpPrice,
  workDataLanding,
  workDataMulti,
  workDataStore,
} from "@/feauters/PriceForm";
import type { PriceCalculatorData } from "./types";

//====================================================================================================
// Price Calculator Landing

const priceCalculatorLandStart =
  workDataLanding.blockPrice * workDataLanding.minVal;
const priceCalculatorLandDiscount =
  workDataLanding.countPrice() * workDataLanding.minVal;

export const priceCalculatorLanding: PriceCalculatorData = {
  content: `Лендинг (${workDataLanding.minVal} блоков)`,
  contentAnim: `Добавление анимации`,
  contentPart: `Добавление блока`,
  price: `$${priceCalculatorLandStart}`,
  animation: `$${workDataLanding.countPrice(workDataLanding.blockPrice, workDataLanding.animPercent) * workDataLanding.minVal - priceCalculatorLandStart}`,
  part: `$${workDataLanding.blockPrice}`,
  discount: `$${priceCalculatorLandDiscount}`,
  animationDiscount: `$${workDataLanding.countPrice(workDataLanding.countPrice(), workDataLanding.animPercent) * workDataLanding.minVal - priceCalculatorLandDiscount}`,
  partDiscount: `$${workDataLanding.countPrice()}`,
};
//====================================================================================================
// Price Calculator Multi Page

const priceCalculatorMultiStart = countPriceMultiFinal(workDataMulti);
const priceCalculatorMultiDiscountData = countPriceMulti(
  workDataMulti,
  undefined,
  undefined,
  workDataMulti.regularPercent,
);
const priceCalculatorMultiDiscount = countPriceMultiFinal(
  workDataMulti,
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
  animation: `$${countPriceMultiFinal(workDataMulti, undefined, undefined, undefined, workDataMulti.animPercent) - priceCalculatorMultiStart}`,
  part: `$${workDataMulti.pagePrice}`,
  discount: `$${priceCalculatorMultiDiscount}`,
  animationDiscount: `$${countPriceMultiFinal(workDataMulti, priceCalculatorMultiDiscountData.price, priceCalculatorMultiDiscountData.startPrice, undefined, workDataMulti.animPercent) - priceCalculatorMultiDiscount}`,
  partDiscount: `$${roundingUpPrice(workDataMulti.pagePrice, workDataMulti.regularPercent)}`,
};

//====================================================================================================
// Price Calculator Store

const priceCalculatorStoreStart = countPriceMultiFinal(workDataStore);
const priceCalculatorStoreDiscountData = countPriceMulti(
  workDataStore,
  undefined,
  undefined,
  workDataStore.regularPercent,
);
const priceCalculatorStoreDiscount = countPriceMultiFinal(
  workDataStore,
  undefined,
  undefined,
  undefined,
  workDataStore.regularPercent,
);
export const priceCalculatorStore: PriceCalculatorData = {
  content: `Интернет магазин (${workDataStore.minVal} страницы)`,
  contentAnim: `Добавление анимации`,
  contentPart: `Дополнительная страница`,
  price: `$${priceCalculatorStoreStart}`,
  animation: `$${countPriceMultiFinal(workDataStore, undefined, undefined, undefined, workDataStore.animPercent) - priceCalculatorStoreStart}`,
  part: `$${workDataStore.pagePrice}`,
  discount: `$${priceCalculatorStoreDiscount}`,
  animationDiscount: `$${countPriceMultiFinal(workDataStore, priceCalculatorStoreDiscountData.price, priceCalculatorStoreDiscountData.startPrice, undefined, workDataStore.animPercent) - priceCalculatorStoreDiscount}`,
  partDiscount: `$${roundingUpPrice(workDataStore.pagePrice, workDataStore.regularPercent)}`,
};
