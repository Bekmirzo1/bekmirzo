import { roundingUpPrice } from "./methods";
import type {
  PriceCheckBox,
  PricePercentRange,
  RadioOptionPrice,
  WorkDataMultiType,
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
  animPercent: 140,
  regularPercent: 90,
  animPercentTime: 150,
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

export const workDataMulti: WorkDataMultiType = {
  minVal: 2,
  maxVal: 20,
  startPrice: 200,
  startTime: 6,
  pagePrice: 50,
  pageTime: 1.2,
  animPercentTime: 150,
  animPercent: 135,
  regularPercent: 85,
};
export const workDataStore: WorkDataMultiType = {
  minVal: 2,
  maxVal: 20,
  startPrice: 250,
  startTime: 7,
  pagePrice: 60,
  pageTime: 1.4,
  animPercentTime: 150,
  animPercent: 125,
  regularPercent: 85,
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
