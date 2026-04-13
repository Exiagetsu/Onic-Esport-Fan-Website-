const track = document.getElementById("gallery-track");
const nextBtn = document.querySelector(".gallery-btn.next");
const prevBtn = document.querySelector(".gallery-btn.prev");

const scrollAmount = 436;

nextBtn.addEventListener("click", () => {
  track.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});
