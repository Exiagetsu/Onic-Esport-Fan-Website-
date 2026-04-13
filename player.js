const select = document.getElementById("role-filter");
const cards = document.querySelectorAll(".players-grid .player-link");

gsap.set(cards, { opacity: 0, y: 30 });

gsap.to(cards, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1,
  delay: 0.1,
});

select.addEventListener("change", function () {
  const selected = this.value;

  cards.forEach((card) => {
    const role = card.querySelector("[data-role]").getAttribute("data-role");

    if (selected === "All" || role === selected) {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        onStart: () => {
          card.style.display = "block";
        },
      });
    } else {
      gsap.to(card, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          card.style.display = "none";
        },
      });
    }
  });
});
