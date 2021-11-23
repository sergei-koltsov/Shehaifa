$(".burger-menu").on("click", function () {
    $(this).toggleClass("burger-close");
    $(".header__menu").toggleClass("open");
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });