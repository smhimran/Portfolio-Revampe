$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("#nav-wrap").css("background", "rgba(68, 68, 68, 0.9)");
    }
    if (scroll > 300 && scroll <= 920) {
      $("#about-link").addClass("current");
      $("#home-link").removeClass("current");
      $("#resume-link").removeClass("current");
    }
    if (scroll > 920 && scroll <= 3300) {
      $("#home-link").removeClass("current");
      $("#projects-link").removeClass("current");
      $("#about-link").removeClass("current");
      $("#resume-link").addClass("current");
    }

    if (scroll > 3300) {
      $("#about-link").removeClass("current");
      $("#resume-link").removeClass("current");
      $("#home-link").removeClass("current");
      $("#projects-link").addClass("current");
    }

    if (scroll <= 300) {
      $("#nav-wrap").css("background", "transparent");
      $("#about-link").removeClass("current");
      $("#home-link").addClass("current");
      $("#resume-link").removeClass("current");
    }
  });
});
