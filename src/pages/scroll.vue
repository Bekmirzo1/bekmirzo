<script setup lang="ts">
import gsap from "gsap";

const main = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const boxes = self.selector(".box");
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>
<template>
    <div class="exp">
    <section class="section flex-center column blue">
      <h1>Basic ScrollTrigger in Nuxt 3</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div class="section flex-center column" ref="main">
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.exp {
  --dark: #1d1d1d;
  --grey-dark: #414141;
  --light: #fff;
  --mid: #ededed;
  --grey: #989898;
  --gray: #989898;
  --green: #28a92b;
  --green-dark: #4e9815;
  --green-light: #6fb936;
  --blue: #2c7ad2;
  --purple: #8d3dae;
  --red: #c82736;
  --orange: #e77614;
  accent-color: var(--green);
}

/* colors */

.green {
  background-color: var(--green);
}

.blue {
  background-color: var(--blue);
}

.purple {
  background-color: var(--purple);
}

.red {
  background-color: var(--red);
}

.orange {
  background-color: var(--orange);
}

.dark {
  background-color: var(--dark);
  color: var(--light);
}

.light {
  background-color: var(--light);
  color: var(--dark);
}

.text-light {
  color: var(--light);
}

.text-dark {
  color: var(--dark);
}

.gray,
.grey {
  background-color: var(--grey);
}

.panel.align-top {
  align-items: flex-start;
}

.panel h1 {
  font-size: 1.8em;
  color: white;
  font-weight: 300;
  margin: 0 auto;
}

.panel.description {
  padding-bottom: 60px;
}

.panel p,
.panel li {
  color: black;
  font-weight: 400;
  text-align: left;
  font-size: 0.8em;
  line-height: 1.5em;
  margin: 0.3em 0 1em 0;
}

.panel p strong,
.panel li strong {
  color: white;
  font-weight: 400;
}

.panel p code,
.panel li code {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 2px 4px;
  border-radius: 5px;
}

.panel li {
  margin: 0;
}

.gray {
  background-color: #777;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #777, #606060);
}

.blue {
  background-color: #2c7ad2;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #2c7ad2, #1568c6);
}

