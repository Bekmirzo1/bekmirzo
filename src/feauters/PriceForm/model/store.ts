import { defineStore } from "pinia";
import type { PriceTypesList, SelectOptionCalc } from "./types";
import {
  checkItemsList,
  workDataLanding,
  workDataMulti,
  notCount,
  notCountMulti,
  workDataStore,
} from "./data";
import {
  amountSkip,
  countPriceMulti,
  countPriceMultiFinal,
  countTime,
  roundingUpPrice,
} from "./methods";

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
    // amountVal = amountSkip(amountVal, notCount);
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
    amountVal = amountSkip(amountVal, notCountMulti);
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      const priceCalled = countPriceMulti(
        workDataMulti,
        val,
        startPrice,
        workDataMulti.regularPercent,
      );
      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      const priceCalled = countPriceMulti(
        workDataMulti,
        val,
        startPrice,
        workDataMulti.animPercent,
      );
      console.log(workDataMulti.animPercent);

      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    return countPriceMultiFinal(workDataMulti, val, startPrice, amountVal);
  });
  const finalPriceStore = computed(() => {
    let val: number = partPrice.value;
    let startPrice = workDataStore.startPrice;
    let amountVal = amount.value;
    amountVal = amountSkip(amountVal, notCountMulti);
    if (checkBoxChecked.value.find((item) => item == "regular")) {
      const priceCalled = countPriceMulti(
        workDataStore,
        val,
        startPrice,
        workDataStore.regularPercent,
      );
      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      const priceCalled = countPriceMulti(
        workDataStore,
        val,
        startPrice,
        workDataStore.animPercent,
      );
      console.log(workDataStore.animPercent);

      val = priceCalled.price;
      startPrice = priceCalled.startPrice;
    }
    return countPriceMultiFinal(workDataStore, val, startPrice, amountVal);
  });

  // Times
  const finalTime = computed(() => {
    let val: number = workDataLanding.blockTime;
    let amountVal = amount.value;
    amountVal = amountSkip(amountVal, notCount);
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, workDataLanding.animPercentTime);
      return Math.ceil(amountVal * val);
    }
    return Math.floor(amountVal * val);
  });

  const finalTimeMulti = computed(() => {
    let val: number = workDataMulti.pageTime;
    let amountVal = amount.value;
    amountVal = amountSkip(amountVal, notCountMulti);
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, workDataMulti.animPercentTime);
      return Math.ceil(amountVal * val) + workDataMulti.startTime;
    }
    return Math.floor(amountVal * val) + workDataMulti.startTime;
  });
  const finalTimeStore = computed(() => {
    let val: number = workDataStore.pageTime;
    let amountVal = amount.value;
    amountVal = amountSkip(amountVal, notCountMulti);
    if (checkBoxChecked.value.find((item) => item == "anim")) {
      val = countTime(val, workDataStore.animPercentTime);
      return Math.ceil(amountVal * val) + workDataStore.startTime;
    }
    return Math.floor(amountVal * val) + workDataStore.startTime;
  });
  
  //====================================================================================================

  // Watchers
  watch(selectedType, (newVal) => {
    if (newVal.name === "land") {
      setMinVal(workDataLanding.minVal);
      setMaxVal(workDataLanding.maxVal);
      setAmount(workDataLanding.minVal);
      setPartPrice(workDataLanding.blockPrice);
    }
    if (newVal.name === "multi") {
      setMinVal(workDataMulti.minVal);
      setMaxVal(workDataMulti.maxVal);
      setAmount(workDataMulti.minVal);
      setPartPrice(workDataMulti.pagePrice);
    }
    if (newVal.name === "store") {
      setMinVal(workDataStore.minVal);
      setMaxVal(workDataStore.maxVal);
      setAmount(workDataStore.minVal);
      setPartPrice(workDataStore.pagePrice);
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
    finalTimeStore,
    finalPriceStore,
    checkBoxItems,
    setMinVal,
    setMaxVal,
    setAmount,
    setPartPrice,
  };
});
