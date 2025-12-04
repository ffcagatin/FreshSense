document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".scroll-down");
  const howSection = document.querySelector(".how");
  const phone = document.getElementById("phoneMockup");
  const howSectionEl = document.getElementById("howSection");

  function activatePhoneLift() {
    if (phone && !phone.classList.contains("lift")) {
      phone.classList.add("lift");
    }
  }

  if (btn && howSection) {
    btn.addEventListener("click", () => {
      howSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(activatePhoneLift, 300);
    });
  }

  if (phone && howSectionEl) {
    window.addEventListener("scroll", () => {
      const rect = howSectionEl.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.75;

      if (rect.top < triggerPoint) {
        activatePhoneLift();
      }
    });
  }

  const introContent = document.querySelector(".intro-content");
  if (introContent) {
    requestAnimationFrame(() => {
      introContent.classList.add("animate");
    });
  }

  const slides = document.querySelectorAll(".farmers-slide");
  const nextBtn = document.getElementById("farmersNext");

  let currentSlide = 0;

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => {
      slide.classList.remove("active", "animate");
    });

    const target = slides[index];
    target.classList.add("active");

    requestAnimationFrame(() => {
      target.classList.add("animate");
    });
  }

  if (slides.length && nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  }
});

  const infoSection = document.querySelector(".info");
  const infoLeft = document.querySelector(".info-left");
  const infoRight = document.querySelector(".info-right");

  if (infoSection && infoLeft && infoRight) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              infoLeft.classList.add("animate");
              infoRight.classList.add("animate");
              observer.unobserve(infoSection);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(infoSection);
    } else {
      requestAnimationFrame(() => {
        infoLeft.classList.add("animate");
        infoRight.classList.add("animate");
      });
    }
  }
  
  const nav = document.getElementById("nav-menu");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".menu-list-container a");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });
  }
