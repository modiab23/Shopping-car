  var swiper = new Swiper(".cars-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCurser:true,
    centeredSlides:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
      },

    768: {
        slidesPerView: 2,
      },
    991: {
        slidesPerView: 3,
      },
    },
  });

  /* ****** */
  