document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".trophy-scroll-wrapper");
  const grid = document.querySelector(".trophy-grid");

  const items = grid.innerHTML;
  grid.innerHTML += items;

  let scrollSpeed = 1.5;
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      wrapper.scrollLeft += scrollSpeed;

      if (wrapper.scrollLeft >= grid.scrollWidth / 2) {
        wrapper.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  wrapper.addEventListener("mouseenter", () => (isPaused = true));
  wrapper.addEventListener("mouseleave", () => (isPaused = false));

  wrapper.addEventListener("touchstart", () => (isPaused = true));
  wrapper.addEventListener("touchend", () => {
    setTimeout(() => (isPaused = false), 2000);
  });

  autoScroll();
});
const trophyWrapper = document.querySelector(".trophy-scroll-wrapper");

trophyWrapper.addEventListener("wheel", (evt) => {
  evt.preventDefault();

  trophyWrapper.scrollLeft += evt.deltaY;
});
