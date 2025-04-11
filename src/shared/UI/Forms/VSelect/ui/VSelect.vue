<script setup lang="ts">
const open = ref(false);
interface selectObject {
  id?: number;
  inner?: "option" | string;
  selected?: boolean;
}

const props = defineProps({
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
  options: {
    type: Array<selectObject>,
    required: false,
    default: [
      { id: 1, inner: "first", selected: false },
      { id: 2, inner: "second", selected: false },
      { id: 3, inner: "third", selected: false },
    ],
  },
  time: {
    type: Number,
    required: false,
    default: 300,
  },
});
const options = ref(props.options);

const defSelected = options.value.find((item) => item.selected == true)
  ? options.value.filter((item) => item.selected == true)[0]
  : { inner: "" };

const optionSelected = ref<selectObject>(defSelected);
const unSelectedOptions = computed(() => {
  return options.value.filter((item) => item.selected != true);
});
const animating = ref(false);

function сhangeVal(option: selectObject) {
  if (animating.value == false) {
    options.value.filter((item) => {
      if (item.selected) {
        return (item.selected = false);
      }
    });
    option.selected = true;
    optionSelected.value = option;
    selectActtion(false);
  }
}

function selectActtion(val: boolean) {
  if (animating.value == false) {
    open.value = val;
    animating.value = true;
    setTimeout(() => {
      animating.value = false;
    }, props.time);
  }
}
function toggleSelect() {
  selectActtion(!open.value);
}
</script>
<template>
  <div
    class="select"
    :style="{ '--time': time + 'ms' }"
    :class="{ '_hidden': !open, '_show': open, '_anim': animating }">
    <div
      class="select__body"
      :tabindex="tabindex"
      @blur="selectActtion(false)"
      @focus="selectActtion(true)">
      <div class="select__title">
        <div class="select__value">
          <input
            type="text"
            tabindex="-1"
            class="input"
            :value="optionSelected.inner"
            placeholder="Select" />
          <div class="select__value-cover" @click="toggleSelect"></div>
        </div>
        <button type="button" class="select__icon" tabindex="-1">
          <span class="select__icon-body">
            <!-- <img src="@/app/assets/images/icons/down-small.svg" alt="" /> -->
          </span>
        </button>
      </div>
      <!-- <transition name="sel"> -->
      <div class="select__options">
        <div class="select__options-body">
          <ul class="select__options-list">
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
    width: toRem(50);
    height: 100%;
    // background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    // .select__icon-body
    &-body {
      display: flex;
      justify-content: center;
      align-items: center;
      width: toRem(20);
    }
    img {
      transition: transform $dur ease 0s;
      width: 100%;
      transform-origin: center 40%;
      will-change: transform;
    }
  }
  // .select__options
  &__options {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    @include transMultiple($optionsAnim, $dur, ease, 0s);

    // .select__options-body
    &-body {
      border-radius: toRem(10);
      margin: toRem(10) toRem(0) toRem(0) toRem(0);
      background-color: #fff;
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
      overflow: hidden;
      transform: translateZ(0);
    }
    // .select__options-list
    &-list {
    }
  }
  // .select__option
  &__option {
    cursor: pointer;
    padding: toRem(12) toRem(14);
    font-size: toRem(18);
    @media (any-hover: hover) {
      transition: background-color 0.3s ease 0s;
      &:hover {
        background-color: $grayColor;
      }
    }
  }
  &._hidden {
    .select__options {
      opacity: 0;
      visibility: hidden;
      transform: translate(0, 10%);
    }
  }
  &._anim {
    .select__option {
      pointer-events: none;
    }
  }
  &._show {
    .select__icon-body {
      img {
        transform: rotate(-180deg);
      }
    }
  }
}

.sel-enter-active,
.sel-leave-active {
  @include transMultiple($optionsAnim, 300ms, ease, 0s);
}

.sel-enter-from,
.sel-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 10%);
}
</style>
