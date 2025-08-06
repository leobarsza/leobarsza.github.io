const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const logoImg = document.getElementById("logo-img");
const footerLogoImg = document.getElementById("footer-logo-img");

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Update theme icon and logo based on current theme
function updateThemeElements(theme) {
  if (theme === "dark") {
    themeIcon.className = "fas fa-sun";
    logoImg.src = "public/logo-ls-light.png"; // Light logo for dark theme
    footerLogoImg.src = "public/logo-ls-light.png";
  } else {
    themeIcon.className = "fas fa-moon";
    logoImg.src = "public/logo-ls-dark.png"; // Dark logo for light theme
    footerLogoImg.src = "public/logo-ls-dark.png";
  }
}

// Initialize theme elements
updateThemeElements(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeElements(newTheme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.getElementById("nav-menu");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      navMenu.style.display = "none";
    }
  });
});

// Header scroll effect
const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".card, .project-card, .contact-card")
  .forEach((el) => {
    observer.observe(el);
  });

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Add loading class to body when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Handle form submissions (if you add contact forms later)
function handleFormSubmit(event) {
  event.preventDefault();
  // Add your form handling logic here
  console.log("Form submitted");
}

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Add click tracking for analytics (optional)
function trackClick(element, action) {
  // Add your analytics tracking code here
  console.log(`Clicked: ${element} - ${action}`);
}

// Track button clicks
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    trackClick(e.target.textContent, "button_click");
  });
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    navMenu.style.display = "none";
  }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
  // Add any scroll-based functionality here
}, 100);

window.addEventListener("scroll", debouncedScrollHandler);
