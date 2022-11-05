const navMenu =
  document.getElementById("nav-menu");
const toggle =
  document.getElementById("nav-toggle");
const close =
  document.getElementById("nav-close");

toggle.addEventListener("click", () => {
  navMenu.classList.add("show__menu");
});

if (close) {
  close.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

// close menu if user click on link

const navLinks =
  document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu =
    document.getElementById("nav-menu");
  navMenu.classList.remove("show__menu");
};

navLinks.forEach((link) =>
  link.addEventListener("click", linkAction)
);

/*============== Accordion skills ===============*/

const skillsContent =
  document.getElementsByClassName(
    "skills__content"
  );
const skillsHeader = document.querySelectorAll(
  ".skill__header"
);

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className =
      "skills__content skills__close";
  }
  if (
    itemClass === "skills__content skills__close"
  ) {
    this.parentNode.className =
      "skills__content skills__open";
  }
}

skillsHeader.forEach((header) =>
  header.addEventListener("click", toggleSkills)
);

// Qualification tabs show and hide

const tabs = document.querySelectorAll(
  "[data-target]"
);
const tabContents = document.querySelectorAll(
  "[data-content]"
);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(
      tab.dataset.target
    );

    tabContents.forEach((content) => {
      content.classList.remove(
        "qualification__active"
      );
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove(
        "qualification__active"
      );
    });
    tab.classList.add("quilification__active");
  });
});

//service modals hide or view

const modals = document.querySelectorAll(
  ".services__modal"
);
const buttons = document.querySelectorAll(
  ".services__button"
);
const closeBtns = document.querySelectorAll(
  ".services__modal-close"
);

const showModal = (modalIndex) => {
  modals[modalIndex].classList.add("active");
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    showModal(i);
  });
});

closeBtns.forEach((close) => {
  close.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
  });
});

//------------- swipperjs ------------

let swiper = new Swiper(".portfolio__container", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let testimonialSwiper = new Swiper(
  ".testimonial__container",
  {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  }
);

// scroll section active link

const sections = document.querySelectorAll(
  "section[id]"
);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        )
        .classList.add("active__link");
    } else {
      document
        .querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        )
        .classList.remove("active__link");
    }
  });
}

document.addEventListener("scroll", scrollActive);

//change header boxshadow

function changeHeader() {
  const top = window.pageYOffset;
  if (top > 80) {
    document
      .querySelector("header")
      .classList.add("scroll__header");
  } else {
    document
      .querySelector("header")
      .classList.remove("scroll__header");
  }
}

document.addEventListener("scroll", changeHeader);

function showScrollup() {
  const top = window.pageYOffset;
  if (top >= 300) {
    document
      .querySelector("#scroll-up")
      .classList.add("show__scrollup");
  } else {
    document
      .querySelector("#scroll-up")
      .classList.remove("show__scrollup");
  }
}

document.addEventListener("scroll", showScrollup);

const themeButton = document.getElementById(
  "theme-button"
);
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem(
  "selected-theme"
);
const selectedIcon = localStorage.getItem(
  "selected-icon"
);

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme)
    ? "dark"
    : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "uil-sun"
    : "uil-moon";

if (selectedTheme) {
  document.body.classList[
    selectedTheme === "dark" ? "add" : "remove"
  ](darkTheme);
  themeButton.classList[
    selectedIcon === "uil-moon" ? "add" : "remove"
  ][iconTheme];
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem(
    "selected-theme",
    getCurrentTheme()
  );
  localStorage.setItem(
    "selected-icon",
    getCurrentIcon()
  );
});
