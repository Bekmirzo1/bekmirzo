import type { PriceCheckBox, RadioOptionPrice } from "./types";

export const notCount = [7, 14, 10].toSorted((a, b) => a - b).toReversed();
export const notCountMulti = [4, 7, 10, 13, 17, 20]
  .toSorted((a, b) => a - b)
  .toReversed();
export const landingData = {
  minVal: 6,
  maxVal: 20,
  blockPrice: 35,
  blockTime: 0.7,
};
export const multiPageData = {
  minVal: 2,
  maxVal: 20,
  startPrice: 200,
  startTime: 6,
  pagePrice: 50,
  pageTime: 1,
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
