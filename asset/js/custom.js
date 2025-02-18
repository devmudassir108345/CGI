const heroBtn = document.querySelectorAll(".hero__btn");
const herosliden = document.querySelector(".swiper-slide");
heroBtn.forEach((item) => {
  item.addEventListener("click", () => {
    // Check if herosliden exists before applying animation
    if (herosliden) {
      herosliden.style.animation = "fadein 1s ease-in-out";
    } else {
      console.error("Element herosliden not found!");
    }
  });
});

const sidebar = document.querySelector(".header__sidebar");
const menubtn = document.querySelector(".header__btn");
const closebtn = document.querySelector(".header__close");

const toggleSidebar = () => {
  sidebar.classList.toggle("header__sidebar-hidden");
};

const closesidebar = () => {
  sidebar.classList.add("header__sidebar-hidden");
};

menubtn.addEventListener("click", toggleSidebar);
closebtn.addEventListener("click", toggleSidebar);

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closesidebar();
  }
});

const sideBarLinks = document.querySelectorAll(".header__nav a");
sideBarLinks.forEach((link) => {
  link.addEventListener("click", closesidebar);
});

function updateSlideCount(swiper) {
  const currentSlide = swiper.realIndex + 1;
  const totalSlides = swiper.slides.length;
  const slideCountElement = document.getElementById("slide-count");
  slideCountElement.textContent = `Slide ${currentSlide} of ${totalSlides}`;
}

const items = document.querySelectorAll(".services__item");

const observer = new IntersectionObserver(
  (entries) => {
    // Entries ko unki intersection ratio ke mutabiq sort karo
    entries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    // Pehle se 'active' class wale item se 'active' class hatao
    document.querySelectorAll(".services__item.active").forEach((item) => {
      item.classList.remove("active");
    });

    // Sabse zyada visible entry ko 'active' class do
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("active");
    }
  },
  { rootMargin: "10% 0px -50% 0px", threshold: 0.5 }
);

items.forEach((item) => {
  observer.observe(item);
});

let lastScrollY = 0;

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    header.classList.add("hidden");
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up: show header and make it sticky
    header.classList.add("sticky");
    header.classList.remove("hidden");
  }

  // Remove sticky class if back to the top
  if (currentScrollY === 0) {
    header.classList.remove("sticky");
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("click", function (event) {
  const header = event.target.closest(".accordion-header");
  if (!header) return;

  const item = header.parentElement;
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".icon");

  // Close other accordion items
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((i) => {
    const itemContent = i.querySelector(".accordion-content");
    const itemIcon = i.querySelector(".icon");
    if (i !== item) {
      itemContent.style.maxHeight = null;
      i.classList.remove("active");
      itemIcon.textContent = "+";
    }
  });

  // Toggle current accordion item
  if (item.classList.contains("active")) {
    content.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    content.style.maxHeight = "max-content";
    icon.textContent = "-";
  }

  item.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof lightbox !== "undefined") {
    console.log("Lightbox2 is successfully loaded.");
  } else {
    console.error("Lightbox2 is not loaded properly.");
  }
});

const swiper = new Swiper(".testimonial__slider", {
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
});

document.addEventListener("DOMContentLoaded", function () {
  // "Watch" class wale sabhi elements ko select karna
  const watchButtons = document.querySelectorAll(".watch");

  watchButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      openPopupUnique();
    });
  });
});

let videoPlaying = false;

function openPopupUnique() {
  const popup = document.getElementById("popup-unique");
  popup.style.display = "flex";
  videoPlaying = false; // Video initially paused when opened
  document.getElementById("youtubeVideoUnique").src += "?autoplay=1";
}

function closePopupUnique() {
  const popup = document.getElementById("popup-unique");
  popup.style.display = "none";
  const iframe = document.getElementById("youtubeVideoUnique");
  iframe.src = iframe.src.replace("?autoplay=1", "?autoplay=0");
}

function toggleVideo() {
  const iframe = document.getElementById("youtubeVideoUnique");
  const playPauseBtn = document.querySelector(".popup-play-btn");
  if (videoPlaying) {
    iframe.src = iframe.src.replace("?autoplay=1", "?autoplay=0");
    playPauseBtn.innerText = "▶"; // Change button to play
  } else {
    iframe.src = iframe.src.replace("?autoplay=0", "?autoplay=1");
    playPauseBtn.innerText = "❚❚"; // Change button to pause
  }
  videoPlaying = !videoPlaying;
}

const mySwiper = new Swiper(".clients-slider-8", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Infinite loop

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3, // Tablets
    },
    1024: {
      slidesPerView: 4, // Large screens
    },
  },
});
