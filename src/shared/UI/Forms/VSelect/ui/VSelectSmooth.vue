<script setup lang="ts">
import gsap from "gsap";
import { animate } from "@/shared/libs/animate/";
import type { SelectItem } from "../model/";
const open = ref(false);
// export interface SelectItem {
//   id: number
//   inner: "option" | string
//   selected: boolean
// }
const selectElem: Ref<Element> = ref(null);
const selectOptionsBody: Ref<Element> = ref(null);

const props = defineProps({
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
  options: {
    type: Array<SelectItem>,
    required: false,
    default: [
      { id: 1, inner: "first", selected: true },
      { id: 2, inner: "second", selected: false },
      { id: 3, inner: "third", selected: false },
    ],
  },
  time: {
    type: Number,
    required: false,
    default: 200,
  },
});
//====================================================================================================
// Props options
const options = ref(props.options);
const chooseFirst = () => {
  options.value[0].selected = true;
  return options.value[0];
};
const defSelected = options.value.find((item) => item.selected == true)
  ? options.value.filter((item) => item.selected == true)[0]
  : chooseFirst();

const optionSelected = defineModel<SelectItem>();
const unSelectedOptions = computed(() => {
  return options.value.filter((item) => item.selected != true);
});
const animating = ref(false);

const optionsDuration = props.time / 1000;
const selectOptionsElemHeight = ref({ height: 0 });
const optionsHeight = ref(0);
const optionsOpen = ref(true);
const optionsFromTop = ref(false);

onMounted(() => {
  optionsHeight.value = selectOptionsBody.value.scrollHeight;
  optionsOpen.value = false;
});
function selectAction(toOpen: boolean) {
  if (animating.value == false && optionsOpen.value !== toOpen) {
    open.value = toOpen;
    animating.value = true;
    const showOptions = toOpen == true ? optionsHeight.value : 0;
    const hideOptions = toOpen == false ? optionsHeight.value : 0;

    if (toOpen == true) {
      optionsOpen.value = true;
      if (
        document.documentElement.clientHeight -
          selectElem.value.getBoundingClientRect().bottom <
        80
      ) {
        optionsFromTop.value = true;
      } else if (optionsFromTop.value == true) {
        optionsFromTop.value = false;
      }
    }

    animate({
      duration: props.time,
      timing: function (timeFraction: number) {
        return timeFraction;
      },
      draw: function (progress: number) {
        selectOptionsElemHeight.value.height =
          hideOptions - (hideOptions - showOptions) * progress;
      },
      callback() {
        optionsHeight.value = selectOptionsBody.value.scrollHeight;
        if (toOpen == false) {
          optionsOpen.value = toOpen;
        }
        animating.value = false;
      },
    });
    /* gsap.to(selectOptionsElemHeight.value, {
      height: showOptions,
      duration: optionsDuration,
      onComplete() {
        animating.value = false
        optionsHeight.value = selectOptionsBody.value.scrollHeight
        if (toOpen == false) {
          optionsOpen.value = toOpen
        }
      },
    }) */
  }
}
function сhangeVal(option: SelectItem) {
  if (animating.value == false) {
    options.value.filter((item) => {
      if (item.selected) return (item.selected = false);
    });
    option.selected = true;
    optionSelected.value = option;
    selectAction(false);
  }
}

