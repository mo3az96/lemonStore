$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Nav *****/
  $(".menu-btn").click(function (e) {
    $(".overlay").fadeIn(500);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-icon,.overlay").click(function (e) {
    $(".overlay").fadeOut(500);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  if ($(window).width() <= 991) {
    $(".nav-link").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".nav-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-link").not(this).siblings().slideUp(500);
    });
  }
  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });

  /***** Categories slider *****/
  var categoriesSwiper = new Swiper(".categories-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".categories-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".categories-slider .swiper-btn-next",
      prevEl: ".categories-slider .swiper-btn-prev",
    },
  });

  /***** Specials slider *****/
  var generalSwiper = new Swiper(".general-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".general-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".general-slider .swiper-btn-next",
      prevEl: ".general-slider .swiper-btn-prev",
    },
  });

  /***** Brands slider *****/
  var brandsSwiper = new Swiper(".brands-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 16,
      },
    },
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Category Products slider *****/
  var cat0Swiper = new Swiper(".cat0-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".cat0-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cat0-slider .swiper-btn-next",
      prevEl: ".cat0-slider .swiper-btn-prev",
    },
  });

  /***** Category Products slider *****/
  var cat1Swiper = new Swiper(".cat1-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".cat1-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cat1-slider .swiper-btn-next",
      prevEl: ".cat1-slider .swiper-btn-prev",
    },
  });

  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".nav-title").click(function () {
      $(".nav-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-title").not(this).siblings().slideUp(500);
    });
  }

  /***** Arrow *****/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
