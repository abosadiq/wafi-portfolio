let skills = {
  html: 90,
  css: 85,
  js: 78,
  jquery: 75,
  bootsrap: 80,
  python: 65
};
setTimeout(function() {
  $.each(skills, (key, value) => {
    let skillbar = $("." + key);

    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      () => {
        $(".speech-bubble").fadeIn();
      }
    );
  });
}, 1000);

// NAV

// TOGGLE HAMBURGER & COLLAPSE NAV
$(".navbar__list--nav-toggle").on("click", function() {
  $(this).toggleClass("open");
  $(".navbar__list--menue").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".navbar__list--menue a").on("click", function() {
  $(".navbar__list--nav-toggle").removeClass("open");
  $(".navbar__list--menue").removeClass("collapse");
});

// Smooth scrool
$('a[href^="#"]').on("click", function(event) {
  var $target = $(this.getAttribute("href"));

  if ($target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        950,
        "easeInOutQuad"
      );
  }
});
