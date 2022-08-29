window.onscroll = function () {
  scrollFunctionNavShrink();
  scrollFunctionToTop();
};
// navbar shrink
function scrollFunctionNavShrink() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px";
  } else {
    document.getElementById("navbar").style.padding = "5px";
  }
}

// backtotop button

function scrollFunctionToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// video popup

$(document).ready(function () {
  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });
});
// index carousel
var owl = $(".slider");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
});
// index feedback slider
$(".feedback_slide").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
