<script setup lang="ts">
import { VBreadCrumbs } from "@/shared/UI/BreadCrumbs";
</script>
<template>
  <div class="archieve">
    <div class="archieve__body">
      <VTopPage class="archieve__top">
        архив <span class="gray2">/ с чего я начинал путь</span>
        <template #text>
          первичные сайты + экспериментальные
        </template>
      </VTopPage>
      <!-- <VBreadCrumbs class="archieve__breadcrumbs" />
      <div class="archieve__top">
        <h1 class="archieve__title">
          архив <span class="gray2">/ с чего я начинал путь</span>
        </h1>
        <div class="archieve__text"> первичные сайты + экспериментальные </div>
      </div> -->
      <div class="archieve__main">
        <div class="archieve__date">
          <div class="archieve__date-text"> 2020 → н.в. </div>
        </div>
        <div class="archieve__rows">
          <div class="archieve__row">
            <a href="" class="archieve__row-body" target="_blank">
              <div class="archieve__row-left">
                <h3 class="archieve__row-name"> MNTN </h3>
                <div class="archieve__row-type"> Лендинг </div>
              </div>
              <div class="archieve__row-line"></div>
              <div class="archieve__row-right">
                <div class="archieve__row-year"> 2022 </div>
              </div>
            </a>
          </div>
          <div class="archieve__row">
            <a href="" class="archieve__row-body" target="_blank">
              <div class="archieve__row-left">
                <h3 class="archieve__row-name"> Travello </h3>
                <div class="archieve__row-type"> Корпоративный сайт </div>
              </div>
              <div class="archieve__row-line"></div>
              <div class="archieve__row-right">
                <div class="archieve__row-year"> 2022 </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
