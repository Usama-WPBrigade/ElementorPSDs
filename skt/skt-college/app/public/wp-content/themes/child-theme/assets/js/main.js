
// (function ($) {........}(jQuery))

(function ($){
  $(".search-icon-btn").on('click', function (e) {
    $(".top-search-form-wrapper").slideToggle();
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    }

});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    thumbs: {
        swiper: swiper
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

    }

});



  /*Bottom slider*/
  var swiper = new Swiper(".bottomSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1124: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
});


}(jQuery))



