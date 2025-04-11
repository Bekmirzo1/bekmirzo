<script setup lang="ts">
import { VSlider } from "@/shared/UI/Forms/VSlider/";
import { VInputCount } from "@/shared/UI/Forms/VInputCount";
import { VSelectSmooth } from "@/shared/UI/Forms/VSelect";
import { VCheck } from "@/shared/UI/Forms/VCheckbox";
import { landingData, multiPageData, usePriceStore } from "../model";

const priceStore = usePriceStore();

const startSelected = ref(priceStore.selectedType);
function updatedSlider() {
  if (startSelected.value.name !== priceStore.selectedType.name) {
    startSelected.value = priceStore.selectedType;
    if (priceStore.selectedType.name === "land") {
      priceStore.setAmount(landingData.minVal);
    }
    if (priceStore.selectedType.name === "multi") {
      priceStore.setAmount(multiPageData.minVal);
    }
  }
}
</script>
<template>
  <form action="" class="price-form form">
    <div class="price-form__top">
      <h2 class="price-form__title">
        <template v-if="priceStore.selectedType.name == 'land'">
          {{ priceStore.finalPrice }}
        </template>
        <template v-if="priceStore.selectedType.name == 'multi'">
          {{ priceStore.finalPriceMulti }}
        </template>
      </h2>
      <div class="price-form__title">
        <template v-if="priceStore.selectedType.name == 'land'">
          {{ priceStore.finalTime }} -
          {{ priceStore.finalTime + 1 }}
        </template>
        <template v-if="priceStore.selectedType.name == 'multi'">
          {{ priceStore.finalTimeMulti }}
          - {{ priceStore.finalTimeMulti + 1 }}
        </template>
      </div>
    </div>
    <div class="form__rows">
      <VSelectSmooth
        v-model="priceStore.selectedType"
        :options="priceStore.workTypes" />
      <div class="price-form__row price-form__amount">
        <div class="price-form__amount-result">
          <span class="price-form__amount-result-text">На</span>
          <VInputCount
            v-model.number="priceStore.amount"
            :min-numb="priceStore.minVal"
            :max-numb="priceStore.maxVal"
            class="price-form__amount-result-input" />
          <span class="price-form__amount-result-text">
            <template v-if="priceStore.selectedType.name === 'land'">
              блоков
            </template>
            <template v-else>
              <template v-if="priceStore.amount > 1 && priceStore.amount < 5">
                страницы
              </template>
              <template v-else> страниц </template>
            </template>
          </span>
        </div>
        <VSlider
          v-model="priceStore.amount"
          :tooltips="false"
          :min="priceStore.minVal"
          :max="priceStore.maxVal"
          :lazy="false"
          @update="updatedSlider" />
      </div>
      <div class="price-form__row">
        <div class="price-form__options">
          <VCheck
            v-for="(checkItem, index) in priceStore.checkBoxItems"
            :key="index"
            v-model="checkItem.checked"
            class="price-form__option"
            :check-box="checkItem" />
          <!-- <VRadio
              v-for="(radioItem, index) in radioItems"
              :key="index"
              v-model="choosed"
              class="price-form__option"
              :option="radioItem" /> -->
        </div>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
