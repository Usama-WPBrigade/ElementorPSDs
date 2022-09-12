
// (function ($) {........}(jQuery))
(function ($){


  $(".burgericon").on('click', function () {
    $(".menu-header").slideToggle();
    $("body").toggleClass("overflowclass")
    $(".burgericon").toggleClass("openmenu")

    // $(".mainHeader_wrapper").toggleClass(".fullWidth_header")
  });








  let overlaySlider;

  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      // $(".overlay_wrapper").css("background-color", "gray");
      if (overlaySlider?.destroyed === true || !overlaySlider) {
        overlaySlider = new Swiper(".overlay_wrapper .overlay", {
          slidesPerView: 1,
          loop: true,
          
          pagination: {
            el: ".overlay_wrapper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".overlay_wrapper .swiper-button-next",
            prevEl: ".overlay_wrapper .swiper-button-prev",
          },
          breakpoints: {
            767: {
              slidesPerView: 2,
            },
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
          }
        });
      }
    }
    else {
      if (overlaySlider !== undefined) overlaySlider.destroy(true, true);
    }
  });

 
  $(document).ready(function () {

    let roundSlider;
    $(window).on("load resize", function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            // $(".Rcard_wrapper").css("background-color", "gray");
            if (roundSlider?.destroyed === true || !roundSlider) {
                roundSlider = new Swiper(".round-section-wrapper .roundsliders", {
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: ".round-section-wrapper .swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".round-section-wrapper .swiper-button-next",
                        prevEl: ".round-section-wrapper .swiper-button-prev",
                    },
                    breakpoints: {
                        767: {
                            slidesPerView: 1,
                        },
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                    }
                });
            }
        }
        else {
            if (roundSlider !== undefined) roundSlider.destroy(true, true);
        }
    });





})
}(jQuery))

