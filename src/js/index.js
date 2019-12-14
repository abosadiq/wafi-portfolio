//Animations when scroll

const feders = document.querySelectorAll(".fade-in");
const slideIn = document.querySelectorAll(".slide-in");
const slideUpDown = document.querySelectorAll(".slide-up-down");

const options = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearWhenScroll = new IntersectionObserver(function(
  entries,
  appearWhenScroll
) {
  entries.forEach(entery => {
    if (!entery.isIntersecting) {
      return;
    } else {
      entery.target.classList.add("appear");
      appearWhenScroll.unobserve(entery.target);
    }
  });
},
options);

feders.forEach(fader => {
  appearWhenScroll.observe(fader);
});

slideIn.forEach(silder => {
  appearWhenScroll.observe(silder);
});

slideUpDown.forEach(silder => {
  appearWhenScroll.observe(silder);
});
