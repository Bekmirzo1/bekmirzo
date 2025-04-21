<script setup lang="ts">
import { VSlider } from "@/shared/UI/Forms/VSlider/";
import { VInputCount } from "@/shared/UI/Forms/VInputCount";
import { VSelectSmooth } from "@/shared/UI/Forms/VSelect";
import { VCheck } from "@/shared/UI/Forms/VCheckbox";
import {
  workDataLanding,
  workDataMulti,
  usePriceStore,
  workDataStore,
} from "../model";

const priceStore = usePriceStore();

const startSelected = ref(priceStore.selectedType);
function updatedSlider() {
  if (startSelected.value.name !== priceStore.selectedType.name) {
    startSelected.value = priceStore.selectedType;
    if (priceStore.selectedType.name === "land") {
      priceStore.setAmount(workDataLanding.minVal);
    }
    if (priceStore.selectedType.name === "multi") {
      priceStore.setAmount(workDataMulti.minVal);
    }
    if (priceStore.selectedType.name === "store") {
      priceStore.setAmount(workDataStore.minVal);
    }
  }
}
</script>
<template>
  <form action="" class="price-form form">
    <div class="price-form__top">
      <div class="price-form__top-item">
        <h3 class="price-form__title">
          $&#8202;<template v-if="priceStore.selectedType.name == 'land'">
            {{ priceStore.finalPrice }}
          </template>
          <template v-if="priceStore.selectedType.name == 'multi'">
            {{ priceStore.finalPriceMulti }}
          </template>
          <template v-if="priceStore.selectedType.name == 'store'">
            {{ priceStore.finalPriceStore }}
          </template>
          у.е.
        </h3>
        <div class="price-form__top-text"> итоговая стоимость </div>
      </div>
      <div class="price-form__top-item">
        <h3 class="price-form__title">
          <template v-if="priceStore.selectedType.name == 'land'">
            {{ priceStore.finalTime }}-{{ priceStore.finalTime + 1 }}
          </template>
          <template v-if="priceStore.selectedType.name == 'multi'">
            {{ priceStore.finalTimeMulti }}-{{ priceStore.finalTimeMulti + 1 }}
          </template>
          <template v-if="priceStore.selectedType.name == 'store'">
            {{ priceStore.finalTimeStore }}-{{ priceStore.finalTimeStore + 1 }}
          </template>
          дней
        </h3>
        <div class="price-form__top-text"> время на реализацию </div>
      </div>
    </div>
    <div class="form__rows">
      <div class="price-form__warned">
        <span class="price-form__warned-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.75"
              y="0.75"
              width="18.5"
              height="18.5"
              rx="9.25"
              stroke="#202020"
              stroke-opacity="0.56"
              stroke-width="1.5" />
            <path
              d="M8.52803 14C8.37854 14 8.25316 13.9543 8.1519 13.8629C8.05063 13.7715 8 13.6572 8 13.5201C8 13.383 8.05063 13.2688 8.1519 13.1774C8.25316 13.086 8.37854 13.0403 8.52803 13.0403H9.42495V9.89374H8.65099C8.50151 9.89374 8.37613 9.84804 8.27486 9.75664C8.1736 9.66524 8.12297 9.55099 8.12297 9.41388C8.12297 9.27678 8.1736 9.16253 8.27486 9.07112C8.37613 8.97972 8.50151 8.93402 8.65099 8.93402H10.0108C10.1941 8.93402 10.3339 8.99115 10.4304 9.1054C10.5268 9.21508 10.575 9.36361 10.575 9.55099V13.0403H11.472C11.6215 13.0403 11.7468 13.086 11.8481 13.1774C11.9494 13.2688 12 13.383 12 13.5201C12 13.6572 11.9494 13.7715 11.8481 13.8629C11.7468 13.9543 11.6215 14 11.472 14H8.52803ZM9.72875 7.7892C9.46835 7.7892 9.24653 7.70237 9.06329 7.52871C8.88005 7.35504 8.78843 7.14482 8.78843 6.89803C8.78843 6.64667 8.88005 6.43416 9.06329 6.2605C9.24653 6.08683 9.46835 6 9.72875 6C9.99397 6 10.2158 6.08683 10.3942 6.2605C10.5775 6.43416 10.6691 6.64667 10.6691 6.89803C10.6691 7.14482 10.5775 7.35504 10.3942 7.52871C10.2158 7.70237 9.99397 7.7892 9.72875 7.7892Z"
              fill="#202020"
              fill-opacity="0.56" />
          </svg>
        </span>
        <span class="price-form__warned-text">
          Обычно я занят на 5‑7 дней вперёд
        </span>
      </div>
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
