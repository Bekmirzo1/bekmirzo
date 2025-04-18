import { defineStore } from "pinia";
import type { PriceTypesList, SelectOptionCalc } from "./types";
import {
  checkItemsList,
  workDataLanding,
  workDataMulti,
  notCount,
  notCountMulti,
} from "./data";
import { countTime, roundingUpPrice } from "./methods";

export const usePriceStore = defineStore("price-store", () => {
  const workTypes = ref([
    { id: 1, inner: "Лендинг", selected: false, name: "land" },
    { id: 2, inner: "Многостраничный сайт", selected: false, name: "multi" },
    { id: 3, inner: "Интернет магазин", selected: false, name: "store" },
  ] as SelectOptionCalc[]);
  const selectedType = ref(workTypes.value[0]);

  const minVal = ref(workDataLanding.minVal);
  const maxVal = ref(workDataLanding.maxVal);
  const amount = ref(minVal.value);
  const partPrice = ref(workDataLanding.blockPrice);

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
  // Getters ====================================================================================================

  // Prices
  const finalPrice = computed(() => {
    let val: number = partPrice.value;
    // let result: number = val;
    let amountVal = amount.value;
    for (let index = 0; index < notCount.length; index++) {
      const number = notCount[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCount.length - index);
        break;
      }
    }
    // result = amountVal * val;
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      val = workDataLanding.countPrice(val, workDataLanding.regularPercent);
      // result = amountVal * val;
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = workDataLanding.countPrice(val, workDataLanding.animPercent);
      // result = amountVal * val;
    }
    // return result;
    return amountVal * val;
  });

  const finalPriceMulti = computed(() => {
    let val: number = partPrice.value;
    let startPrice = workDataMulti.startPrice;
    let amountVal = amount.value;
    for (let index = 0; index < notCountMulti.length; index++) {
      const number = notCountMulti[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCountMulti.length - index);
        break;
      }
    }
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      const priceCalled = workDataMulti.countPrice(
        val,
        startPrice,
        workDataMulti.regularPercent,
      );
      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      const priceCalled = workDataMulti.countPrice(
        val,
        startPrice,
        workDataMulti.animPercent,
      );
      console.log(workDataMulti.animPercent);

      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    // return amountVal * val + startPrice;
    return workDataMulti.countPriceFinal(val, startPrice, amountVal);
  });

  // Times
  const finalTime = computed(() => {
    let val: number = workDataLanding.blockTime;
    let amountVal = amount.value;

    for (let index = 0; index < notCount.length; index++) {
      const number = notCount[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCount.length - index);
        break;
      }
    }
    const timeAnim: number = 150;

    // const timeAnim: number = amount.value < 10 ? 150 : 130;
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, timeAnim);
      return Math.ceil(amountVal * val);
    }
    return Math.floor(amountVal * val);
  });

  const finalTimeMulti = computed(() => {
    let val: number = workDataMulti.pageTime;
    let amountVal = amount.value;
    for (let index = 0; index < notCountMulti.length; index++) {
      const number = notCountMulti[index];
      if (number < amount.value) {
        amountVal = amount.value - (notCountMulti.length - index);
        break;
      }
    }
    const timePercent = 120;
    // const timePercent: number = amountVal < 7 ? 120 : 90;
    val = countTime(val, timePercent);
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, timePercent * 1.5);
      return Math.ceil(amountVal * val) + workDataMulti.startTime;
    }
    return Math.floor(amountVal * val) + workDataMulti.startTime;
  });
  //====================================================================================================

  // Watchers
  watch(selectedType, (newVal) => {
    if (newVal.name === "multi") {
      setMinVal(workDataMulti.minVal);
      setMaxVal(workDataMulti.maxVal);
      setAmount(workDataMulti.minVal);
      setPartPrice(workDataMulti.pagePrice);
    }
    if (newVal.name === "land") {
      setMinVal(workDataLanding.minVal);
      setMaxVal(workDataLanding.maxVal);
      setAmount(workDataLanding.minVal);
      setPartPrice(workDataLanding.blockPrice);
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
