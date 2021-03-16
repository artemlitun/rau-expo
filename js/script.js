jQuery(document).ready(function ($) {
  $(".slider__exponants").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 500,
    // easing: "ease",
    // infinite: false,
    // initialeSlide: 1,
    autoplay: true,
    autoplaySpeed: 500,
    //   touchThreshold: 5;
    rows: 2,
    // mobile ---- rows 6
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          autoplay: false,

          slidesToShow: 7,
          slidesToScroll: 1,
          rows: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});

jQuery(document).ready(function ($) {
  $(".slider__reviews").slick({
    // arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    // easing: "ease",
    // infinite: false,
    // initialeSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 500,
    //  touchThreshold: 5;
    // rows: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});

$("#getting-started").countdown("2021/04/14", function (event) {
  $(this).html(
    "<div>" +
      event.strftime("%D") +
      "</div><div>" +
      event.strftime("%H") +
      "</div><div>" +
      event.strftime("%M") +
      "</div><div>" +
      event.strftime("%S") +
      "</div>"
  );

  //event.strftime("%D %H %M %S"));
});
