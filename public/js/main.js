
/* =========================
   FADE-IN ON SCROLL
========================= */

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {
  const progressBar = document.querySelector(".scroll-progress");

  if (!progressBar) return;

  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
});

/* =========================
   COUNTER ANIMATION (IMPROVED)
========================= */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = Math.ceil(target / 60);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

/* Trigger counters only when stats section is visible */
const statsSection = document.querySelector(".stats");

if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          statsObserver.disconnect();
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  statsObserver.observe(statsSection);
}

/* =========================
   MOBILE NAVBAR TOGGLE
========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}