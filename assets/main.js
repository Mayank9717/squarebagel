$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 8, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for responsive design
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#one").click(function () {
    $("#oneshow").toggle();
  });
});

$(document).ready(function () {
  $("#two").click(function () {
    $("#twoshow").toggle();
  });
});

$(document).ready(function () {
  $("#three").click(function () {
    $("#threeshow").toggle();
  });
});

$(document).ready(function () {
  $("#four").click(function () {
    $("#fourshow").toggle();
  });
});

$(document).ready(function () {
  $("#toggle_open").click(function () {
    $("#openToggle").toggle();
  });
});
