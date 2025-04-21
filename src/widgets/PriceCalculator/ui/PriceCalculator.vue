<script setup lang="ts">
import { PriceForm, usePriceStore } from "@/feauters/PriceForm";
import {
  priceCalculatorLanding,
  priceCalculatorMulti,
  priceCalculatorStore,
  type PriceCalculatorData,
} from "../model";

const priceDataModel: Ref<PriceCalculatorData> = ref({
  content: priceCalculatorLanding.content,
  contentAnim: priceCalculatorLanding.contentAnim,
  contentPart: priceCalculatorLanding.contentPart,
  price: priceCalculatorLanding.price,
  discount: priceCalculatorLanding.discount,
  animation: priceCalculatorLanding.animation,
  part: priceCalculatorLanding.part,
  animationDiscount: priceCalculatorLanding.animationDiscount,
  partDiscount: priceCalculatorLanding.partDiscount,
});

const priceStore = usePriceStore();

watch(
  () => priceStore.selectedType,
  (newVal) => {
    if (newVal.name === "land") {
      priceDataModel.value.content = priceCalculatorLanding.content;
      priceDataModel.value.contentAnim = priceCalculatorLanding.contentAnim;
      priceDataModel.value.contentPart = priceCalculatorLanding.contentPart;
      priceDataModel.value.price = priceCalculatorLanding.price;
      priceDataModel.value.discount = priceCalculatorLanding.discount;
      priceDataModel.value.animation = priceCalculatorLanding.animation;
      priceDataModel.value.part = priceCalculatorLanding.part;
      priceDataModel.value.animationDiscount =
        priceCalculatorLanding.animationDiscount;
      priceDataModel.value.partDiscount = priceCalculatorLanding.partDiscount;
    } else if (newVal.name === "multi") {
      priceDataModel.value.content = priceCalculatorMulti.content;
      priceDataModel.value.contentAnim = priceCalculatorMulti.contentAnim;
      priceDataModel.value.contentPart = priceCalculatorMulti.contentPart;
      priceDataModel.value.price = priceCalculatorMulti.price;
      priceDataModel.value.discount = priceCalculatorMulti.discount;
      priceDataModel.value.animation = priceCalculatorMulti.animation;
      priceDataModel.value.part = priceCalculatorMulti.part;
      priceDataModel.value.animationDiscount =
        priceCalculatorMulti.animationDiscount;
      priceDataModel.value.partDiscount = priceCalculatorMulti.partDiscount;
    } else if (newVal.name === "store") {
      priceDataModel.value.content = priceCalculatorStore.content;
      priceDataModel.value.contentAnim = priceCalculatorStore.contentAnim;
      priceDataModel.value.contentPart = priceCalculatorStore.contentPart;
      priceDataModel.value.price = priceCalculatorStore.price;
      priceDataModel.value.discount = priceCalculatorStore.discount;
      priceDataModel.value.animation = priceCalculatorStore.animation;
      priceDataModel.value.part = priceCalculatorStore.part;
      priceDataModel.value.animationDiscount =
        priceCalculatorStore.animationDiscount;
      priceDataModel.value.partDiscount = priceCalculatorStore.partDiscount;
    }
  },
);
</script>
<template>
  <div class="price-calculator">
    <h2 class="price-calculator__title"> Калькулятор </h2>
    <PriceForm class="price-calculator__form" />
    <div class="price-calculator__model model-show-price">
      <h4 class="model-show-price__title">Стоимость работ</h4>
      <div class="model-show-price__blocks">
        <!-- model-show-price__block 1 -->
        <div class="model-show-price__block">
          <div class="model-show-price__item">
            <span class="model-show-price__name"
              >{{ priceDataModel.content }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.price }}
            </span>
          </div>
          <div class="model-show-price__item">
            <span class="model-show-price__name">
              {{ priceDataModel.contentAnim }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.animation }}
            </span>
          </div>
          <div class="model-show-price__item">
            <span class="model-show-price__name">
              {{ priceDataModel.contentPart }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.part }}
            </span>
          </div>
        </div>
        <!-- line -->
        <div class="model-show-price__discounts">
          <h4 class="model-show-price__discount-title">
            Постоянным клиентам скидки&nbsp;&nbsp;✨
          </h4>
        </div>
        <!-- model-show-price__block 2 -->
        <div class="model-show-price__block">
          <!-- model-show-price item 1 -->
          <div class="model-show-price__item">
            <span class="model-show-price__name">
              {{ priceDataModel.content }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.discount }}
            </span>
          </div>
          <!-- model-show-price item 2 -->
          <div class="model-show-price__item">
            <span class="model-show-price__name">
              {{ priceDataModel.contentAnim }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.animationDiscount }}
            </span>
          </div>
          <!-- model-show-price item 3 -->
          <div class="model-show-price__item">
            <span class="model-show-price__name">
              {{ priceDataModel.contentPart }}
            </span>
            <span class="model-show-price__price">
              {{ priceDataModel.partDiscount }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style/_index";
</style>
