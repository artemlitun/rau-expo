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
  });
});
