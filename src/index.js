/*
const fade = document.querySelectorAll(".fade-in");

const appearOption = {
  threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOption);

fade.forEach((fade) => {
  appearOnScroll.observe(fade);
});
*/
