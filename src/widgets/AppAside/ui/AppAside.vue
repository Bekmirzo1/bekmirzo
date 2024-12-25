<script setup lang="ts">
import { PAGE_ROUTES } from "@/shared/config";
import { asideLinks, asideMainRoutes, asideRoutesMore } from "../model";
</script>
<template>
  <div class="aside">
    <div class="aside__body">
      <div class="aside__top">
        <div class="aside__logo">
          <div class="aside__logo-image">
            <img src="@/shared/assets/images/avatar.jpg" alt="Аватар">
          </div>
        </div>
        <div class="aside__name"></div>
        <div class="aside__activity"></div>
        <div class="aside__text"></div>
      </div>
      <div class="aside__links links-aside">
        <div class="links-aside__blocks">
          <!-- links-aside__block 1 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideRoute, index) in asideMainRoutes"
                :key="index"
                class="links-aside__item">
                <nuxt-link :to="asideRoute.route" class="links-aside__link">
                  {{ asideRoute.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <!-- links-aside__block 2 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideLink, index) in asideLinks"
                :key="index"
                class="links-aside__item">
                <a
                  :href="asideLink.link"
                  class="links-aside__link"
                  target="_blank">
                  {{ asideLink.name }}
                  <span class="links-aside__link-icon"> ↗️ </span>
                </a>
              </li>
            </ul>
          </div>
          <!-- links-aside__block 3 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideRoute2, index) in asideRoutesMore"
                :key="index"
                class="links-aside__item">
                <nuxt-link :to="asideRoute2.route" class="links-aside__link">
                  {{ asideRoute2.name }}
                  <span class="links-aside__link-icon">
                    <template v-if="asideRoute2.route === PAGE_ROUTES.about">
                      📋
                    </template>
                    <template v-if="asideRoute2.route === PAGE_ROUTES.calculator">
                      🧮
                    </template>
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
