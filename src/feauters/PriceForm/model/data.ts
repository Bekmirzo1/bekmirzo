import { roundingUpPrice } from "./methods";
import type {
  PriceCheckBox,
  PricePercentRange,
  RadioOptionPrice,
} from "./types";

export const notCount = [13, 9, 17].toSorted((a, b) => a - b).toReversed();
export const notCountMulti = [4, 7, 10, 13, 17, 20]
  .toSorted((a, b) => a - b)
  .toReversed();
export const workDataLanding = {
  minVal: 8,
  maxVal: 20,
  blockPrice: 35,
  blockTime: 0.7,
  animPercent: 135,
  regularPercent: 90,
  countPrice(
    val: number | undefined = undefined,
    percent: number | undefined = undefined,
  ): number {
    if (!val) {
      val = this.blockPrice;
    }
    if (!percent) {
      percent = this.regularPercent;
    }
    return roundingUpPrice(val, percent);
  },
};

export const workDataMulti = {
  minVal: 2,
  maxVal: 20,
  startPrice: 200,
  startTime: 6,
  pagePrice: 50,
  pageTime: 1,
  animPercent: 135 as PricePercentRange,
  regularPercent: 80 as PricePercentRange,
  countPrice(
    price: number | undefined = undefined,
    startPrice: number | undefined = undefined,
    percent: PricePercentRange | undefined = undefined,
  ): { price: number; startPrice: number } {
    if (!price) {
      price = this.pagePrice;
    }
    if (!startPrice) {
      startPrice = this.startPrice;
    }
    if (!percent) {
      percent = this.regularPercent;
    }
    return {
      price: roundingUpPrice(price, percent),
      startPrice: roundingUpPrice(startPrice, percent),
    };
  },
  countPriceFinal(
    price: number | undefined = undefined,
    startPrice: number | undefined = undefined,
    amount: number | undefined = undefined,
    percent: PricePercentRange | undefined = undefined,
  ): number {
    if (!price) {
      price = this.pagePrice;
    }
    if (!startPrice) {
      startPrice = this.startPrice;
    }
    if (!amount) {
      amount = this.minVal;
    }
    if (percent) {
      const result = this.countPrice(price, startPrice, percent);
      return amount * result.price + result.startPrice;
    }
    return amount * price + startPrice;
  },
};
export const radioItems: RadioOptionPrice[] = [
  {
    name: "calc[option]",
    val: "anim",
    content: "нужен адаптив (планшеты, смартфоны)",
  },
  {
    name: "calc[option]",
    val: "regular",
    content: "и я постоянный заказчик :)",
  },
];

export const checkItemsList: PriceCheckBox[] = [
  {
    name: "calc[adapt]",
    val: "anim",
    checked: false,
    content: "комплексные анимацими ( JS-Анимации, SVG-animation и т.д. )",
  },
  {
    name: "calc[regular]",
    val: "regular",
    checked: false,
    content: "и я постоянный заказчик :)",
  },
];
