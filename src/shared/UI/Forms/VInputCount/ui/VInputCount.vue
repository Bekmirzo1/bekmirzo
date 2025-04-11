<script setup lang="ts">
const valuee = defineModel<number>({ default: 0 });
const isFocused = ref(false);
const checkDigit = (event: KeyboardEvent) => {
  if (event.key.length === 1 && isNaN(Number(event.key))) {
    event.preventDefault();
  }
};

const props = defineProps({
  attrs: {
    type: Object,
    default: undefined,
  },

  disabled: Boolean,

  inputtable: {
    type: Boolean,
    default: true,
  },

  maxNumb: {
    type: Number,
    default: 50,
  },

  minNumb: {
    type: Number,
    default: 0,
  },

  name: {
    type: String,
    default: undefined,
  },

  placeholder: {
    type: String,
    default: undefined,
  },

  readonly: Boolean,
  rounded: Boolean,

  step: {
    type: Number,
    default: 1,
  },

  // modelValue: {
  //   type: Number,
  //   default: NaN,
  // },
});
function isNaN(value: number | string) {
  return Number.isNaN(value);
}
const inputElem = useTemplateRef("input");
const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
const normalizeDecimalNumber = (value: number, times = 100000000000) =>
  REGEXP_DECIMALS.test(String(value))
    ? Math.round(value * times) / times
    : value;
const increasable = computed(() => {
  return isNaN(valuee.value) || valuee.value < props.maxNumb;
});
const decreasable = computed(() => {
  return isNaN(valuee.value) || valuee.value > props.minNumb;
});
function setValue(value: number) {
  const oldValue = valuee.value;
  let newValue = typeof value !== "number" ? parseFloat(value) : value;

  if (!isNaN(newValue)) {
    if (props.minNumb <= props.maxNumb) {
      newValue = Math.min(props.maxNumb, Math.max(props.minNumb, newValue));
    }

    if (props.rounded) {
      newValue = Math.round(newValue);
    }
  }

  valuee.value = newValue;

  if (newValue === oldValue) {
    // Force to override the number in the input box (#13).
    (inputElem.value as HTMLInputElement).value = String(newValue);
  }

  // this.$emit('update:modelValue', newValue, oldValue);
}
/* watch(
  () => valuee.value,
  (newVal, oldVal) => {
    if (
      // Avoid triggering change event when created
      !(isNaN(newVal) && typeof oldVal === "undefined") &&
      // Avoid infinite loop
      newVal !== valuee.value
    ) {
      setValue(newVal);
    }
  },
  { immediate: true },
); */
function change(event: any) {
  setValue(event.target.value);
}
function paste(event: ClipboardEvent) {
  const clipboardData = event.clipboardData || (window as any).clipboardData;

  if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData("text"))) {
    event.preventDefault();
  }
}

function decrease() {
  if (decreasable.value) {
    if (isNaN(valuee.value)) {
      valuee.value = 0;
    }
    setValue(normalizeDecimalNumber(valuee.value - props.step));
  }
}
function increase() {
  if (increasable.value) {
    if (isNaN(valuee.value)) {
      valuee.value = 0;
    }
    setValue(normalizeDecimalNumber(valuee.value + props.step));
  }
}
</script>
<template>
  <div class="count-input" :class="{ 'focus': isFocused === true }">
    <v-input
      ref="input"
      v-model.number="valuee"
      type="number"
      :min="minNumb"
      :max="maxNumb"
      :step="step"
      class="count-input__input"
      v-bind="$attrs"
      :name="name"
      :readonly="readonly || !inputtable"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="isNaN(valuee) ? '' : valuee"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @change="change"
      @paste="paste"
      @keydown="checkDigit" />
    <div class="count-input__arrows">
      <button type="button" class="count-input__arrow" @click="decrease">
        <span>
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.25 4.00186C0.25 3.77881 0.337336 3.57311 0.512009 3.38476L3.08668 0.704461C3.15422 0.635068 3.22642 0.583023 3.30328 0.548327C3.38013 0.516109 3.46514 0.5 3.5583 0.5C3.68406 0.5 3.79934 0.532218 3.90415 0.596654C4.01128 0.663569 4.09512 0.751549 4.15568 0.860595C4.21856 0.972119 4.25 1.09356 4.25 1.22491C4.25 1.42813 4.17431 1.60905 4.02293 1.76766L1.72424 4.13197L1.72424 3.87918L4.02293 6.23606C4.17431 6.38971 4.25 6.56815 4.25 6.77138C4.25 6.9052 4.21856 7.02664 4.15568 7.13569C4.09512 7.24721 4.01128 7.33519 3.90415 7.39963C3.79934 7.46654 3.68406 7.5 3.5583 7.5C3.37198 7.5 3.21477 7.43061 3.08668 7.29182L0.512008 4.61524C0.421179 4.51859 0.354803 4.42069 0.312882 4.32156C0.27096 4.22491 0.25 4.11834 0.25 4.00186Z"
              fill="#202020" />
          </svg>
        </span>
      </button>
      <button
        type="button"
        class="count-input__arrow count-input__arrow_2"
        @click="increase">
        <span>
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.25 4.00186C0.25 3.77881 0.337336 3.57311 0.512009 3.38476L3.08668 0.704461C3.15422 0.635068 3.22642 0.583023 3.30328 0.548327C3.38013 0.516109 3.46514 0.5 3.5583 0.5C3.68406 0.5 3.79934 0.532218 3.90415 0.596654C4.01128 0.663569 4.09512 0.751549 4.15568 0.860595C4.21856 0.972119 4.25 1.09356 4.25 1.22491C4.25 1.42813 4.17431 1.60905 4.02293 1.76766L1.72424 4.13197L1.72424 3.87918L4.02293 6.23606C4.17431 6.38971 4.25 6.56815 4.25 6.77138C4.25 6.9052 4.21856 7.02664 4.15568 7.13569C4.09512 7.24721 4.01128 7.33519 3.90415 7.39963C3.79934 7.46654 3.68406 7.5 3.5583 7.5C3.37198 7.5 3.21477 7.43061 3.08668 7.29182L0.512008 4.61524C0.421179 4.51859 0.354803 4.42069 0.312882 4.32156C0.27096 4.22491 0.25 4.11834 0.25 4.00186Z"
              fill="#202020" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.count-input {
  border: toRem(1) solid $dividedColor;
  border-radius: toRem(6);
  min-height: toRem(28);
  width: toRem(72);
  display: flex;
  align-items: center;
  padding: toRem(6);
  // .count-input__input
  &__input {
    -moz-appearance: textfield;
    font-size: toRem(12);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  // .count-input__arrows
  &__arrows {
    display: flex;
    font-size: 0;
    // border-radius: toRem(4);
    // @include overflow-hidden-strict;
  }
  // .count-input__arrow
  &__arrow {
    background-color: $bgTertiaryColor;
    flex: 0 0 toRem(8);
    width: toRem(8);
    height: toRem(16);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: toRem(4) 0 0 toRem(4);
    span {
      display: inline-block;
    }
    svg {
      width: toRem(4);
    }
    @media (any-hover: hover) {
      transition: background-color 0.3s ease 0s;
      &:hover {
        background-color: $divided2Color;
      }
    }
    &_2 {
      border-radius: 0 toRem(4) toRem(4) 0;
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
