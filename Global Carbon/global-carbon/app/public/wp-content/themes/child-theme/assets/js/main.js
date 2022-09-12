
// (function ($) {........}(jQuery))
(function ($){
    let solutionSlider;
    $(window).on("load resize", function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            // $(".Rcard_wrapper").css("background-color", "gray");
            if (solutionSlider?.destroyed === true || !solutionSlider) {
                solutionSlider = new Swiper(".Solutioncarusel_wrapper .solutionSlider", {
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: ".Solutioncarusel_wrapper .swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                    },
                });
            }
        }
        else {
            if (solutionSlider !== undefined) solutionSlider.destroy(true, true);
        }
    });


    // /Partner Slider/


    let PartnerSlider;
    $(window).on("load resize", function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            // $(".Rcard_wrapper").css("background-color", "gray");
            if (PartnerSlider?.destroyed === true || !PartnerSlider) {
                PartnerSlider = new Swiper(".partner_Slider .partnerslider", {
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: ".partner_Slider .swiper-pagination",
                        clickable: true,
                    },

                });
            }
        }
        else {
            if (PartnerSlider !== undefined) PartnerSlider.destroy(true, true);
        }
    });

    // /Resources Slider/


    let resSlider;
    $(window).on("load resize", function () {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            // $(".Rcard_wrapper").css("background-color", "gray");
            if (resSlider?.destroyed === true || !resSlider) {
                resSlider = new Swiper(".recouseSlider_wrapper .ResSwiper", {
                    // slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: ".recouseSlider_wrapper .swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                    }
                });
            }
        }
        else {
            if (resSlider !== undefined) resSlider.destroy(true, true);
        }
    });

    // /Teams Slder/
    var swiper = new Swiper(".treamSlider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".treamSlider_container .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            590: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            920: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },

    });

    // /problem Sldier/

    var swiper = new Swiper(".problemSlider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".problem_slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            570: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });

  }(jQuery))
  
  