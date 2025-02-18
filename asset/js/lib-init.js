/*****************************************************************************************************************************
 *
 * ?                                                   ALL FUNCTIONS
 *
 ****************************************************************************************************************************/

/****************************************************
 *
 * !              TOOGLE BTNS OPASITY
 *
 ****************************************************/







function toggleButtonOpacity(swiper) {
  const nextButtons = document.querySelectorAll(".btn-next");
  const prevButtons = document.querySelectorAll(".btn-prev");

  nextButtons.forEach((button) => {
    button.style.opacity = swiper.isEnd ? "0.5" : "1";
    button.style.transition = "all .3s";
  });

  prevButtons.forEach((button) => {
    button.style.opacity = swiper.isBeginning ? "0.5" : "1";
    button.style.transition = "all .3s";
  });
}

/****************************************************
 *
 * !              SWIPER STATE UPDATE
 *
 ****************************************************/



function toggleSwiperState(swiper) {
  swiper.update(); // ✅ Ensures Swiper is refreshed properly
  
  const visibleSlides = document.querySelectorAll(
    ".swiper-slide:not(.hidden)"
  ).length;

  if (window.innerWidth >= 1500 && visibleSlides < 3) {
    swiper.disable();
  } else if (window.innerWidth >= 768 && visibleSlides < 2) {
    swiper.disable();
  } else {
    swiper.enable();
  }
}





function disableOnSingleSlide(swiper) {
  swiper.update(); // ✅ Ensure Swiper refreshes properly

  const visibleSlides = document.querySelectorAll(
    ".swiper-slide:not(.hidden)"
  ).length;

  if (visibleSlides > 1) {
    swiper.enable();
  } else {
    swiper.disable();
  }
}




/****************************************************
 *
 * !              UPDATE SLIDE COUNTE
 *
 ****************************************************/

function updateSlideCount(swiper, countElementId) {
  const currentSlide = swiper.realIndex + 1;
  const totalSlides = swiper.slides.length;
  const slideCountElement = document.getElementById(countElementId);
  if (slideCountElement) {
    slideCountElement.innerHTML = ` ${currentSlide} <span class="line"></span> ${totalSlides}`;
  }
}

/****************************************************
 *
 * !              TABS FUNCTIONS
 *
 ****************************************************/

const projectSlider = new Swiper(".swiper-container", {
  slidesPerGroup: 2,
  slidesPerView: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
      toggleSwiperState(this);
    },
    slideChange: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
    },
    resize: function () {
      toggleSwiperState(this);
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
  },
});


const tabs = document.querySelectorAll(".tab");
const slides = document.querySelectorAll(".swiper-slide");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filterValue = tab.dataset.filter;

    slides.forEach((slide) => {
      if (filterValue === "all" || slide.dataset.category === filterValue) {
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
      }
    });

    setTimeout(() => {
      projectSlider.update();
      projectSlider.slideTo(0);
      toggleSwiperState(projectSlider);
    }, 100);
  });
});


console.log(projectSlider);










/*****************************************************************************************************************************
 *
 * ?                                                   SWIPER SLIDER CONTAINERS
 *
 ****************************************************************************************************************************/

/****************************************************
 *
 * !          HERO SLIDER CONTAINERS
 *
 ****************************************************/

const swiper = new Swiper(".hero__slider", {
  slidesPerView: 1,
  // spaceBetween: 10,

  navigation: {
    nextEl: ".hero__btn-next",
    prevEl: ".hero__btn-prev",
  },
  speed: 1000,
  delay: 5000,

  on: {
    init: function () {
      toggleButtonOpacity(this);
    },
    slideChange: function () {
      toggleButtonOpacity(this);
    },
  },
});

/****************************************************
 *
 * !          SERVICES SLIDERS
 *
 ****************************************************/



