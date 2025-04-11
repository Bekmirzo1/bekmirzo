<script setup lang="ts">
import { SOCIAL_LINKS } from "@/shared/config";
import { PriceCalculator } from "@/widgets/PriceCalculator";
useHead({
  title: "Стоимость",
});

const currencyLink = 'https://www.google.com/search?q=%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80+%D1%80%D1%83%D0%B1%D0%BB%D1%8C&oq=%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80+%D1%80%D1%83%D0%B1%D0%BB%D1%8C&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINjUwMGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8';
</script>
<template>
  <div class="price">
    <VTopPage class="price__top">
      стоимость <span class="gray2">/ расчёт</span>
      <template #text>цены на frontend-разработку</template>
    </VTopPage>
    <div class="price__body">
      <PriceCalculator class="price__calculator" />
      <section class="price__bonuses bonus-price">
        <div class="bonus-price__top">
          <h2 class="bonus-price__title"> Скидки и бонусы!&nbsp&nbsp🎉</h2>
        </div>
        <div class="bonus-price__rows">
          <!-- bonus-price__row 1 -->
          <div class="bonus-price__row">
            <div class="bonus-price__item">
              <div class="bonus-price__left">
                <h3 class="bonus-price__row-title"> Всплывающие окна </h3>
                <div class="bonus-price__text"> Обратный звонок и др. </div>
              </div>
              <div class="bonus-price__right">
                <div class="bonus-price__free"> Бесплатно </div>
              </div>
            </div>
          </div>
          <!-- bonus-price__row 2 -->
          <div class="bonus-price__row">
            <div class="bonus-price__item">
              <div class="bonus-price__left">
                <h3 class="bonus-price__row-title"> 4-ая, 7-ая, 10-ая </h3>
                <div class="bonus-price__text">
                  И далее каждая третья внутренняя страница сайта
                </div>
              </div>
              <div class="bonus-price__right">
                <div class="bonus-price__free"> Бесплатно </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="price__prepayment prepayment-price">
        <h2 class="prepayment-price__title"> Предоплата&nbsp&nbsp💸 </h2>
        <div class="prepayment-price__text">
          Я работаю по предоплате в 150 у.е. Можно оплатить в рублях на любой из
          моих <br />
          кошельков. <span class="nowrap">Из-за копеек</span> не ругаюсь и курс
          обычно смотрю просто в гугле:
        </div>
        <div class="prepayment-price__image">
          <a :href="currencyLink" class="prepayment-price__image-wrapper" target="_blank">
            <div class="prepayment-price__image-body">
              <img src="@/shared/assets/images/price/currency.jpg" alt="" />
            </div>
            <div class="prepayment-price__button">
              <button type="button" class="prepayment-price__button-body">
                Конвертер валют Google
              </button>
            </div>
          </a>
        </div>
      </section>
      <section class="price__bills bills-price">
        <h2 class="bills-price__title"> Мой расчетный счет: </h2>
        <ul class="bills-price__list">
          <li class="bills-price__list-item">
            <span class="bills-price__list-body">
              <strong>УНП:</strong>
              <span>192232501</span>
            </span>
          </li>
          <li class="bills-price__list-item">
            <span class="bills-price__list-body">
              <strong>Код банка:</strong>
              <span>BLBBBY2X</span>
            </span>
          </li>
          <li class="bills-price__list-item">
            <span class="bills-price__list-body">
              <strong>Р/с:</strong>
              <span>BY33BLBB30130192232501001001</span>
            </span>
          </li>
        </ul>
      </section>
      <section class="price__ready ready-price">
        <h2 class="ready-price__title">
          готов обсудить ваш проект, а вы?&nbsp&nbsp✍️
        </h2>
        <div class="ready-price__columns">
          <div class="ready-price__column">
            <a :href="SOCIAL_LINKS.telegram" class="ready-price__item">
              <div class="ready-price__text">
                🖼️ присылайте макеты на оценку → вопросов будет немного :)
              </div>
            </a>
          </div>
          <div class="ready-price__column">
            <a
              :href="SOCIAL_LINKS.telegram"
              class="ready-price__item"
              target="_blank">
              <div class="ready-price__text">
                💌 напишите письмо в telegram → обычно я отвечаю сразу, если
                не сплю
              </div>
            </a>
          </div>
          <div class="ready-price__column">
            <a
              :href="SOCIAL_LINKS.telegram"
              class="ready-price__item"
              target="_blank">
              <div class="ready-price__text">
                ️️❤️ работаю через фриланс биржи → можем обменяться отзывами
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