.orange {
  background-color: #e77614;
  background-image: radial-gradient(
      circle at 46% 40%,
      rgba(228, 228, 228, 0.06) 0%,
      rgba(228, 228, 228, 0.06) 13%,
      transparent 13%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 41%,
      rgba(198, 198, 198, 0.06) 0%,
      rgba(198, 198, 198, 0.06) 19%,
      transparent 19%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 23%,
      rgba(14, 14, 14, 0.06) 0%,
      rgba(14, 14, 14, 0.06) 69%,
      transparent 69%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 85%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 74%,
      rgba(232, 232, 232, 0.06) 0%,
      rgba(232, 232, 232, 0.06) 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 59% 54%,
      rgba(39, 39, 39, 0.06) 0%,
      rgba(39, 39, 39, 0.06) 49%,
      transparent 49%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 38%,
      rgba(157, 157, 157, 0.06) 0%,
      rgba(157, 157, 157, 0.06) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 6%,
      rgba(60, 60, 60, 0.06) 0%,
      rgba(60, 60, 60, 0.06) 12%,
      transparent 12%,
      transparent 100%
    ),
    linear-gradient(90deg, #ff7600, #ff7600);
}

.red {
  background-color: #c82736;
  background-image: radial-gradient(
      circle at 19% 90%,
      rgba(190, 190, 190, 0.04) 0%,
      rgba(190, 190, 190, 0.04) 17%,
      transparent 17%,
      transparent 100%
    ),
    radial-gradient(
      circle at 73% 2%,
      rgba(78, 78, 78, 0.04) 0%,
      rgba(78, 78, 78, 0.04) 94%,
      transparent 94%,
      transparent 100%
    ),
    radial-gradient(
      circle at 45% 2%,
      rgba(18, 18, 18, 0.04) 0%,
      rgba(18, 18, 18, 0.04) 55%,
      transparent 55%,
      transparent 100%
    ),
    radial-gradient(
      circle at 76% 60%,
      rgba(110, 110, 110, 0.04) 0%,
      rgba(110, 110, 110, 0.04) 34%,
      transparent 34%,
      transparent 100%
    ),
    radial-gradient(
      circle at 68% 56%,
      rgba(246, 246, 246, 0.04) 0%,
      rgba(246, 246, 246, 0.04) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 42%,
      rgba(156, 156, 156, 0.04) 0%,
      rgba(156, 156, 156, 0.04) 47%,
      transparent 47%,
      transparent 100%
    ),
    radial-gradient(
      circle at 46% 82%,
      rgba(247, 247, 247, 0.04) 0%,
      rgba(247, 247, 247, 0.04) 39%,
      transparent 39%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 47%,
      rgba(209, 209, 209, 0.04) 0%,
      rgba(209, 209, 209, 0.04) 45%,
      transparent 45%,
      transparent 100%
    ),
    linear-gradient(90deg, #e53949, #cc2232);
}

.purple {
  background-color: #8d3dae;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #8d3dae, #8d3dae);
}

.green {
  background-color: #28a92b;
  background-image: radial-gradient(
      circle at 46% 40%,
      rgba(228, 228, 228, 0.06) 0%,
      rgba(228, 228, 228, 0.06) 13%,
      transparent 13%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 41%,
      rgba(198, 198, 198, 0.06) 0%,
      rgba(198, 198, 198, 0.06) 19%,
      transparent 19%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 23%,
      rgba(14, 14, 14, 0.06) 0%,
      rgba(14, 14, 14, 0.06) 69%,
      transparent 69%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 85%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 74%,
      rgba(232, 232, 232, 0.06) 0%,
      rgba(232, 232, 232, 0.06) 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 59% 54%,
      rgba(39, 39, 39, 0.06) 0%,
      rgba(39, 39, 39, 0.06) 49%,
      transparent 49%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 38%,
      rgba(157, 157, 157, 0.06) 0%,
      rgba(157, 157, 157, 0.06) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 6%,
      rgba(60, 60, 60, 0.06) 0%,
      rgba(60, 60, 60, 0.06) 12%,
      transparent 12%,
      transparent 100%
    ),
    linear-gradient(90deg, #28a92b, #10a614);
}

button {
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: var(--light);
  background-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 100%),
    hsl(0deg 0% 94%)
  );
  -webkit-box-shadow: 0px 1px 0px #414141;
  -moz-box-shadow: 0px 1px 0px #414141;
  box-shadow: 0px 1px 0px #414141;
  color: var(--dark);
  text-decoration: none;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: 'Signika Negative', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;
}

button:hover {
  background: var(--green-light);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  font-family: 'Signika Negative', sans-serif, Arial;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

h1,
h2,
p,
li {
  max-width: 800px;
}

/* HEADER */
header {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 6px 10px 10px 10px;
  border-bottom-right-radius: 26px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  will-change: transform;
}

a {
  text-decoration: none;
  color: var(--green-dark);
}

/* HEADINGS */
.header-section {
  padding: 0 15px;
  text-align: center;
  margin: 40vh auto 50vh;
}

/* SCROLL DOWN */
.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  overflow: visible;
}

.scroll-down .arrow {
  position: relative;
  top: -4px;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
}

.arrow-right {
  transform: rotate(-90deg);
  position: relative;
  top: -4px;
  margin: 1rem auto;
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
}

html,
body {
  height: auto;
  background-color: var(--dark);
  color: var(--light);
  font-family: 'Signika Negative', sans-serif;
}

.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
}

nav {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;
  list-style: none;
}

nav li a {
  padding: 0.5rem 1rem 0.25rem;
  color: var(--mid);
  text-decoration: none;
  font-size: 18px;
  display: block;
}

nav li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.panel {
  height: 100vh;
  position: sticky;
  top: 0;
}

.section {
  width: 100%;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
  gap: 1rem;
}

.boxes-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.box {
  background-color: var(--green);
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}

</style>