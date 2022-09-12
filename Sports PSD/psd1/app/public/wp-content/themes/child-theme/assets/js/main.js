
// (function ($) {........}(jQuery))

(function ($){
  var swiper = new Swiper(".sliderSwiper", {
    spaceBetween: 30,
    slidePerView:1,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 
  var swiper = new Swiper(".elementor-image-carousel", {
    spaceBetween: 30,
    slidePerView:1,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Notification close section
  $(".notificationClose-btn").on('click', function () {
    $(".notification-section").hide();
  });

  // Change the icons and search button
  $(".elementor-search-form__input").on("input", function () {
    // Print entered value in a div box
    var res = $(this).val();
    if (res != 0) {
      $(".elementor-search-form__submit").addClass("hide");
    } else if (res == 0) {
      $(".elementor-search-form__submit").removeClass("hide");
    }
  });

  $(".burgericon").on('click', function () {
    $(".header-section-wrapper").slideToggle();
    $("body").toggleClass("overflowclass")
    $(".burgericon").toggleClass("openmenu")

    // $(".mainHeader_wrapper").toggleClass(".fullWidth_header")
  });


}(jQuery))

function playvideo() {
  elementorProFrontend.modules.popup.showPopup( { id: 648 } );
}