function toggleSelect() {
  selectAction(!open.value);
}
</script>
<template>
  <div
    ref="selectElem"
    class="select"
    :style="{ '--time': time + 'ms' }"
    :class="{
      '_hidden': !open,
      '_show': open,
      '_anim': animating,
      '_top': optionsFromTop,
    }">
    <div
      class="select__body"
      :tabindex="tabindex"
      @blur="selectAction(false)"
      @focus="selectAction(true)">
      <!-- Select title -->
      <div class="select__title" @click="toggleSelect">
        <div class="select__value">
          <!-- <v-input v-model="optionSelected.inner" type="text" /> -->
          <input
            v-model="optionSelected.inner"
            type="text"
            tabindex="-1"
            class="select__input"
            disabled />
          <div class="select__value-cover"></div>
        </div>
        <button type="button" class="select__icon" tabindex="-1">
          <span class="select__icon-body">
            <span class="select__icon-arrows">
              <i class="select__icon-arrow">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.00186 4.75C3.77881 4.75 3.57311 4.66266 3.38476 4.48799L0.704461 1.91332C0.635068 1.84578 0.583024 1.77358 0.548327 1.69672C0.516109 1.61987 0.5 1.53486 0.5 1.4417C0.5 1.31594 0.532218 1.20066 0.596654 1.09585C0.663569 0.988719 0.751549 0.904876 0.860595 0.844323C0.972119 0.781441 1.09356 0.75 1.22491 0.75C1.42813 0.75 1.60905 0.825691 1.76766 0.977074L4.13197 3.27576H3.87918L6.23606 0.977074C6.38971 0.825691 6.56815 0.75 6.77138 0.75C6.9052 0.75 7.02664 0.781441 7.13569 0.844323C7.24721 0.904876 7.33519 0.988719 7.39963 1.09585C7.46654 1.20066 7.5 1.31594 7.5 1.4417C7.5 1.62802 7.43061 1.78523 7.29182 1.91332L4.61524 4.48799C4.51859 4.57882 4.42069 4.6452 4.32156 4.68712C4.22491 4.72904 4.11834 4.75 4.00186 4.75Z"
                    fill="#202020" />
                </svg>
              </i>
              <i class="select__icon-arrow">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.00186 4.75C3.77881 4.75 3.57311 4.66266 3.38476 4.48799L0.704461 1.91332C0.635068 1.84578 0.583024 1.77358 0.548327 1.69672C0.516109 1.61987 0.5 1.53486 0.5 1.4417C0.5 1.31594 0.532218 1.20066 0.596654 1.09585C0.663569 0.988719 0.751549 0.904876 0.860595 0.844323C0.972119 0.781441 1.09356 0.75 1.22491 0.75C1.42813 0.75 1.60905 0.825691 1.76766 0.977074L4.13197 3.27576H3.87918L6.23606 0.977074C6.38971 0.825691 6.56815 0.75 6.77138 0.75C6.9052 0.75 7.02664 0.781441 7.13569 0.844323C7.24721 0.904876 7.33519 0.988719 7.39963 1.09585C7.46654 1.20066 7.5 1.31594 7.5 1.4417C7.5 1.62802 7.43061 1.78523 7.29182 1.91332L4.61524 4.48799C4.51859 4.57882 4.42069 4.6452 4.32156 4.68712C4.22491 4.72904 4.11834 4.75 4.00186 4.75Z"
                    fill="#202020" />
                </svg>
              </i>
            </span>
          </span>
        </button>
      </div>
      <!-- Select options -->
      <div v-show="optionsOpen" class="select__options">
        <div
          class="select__options-body"
          :style="{ height: selectOptionsElemHeight.height + 'px' }">
          <ul ref="selectOptionsBody" class="select__options-list">
            <li
              v-for="(option, index) in unSelectedOptions"
              :key="index"
              class="select__option"
              @click="сhangeVal(option)">
              {{ option.inner }}
            </li>
          </ul>
        </div>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
$dur: var(--time);
.select {
  // .select__body
  &__body {
    position: relative;
    z-index: 2;
    &:focus {
      outline: none;
    }
  }
  // .select__title
  &__title {
    position: relative;
    z-index: 1;
  }
  // .select__value
  &__value {
    position: relative;
    z-index: 1;
    input::placeholder {
      color: $mainColor;
      opacity: 1;
    }
  }
  // .select__input
  &__input {
    min-height: toRem(36);
    font-size: toRem(14);
    background-color: transparent;
    display: block;
    width: 100%;
    height: 100%;
    display: block;
    padding: toRem(4) toRem(50) toRem(4) toRem(10);
    border: toRem(1) solid $dividedColor;
    border-radius: toRem(8);
    background-color: $bgColor;
    text-transform: capitalize;
  }
  // .select__value-cover
  &__value-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  // .select__icon
  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: toRem(16 + 20);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // .select__icon-body
    &-body {
      display: flex;
      justify-content: center;
      align-items: center;
      width: toRem(16);
      font-size: 0;
      line-height: 0;
    }
    // .select__icon-arrows
    &-arrows {
    }
    // .select__icon-arrow
    &-arrow {
      display: block;
      &:first-child {
        transform: rotate(180deg);
      }
      img,
      svg {
        // transition: transform $dur ease 0s;
        // width: 100%;
        // transform-origin: center 40%;
        // will-change: transform;
        width: toRem(7);
      }
    }
  }
  // .select__options
  &__options {
    position: absolute;
    width: 100%;
    // bottom: 100%;
    top: 100%;
    left: 0;

    // @include transMultiple($optionsAnim, $dur, ease, 0s);
    // .select__options-body
    &-body {
      border: toRem(1) solid $dividedColor;
      border-radius: toRem(8);
      // margin: toRem(0) toRem(0) toRem(10) toRem(0);
      background-color: $bgColor;
      // padding-bottom: toRem(50);
      @include overflow-hidden-strict;
    }
    // .select__options-list
    &-list {
      padding: toRem(0) toRem(0) toRem(1) toRem(0);
    }
  }
  // .select__option
  &__option {
    cursor: pointer;
    padding: toRem(8) toRem(10);
    font-size: toRem(14);
    user-select: none;
    display: block;
    text-transform: capitalize;
    @media (any-hover: hover) {
      transition: background-color 0.3s ease 0s;
      &:hover {
        background-color: $grayColor;
        color: $whiteColor;
      }
    }
  }
  &._top {
    .select__options {
      top: auto;
      bottom: 100%;
    }
    // .select__options-body {
    //   margin: toRem(0) toRem(0) toRem(10) toRem(0);
    // }
  }

  // &._show {
  //   .select__icon-body {
  //     img,
  //     svg {
  //       transform: rotate(-180deg);
  //     }
  //   }
  // }
}
</style>
