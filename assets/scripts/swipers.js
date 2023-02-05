const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  autoplay: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView:1.1,
    spaceBetween: 20,
    breakpoints:{
        1024:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:2,
        }
    }
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView:1.1,
    spaceBetween: 20,
    breakpoints:{
        1024:{
            slidesPerView:4,
        },
        768:{
            slidesPerView:3,
        },
        540:{
          slidesPerView:2,
      }
    }
});
