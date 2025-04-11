import { defineStore } from "pinia";
import type { PriceTypesList, SelectOptionCalc } from "./types";
import { checkItemsList, landingData, multiPageData, notCount, notCountMulti } from "./data";
import { countTime, roundingUpPrice } from "./methods";

export const usePriceStore = defineStore("price-store", () => {
  const workTypes = ref([
    { id: 1, inner: "Лендинг", selected: false, name: "land" },
    { id: 2, inner: "Многостраничный сайт", selected: false, name: "multi" },
    { id: 3, inner: "Интернет магазин", selected: false, name: "store" },
  ] as SelectOptionCalc[]);
  const selectedType = ref(workTypes.value[0]);

  const minVal = ref(landingData.minVal);
  const maxVal = ref(landingData.maxVal);
  const amount = ref(minVal.value);
  const partPrice = ref(landingData.blockPrice);

  function setMinVal(val: number) {
    minVal.value = val;
  }
  function setMaxVal(val: number) {
    maxVal.value = val;
  }
  function setAmount(val: number) {
    amount.value = val;
  }
  function setPartPrice(val: number) {
    partPrice.value = val;
  }
  const checkBoxItems = ref([...checkItemsList]);
  const checkBoxChecked = computed((): PriceTypesList[] => {
    return checkBoxItems.value
      .filter((item) => item.checked)
      .map((item) => item.val);
  });

  // Getters
  const finalPrice = computed(() => {
    let val: number = partPrice.value;
    let amountVal = amount.value;
    for (let index = 0; index < notCount.length; index++) {
      const number = notCount[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCount.length - index);
        break;
      }
    }
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      val = roundingUpPrice(val, 80);
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = roundingUpPrice(val, 130);
    }
    // if (selectedType.value.name === "multi") {
    //   return amount.value * val + multiPageData.startPrice;
    // }
    return amountVal * val;
  });

  const finalPriceMulti = computed(() => {
    let val: number = partPrice.value;
    let startPrice = multiPageData.startPrice;
    let amountVal = amount.value;
    for (let index = 0; index < notCountMulti.length; index++) {
      const number = notCountMulti[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCountMulti.length - index);
        break;
      }
    }
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      val = roundingUpPrice(val, 80);
      startPrice = roundingUpPrice(startPrice, 80);
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = roundingUpPrice(val, 120);
      startPrice = roundingUpPrice(startPrice, 120);
    }
    return amountVal * val + startPrice;
  });
  const finalTime = computed(() => {
    let val: number = landingData.blockTime;
    const animPercent: number = amount.value < 10 ? 150 : 130;

    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, animPercent);
      return Math.ceil(amount.value * val);
    }
    return Math.floor(amount.value * val);
  });
  const finalTimeMulti = computed(() => {
    let val: number = multiPageData.pageTime;
    const timePercent: number = amount.value < 7 ? 120 : 100;
    val = countTime(val, timePercent);
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, timePercent * 1.5);
      return Math.ceil(amount.value * val) + multiPageData.startTime;
    }
    return Math.floor(amount.value * val) + multiPageData.startTime;
  });
  // Getters

  watch(selectedType, (newVal) => {
    if (newVal.name === "multi") {
      setMinVal(multiPageData.minVal);
      setMaxVal(multiPageData.maxVal);
      setAmount(multiPageData.minVal);
      setPartPrice(multiPageData.pagePrice);
    }
    if (newVal.name === "land") {
      setMinVal(landingData.minVal);
      setMaxVal(landingData.maxVal);
      setAmount(landingData.minVal);
      setPartPrice(landingData.blockPrice);
    }
  });
  return {
    workTypes,
    selectedType,
    minVal,
    maxVal,
    amount,
    partPrice,
    finalPrice,
    finalPriceMulti,
    finalTime,
    finalTimeMulti,
    checkBoxItems,
    setMinVal,
    setMaxVal,
    setAmount,
    setPartPrice,
  };
});
