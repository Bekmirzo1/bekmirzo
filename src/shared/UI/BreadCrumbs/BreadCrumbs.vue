<script setup lang="ts">
import { PageRoutesWithParents, type PageRoute } from "@/shared/config";
const route = useRoute();
const routeWithParents = PageRoutesWithParents.find(
  (item) => item.link == route.path,
);
const listOfElems: PageRoute[] = [
  ...routeWithParents.parents.toReversed(),
  { link: routeWithParents.link, name: routeWithParents.name },
];
</script>
<template>
  <div class="breadcrmbs">
    <ul class="breadcrmbs__list">
      <li
        v-for="(ParentRoute, index) in listOfElems"
        :key="index"
        class="breadcrmbs__item">
        
        <nuxt-link v-if="index !== listOfElems.length - 1" :to="ParentRoute.link" class="breadcrmbs__link">
          {{ ParentRoute.name }}
        </nuxt-link>
        <span v-else >
          {{ ParentRoute.name }}
        </span>
        <span class="breadcrmbs__icon">
          <svg
            v-if="index !== listOfElems.length - 1"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0.992499C0 1.1185 0.0466666 1.22817 0.14 1.3215L3.416 4.5625L3.423 5.028L3.43 5.4935L0.245 8.6785C0.151667 8.77183 0.105 8.87917 0.105 9.0005C0.105 9.1265 0.151667 9.23617 0.245 9.3295C0.338333 9.41817 0.448 9.4625 0.574 9.4625C0.695333 9.4625 0.802667 9.41583 0.896 9.3225L4.851 5.3605C4.94433 5.26717 4.991 5.1575 4.991 5.0315C4.991 4.90083 4.94667 4.79117 4.858 4.7025L4.809 4.6675L0.791 0.677498C0.697667 0.584165 0.590333 0.537498 0.469 0.537498C0.343 0.537498 0.233333 0.584165 0.14 0.677498C0.0466666 0.766165 0 0.871165 0 0.992499Z"
              fill="#6B7280" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.breadcrmbs {
  // .breadcrmbs__list
  &__list {
    display: flex;
    gap: toRem(8);
  }
  // .breadcrmbs__item
  &__item {
    color: $gray2Color;
    @extend .text3;
    &:not(:last-child) {
      display: inline-flex;
      align-items: center;
    }
    // &:last-child{
    //   pointer-events: none;
    // }
  }
  // .breadcrmbs__link
  &__link {
    @media (any-hover: hover) {
      transition: opacity 0.3s ease 0s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  // .breadcrmbs__icon
  &__icon {
    width: toRem(5);
    line-height: 0px;
    display: inline-block;
    padding: toRem(2) toRem(0) toRem(0) toRem(0);
    margin: toRem(0) toRem(0) toRem(0) toRem(8);
    // line-height: 0;
    // height: toRem(9);
    svg {
      max-width: 100%;
      path {
        fill: $gray2Color;
      }
    }
  }
}
</style>
