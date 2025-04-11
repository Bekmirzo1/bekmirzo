interface animate{
  duration: number,
  timing: Function,
  draw: Function,
  callback?: Function,
}
export function animate({ duration = 1000, timing, draw, callback }: animate) {
  let start = performance.now();
  requestAnimationFrame(function animateItem(time) {
      // time - start = пройденное время с начала анимации
      // duration = продолжительность анимации
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      let progress = timing(timeFraction)
      draw(progress);
      if (timeFraction < 1) {
          requestAnimationFrame(animateItem);
      } else {
          if (callback) {
              callback();
          }
      }
  });
}