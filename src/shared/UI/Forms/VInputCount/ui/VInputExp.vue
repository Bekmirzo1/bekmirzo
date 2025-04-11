<script setup lang="ts">
const props = defineProps({
  attrs: {
    type: Object,
    default: undefined,
  },

  center: Boolean,
  controls: Boolean,
  disabled: Boolean,

  inputtable: {
    type: Boolean,
    default: true,
  },

  inline: Boolean,

  max: {
    type: Number,
    default: Infinity,
  },

  min: {
    type: Number,
    default: -Infinity,
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

  size: {
    type: String,
    default: undefined,
  },

  step: {
    type: Number,
    default: 1,
  },

  modelValue: {
    type: Number,
    default: NaN,
  },
});
function isNaN(value: number | string) {
  return Number.isNaN(value);
}
const inputElem = useTemplateRef("input");
const valuee = ref(NaN);
const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
const normalizeDecimalNumber = (value: number, times = 100000000000) =>
  REGEXP_DECIMALS.test(String(value))
    ? Math.round(value * times) / times
    : value;
const maxNumb: Ref<number> = ref(Infinity);
const minNumb: Ref<number> = ref(-Infinity);
const increasable = computed(() => {
  return isNaN(valuee.value) || valuee.value < maxNumb.value;
});
const decreasable = computed(() => {
  return isNaN(valuee.value) || valuee.value > minNumb.value;
});
function setValue(value: number) {
  const oldValue = valuee.value;
  let newValue = typeof value !== "number" ? parseFloat(value) : value;

  if (!isNaN(newValue)) {
    if (minNumb.value <= maxNumb.value) {
      newValue = Math.min(maxNumb.value, Math.max(minNumb.value, newValue));
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
function change(event: any) {
  setValue(event.target.value);
}
function paste(event: ClipboardEvent) {
  const clipboardData = event.clipboardData || (window as any).clipboardData;

  if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData("text"))) {
    event.preventDefault();
  }
}
/* watch(valuee, (newValue, oldValue) => {
  if (
    // Avoid triggering change event when created
    !(isNaN(newValue) && typeof oldValue === "undefined") &&
    // Avoid infinite loop
    newValue !== this.value
  ) {
    setValue(newValue);
  }
}, { immediate: true }); */
/* watch: {
    modelValue: {
      immediate: true,
      handler(newValue, oldValue) {
        if (
          // Avoid triggering change event when created
          !(isNaN(newValue) && typeof oldValue === 'undefined')

          // Avoid infinite loop
          && newValue !== this.value
        ) {
          this.setValue(newValue);
        }
      },
    },
  }, */

// methods: {

//   /**
//    * Change event handler.
//    * @param {string} value - The new value.
//    */
//   change(event: any) {
//     this.setValue(event.target.value);
//   },

//   /**
//    * Paste event handler.
//    * @param {Event} event - Event object.
//    */
//   paste(event: ClipboardEvent) {
//     const clipboardData = event.clipboardData || (window as any).clipboardData;

//     if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
//       event.preventDefault();
//     }
//   },

//   /**
//    * Decrease the value.
//    */
//   decrease() {
//     if (this.decreasable) {
//       let { value } = this;

//       if (isNaN(value)) {
//         value = 0;
//       }

//       this.setValue(normalizeDecimalNumber(value - this.step));
//     }
//   },

//   /**
//    * Increase the value.
//    */
//   increase() {
//     if (this.increasable) {
//       let { value } = this;

//       if (isNaN(value)) {
//         value = 0;
//       }

//       this.setValue(normalizeDecimalNumber(value + this.step));
//     }
//   },

//   /**
//    * Set new value and dispatch change event.
//    * @param {number} value - The new value to set.
//    */
//   setValue(value: number) {
//     const oldValue = this.value;
//     let newValue = typeof value !== 'number' ? parseFloat(value) : value;

//     if (!isNaN(newValue)) {
//       if (this.min <= this.max) {
//         newValue = Math.min(this.max, Math.max(this.min, newValue));
//       }

//       if (this.rounded) {
//         newValue = Math.round(newValue);
//       }
//     }

//     this.value = newValue;

//     if (newValue === oldValue) {
//       // Force to override the number in the input box (#13).
//       (this.$refs.input as HTMLInputElement).value = String(newValue);
//     }

//     this.$emit('update:modelValue', newValue, oldValue);
//   },
// },
</script>
<template>
  <div>
    <input
      ref="input"
      class="vue-number-input__input"
      v-bind="attrs"
      type="number"
      :name="name"
      :value="isNaN(valuee) ? '' : valuee"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly || !inputtable"
      :disabled="disabled || (!decreasable && !increasable)"
      :placeholder="placeholder"
      autocomplete="off"
      @change="change"
      @paste="paste" />
  </div>
</template>
<style lang="scss" scoped>
input {
  -moz-appearance: textfield;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 100%;
  min-height: 1.5rem;
  min-width: 3rem;
  padding: 0.4375rem 0.875rem;
  transition: border-color 0.15s;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    border-color: #0074d9;
    outline: none;
  }

  &:disabled,
  &[readonly] {
    background-color: #f8f8f8;
  }
}
</style>
