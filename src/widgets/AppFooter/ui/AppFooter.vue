<script setup lang="ts">

import { SOCIAL_LINKS } from '@/shared/config';

</script>
<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="footer__left">
        <div class="footer__time">
          06:06:54 PM
        </div>
        <div class="footer__date">
          12 февраля, 2025
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__author">
          <a :href="SOCIAL_LINKS.designer" class="footer__author-link" target="_blank">
            <span class="footer__author-text">
              👨‍🎨 design by Ivan Taskayev
            </span>
            <i class="footer__author-icon">
              <img
                src="@/shared/assets/images/icons/link_external.png"
                alt="" />
            </i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@use './style.scss';
</style>
