<script setup lang="ts">
interface Work {
  name: string;
  date: string;
  image?: string;
}

const projectsList: Work[] = [
  {
    name: "Africa Brut",
    date: "Май 2024",
  },
  {
    name: "Best Kids Club",
    date: "Октябрь 2024",
  },
] as const;
</script>
<template>
  <div class="works-main">
    <div class="works-main__top">
      <h2 class="works-main__top-title">
        опыт, который я использую в разработке
      </h2>
      <div class="works-main__top-columns">
        <div class="works-main__top-column">
          <h3 class="works-main__top-column-title"> технологии 📝 </h3>
          <div class="works-main__top-column-text">
            то, что я умею, практикую, люблю.
          </div>
        </div>
        <div class="works-main__top-column">
          <h3 class="works-main__top-column-title"> [все]Работы 💻 </h3>
          <div class="works-main__top-column-text">
            мои креативные веб[сайты].
          </div>
        </div>
      </div>
    </div>
    <div class="works-main__projects projects-works-main">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="projects-works-main__block">
        <div class="projects-works-main__header">
          <div class="projects-works-main__left">
            <h3 class="projects-works-main__name">
              {{ project.name }}
            </h3>
            <div class="projects-works-main__date">
              {{ project.date }}
            </div>
          </div>
          <div class="projects-works-main__links">
            <v-hint
              text="Подробнее о проекте"
              href="https://t.me/bek_azim"
              class="projects-works-main__link"
              target="_blank">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99998 0.599976C7.4418 0.599976 7.79998 0.958148 7.79998 1.39998V6.19998H12.6C13.0418 6.19998 13.4 6.55815 13.4 6.99998C13.4 7.4418 13.0418 7.79998 12.6 7.79998H7.79998V12.6C7.79998 13.0418 7.4418 13.4 6.99998 13.4C6.55815 13.4 6.19998 13.0418 6.19998 12.6V7.79998H1.39998C0.958148 7.79998 0.599976 7.4418 0.599976 6.99998C0.599976 6.55815 0.958148 6.19998 1.39998 6.19998H6.19998V1.39998C6.19998 0.958148 6.55815 0.599976 6.99998 0.599976Z"
                  fill="#6B7280" />
              </svg>
            </v-hint>
            <v-hint
              href="https://t.me/bek_azim"
              class="projects-works-main__link"
              target="_blank">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.77747 6.53706L2.45164 5.86289C2.76563 5.54889 3.27472 5.54889 3.58872 5.86289C3.88029 6.15446 3.90112 6.61425 3.6512 6.92985L3.58872 6.99998L2.91455 7.67415C1.97256 8.61614 1.97256 10.1434 2.91455 11.0854C3.8229 11.9938 5.27547 12.0262 6.22269 11.1827L6.32581 11.0854L6.99998 10.4112C7.31397 10.0972 7.82306 10.0972 8.13706 10.4112C8.42863 10.7028 8.44946 11.1626 8.19954 11.4782L8.13706 11.5483L7.46289 12.2225C5.8929 13.7925 3.34745 13.7925 1.77747 12.2225C0.248794 10.6938 0.208566 8.24034 1.65678 6.663L1.77747 6.53706ZM6.53706 1.77747C8.10705 0.207479 10.6525 0.207479 12.2225 1.77747C13.7925 3.34745 13.7925 5.8929 12.2225 7.46289L11.5483 8.13706C11.2343 8.45106 10.7252 8.45106 10.4112 8.13706C10.0972 7.82306 10.0972 7.31397 10.4112 6.99998L11.0854 6.32581C12.0274 5.38381 12.0274 3.85654 11.0854 2.91455C10.1434 1.97256 8.61614 1.97256 7.67415 2.91455L6.99998 3.58872C6.68598 3.90272 6.17689 3.90272 5.86289 3.58872C5.54889 3.27472 5.54889 2.76563 5.86289 2.45164L6.53706 1.77747ZM7.33706 5.52581C7.65106 5.21181 8.16015 5.21181 8.47415 5.52581C8.78814 5.8398 8.78814 6.34889 8.47415 6.66289L6.66289 8.47415C6.34889 8.78814 5.8398 8.78814 5.52581 8.47415C5.21181 8.16015 5.21181 7.65106 5.52581 7.33706L7.33706 5.52581Z"
                  fill="#6B7280" />
              </svg>
            </v-hint>
            <!-- <a href="" class="projects-works-main__link show-elem">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99998 0.599976C7.4418 0.599976 7.79998 0.958148 7.79998 1.39998V6.19998H12.6C13.0418 6.19998 13.4 6.55815 13.4 6.99998C13.4 7.4418 13.0418 7.79998 12.6 7.79998H7.79998V12.6C7.79998 13.0418 7.4418 13.4 6.99998 13.4C6.55815 13.4 6.19998 13.0418 6.19998 12.6V7.79998H1.39998C0.958148 7.79998 0.599976 7.4418 0.599976 6.99998C0.599976 6.55815 0.958148 6.19998 1.39998 6.19998H6.19998V1.39998C6.19998 0.958148 6.55815 0.599976 6.99998 0.599976Z"
                  fill="#6B7280" />
              </svg>
              <span class="show-elem__text">
                <span class="show-elem__text-inner"> Перейти по ссылке </span>
              </span>
            </a> -->
            <!-- <a href="" class="projects-works-main__link" target="_blank">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.77747 6.53706L2.45164 5.86289C2.76563 5.54889 3.27472 5.54889 3.58872 5.86289C3.88029 6.15446 3.90112 6.61425 3.6512 6.92985L3.58872 6.99998L2.91455 7.67415C1.97256 8.61614 1.97256 10.1434 2.91455 11.0854C3.8229 11.9938 5.27547 12.0262 6.22269 11.1827L6.32581 11.0854L6.99998 10.4112C7.31397 10.0972 7.82306 10.0972 8.13706 10.4112C8.42863 10.7028 8.44946 11.1626 8.19954 11.4782L8.13706 11.5483L7.46289 12.2225C5.8929 13.7925 3.34745 13.7925 1.77747 12.2225C0.248794 10.6938 0.208566 8.24034 1.65678 6.663L1.77747 6.53706ZM6.53706 1.77747C8.10705 0.207479 10.6525 0.207479 12.2225 1.77747C13.7925 3.34745 13.7925 5.8929 12.2225 7.46289L11.5483 8.13706C11.2343 8.45106 10.7252 8.45106 10.4112 8.13706C10.0972 7.82306 10.0972 7.31397 10.4112 6.99998L11.0854 6.32581C12.0274 5.38381 12.0274 3.85654 11.0854 2.91455C10.1434 1.97256 8.61614 1.97256 7.67415 2.91455L6.99998 3.58872C6.68598 3.90272 6.17689 3.90272 5.86289 3.58872C5.54889 3.27472 5.54889 2.76563 5.86289 2.45164L6.53706 1.77747ZM7.33706 5.52581C7.65106 5.21181 8.16015 5.21181 8.47415 5.52581C8.78814 5.8398 8.78814 6.34889 8.47415 6.66289L6.66289 8.47415C6.34889 8.78814 5.8398 8.78814 5.52581 8.47415C5.21181 8.16015 5.21181 7.65106 5.52581 7.33706L7.33706 5.52581Z"
                  fill="#6B7280" />
              </svg>
            </a> -->
          </div>
        </div>
        <div class="projects-works-main__image">
          <div class="projects-works-main__image-body">
            <template v-if="index == 0">
              <img
                src="@/shared/assets/images/projects/africa-brut/main.jpg"
                :alt="project.name" />
            </template>
            <template v-if="index == 1">
              <img
                src="@/shared/assets/images/projects/best-kids-club/main.jpg"
                :alt="project.name" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/main-works.scss";
</style>