document.querySelectorAll(".services__sliders").forEach((slider, index) => {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    speed: 800,
    effect: "slide",
    navigation: {
      nextEl: `.services__btn-next-${index + 1}`,
      prevEl: `.services__btn-prev-${index + 1}`,
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"), // Independent pagination
      clickable: true,
    },
    on: {
      init: function () {
        updateSlideCount(this, `slide-count-${index + 1}`);
        toggleButtonOpacity(this);
      },
      slideChange: function () {
        updateSlideCount(this, `slide-count-${index + 1}`);
        toggleButtonOpacity(this);
      },
    },
  });
});







/****************************************************
 *
 * !          CLIENTS SLIDER
 *
 ****************************************************/

const clintsSlider = new Swiper(".clients-slider", {
  slidesPerView: 1,
  spaceBetween: 56,
  navigation: {
    nextEl: ".clients__btn-next",
    prevEl: ".clients__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
    },
    slideChange: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/****************************************************
 *
 * !          CLIENTS SLIDER 2
 *
 ****************************************************/

// const clintsSlider2 = new Swiper(".clients-slider-2", {
//   slidesPerView: 1,
//   spaceBetween: 113,
//   navigation: {
//     nextEl: ".clients__btn-next",
//     prevEl: ".clients__btn-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // loop: false,

//   on: {
//     init: function () {
//       updateSlideCount(this, "slide-count-4");
//       toggleButtonOpacity(this);
//     },
//     slideChange: function () {
//       updateSlideCount(this, "slide-count-4");
//       toggleButtonOpacity(this);
//     },
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 4,
//     },
//   },
// });

const clientsSlider2 = new Swiper(".clients-slider-2", {
  slidesPerView: 1,
  spaceBetween: 113,
  
  navigation: {
    nextEl: ".clients__btn-next",
    prevEl: ".clients__btn-prev",
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // Optional for better UI
  },

  on: {
    init: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
    },
    slideChange: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});


/****************************************************
 *
 * !          CLIENTS SLIDER 3
 *
 ****************************************************/

const clintsSlider3 = new Swiper(".clients-slider-3", {
  slidesPerView: 1,
  spaceBetween: 113,
  navigation: {
    nextEl: ".clients__btn-next",
    prevEl: ".clients__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // loop: false,

  on: {
    init: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
      toggleSwiperState(this);
      
    },
    slideChange: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
      toggleSwiperState(this);
    },
    resize: function () {
      toggleSwiperState(this);
    },
  },
});

/****************************************************
 *
 * !          CLIENTS SLIDER 5
 *
 ****************************************************/

const clintsSlider5 = new Swiper(".clients-slider-5", {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".clients__btn-next",
    prevEl: ".clients__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // loop: false,

  on: {
    init: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
      disableOnSingleSlide(this)
    },
    slideChange: function () {
      updateSlideCount(this, "slide-count-4");
      toggleButtonOpacity(this);
      disableOnSingleSlide(this)
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    
  },
});

/****************************************************
 *
 * !          PROJECTS SLIDER CONTAINER
 *
 ****************************************************/

const projectSlidesr = new Swiper(".swiper-containers", {
  slidesPerGroup: 2,
  slidesPerView: 1,
  spaceBetween: 50,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },

  on: {
    init: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
      toggleSwiperState(this);
    },
    slideChange: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
    },
    resize: function () {
      toggleSwiperState(this);
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
  },
});










/****************************************************
 *
 * !       TESTIMONIALS SLIDER CONTAINER
 *
 ****************************************************/

const swipers = new Swiper(".testimonial__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial__btn-next",
    prevEl: ".testimonial__btn-prev",
  },
  loop: true,


  on: {
    init: function () {
      toggleButtonOpacity(this);
    },
    slideChange: function () {
      toggleButtonOpacity(this);
    },
  },
});




/****************************************************
 *
 * !       TESTIMONIALS SLIDER CONTAINER
 *
 ****************************************************/
const gallery = new Swiper(".gallery-container", {
  slidesPerGroup: 2,
  slidesPerView: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
      toggleSwiperState(this);
    },
    slideChange: function () {
      toggleButtonOpacity(this);
      updateSlideCount(this, "slide-count-5");
    },
    resize: function () {
      toggleSwiperState(this);
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3, // ✅ Fixed
    },
  },
});