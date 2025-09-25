const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  gsap.to(themeToggle, {
    scale: 0.9,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut",
  });
});

const menuToggle = document.getElementById("menuToggle");
const moblieMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  moblieMenu.classList.toggle("active");

  if (moblieMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

function initLoader() {
  const loader = document.querySelector(".loader");
  const loaderText = document.querySelector(".loader-text");
  const LoaderProgress = document.querySelector(".loader-progress");

  gsap.to(loaderText, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  gsap.to(LoaderProgress, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loader.style.display = "none";
           document.body.style.overflow = "auto";
          initAnimations();
        },
      });
    },
  });
}

window.addEventListener("DOMContentLoaded", initLoader);

function initAnimations() {
  gsap.to("nav", {
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  const heroT1 = gsap.timeline();
  heroT1
  .to(
    ".image-container img",
    {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.1,
      ease: "power3.Out",
    },
  )


  
    .to(
      ".hero-img",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.1,
        ease: "power3.Out",
      },
      "-=0.3"
    )

    .to(".hero-title", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.2,
      ease: "power3.Out",
    })

    .to(
      ".hero-subtitle",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power3.Out",
      },
      "-=0.5"
    )

    .to(
      ".hero-description",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power3.Out",
      },
      "-=0.3"
    )

    .to(
      ".cta-button",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power3.Out",
      },
      "-=0.3"
    )

    const projectT2 = gsap.timeline();
    projectT2
    
    .to(".section-tittle", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.8,
      ease: "power3.Out",
    })
    
    .to(".project-card", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.1,
      ease: "power3.Out",
    },"-=5")
    
    .to(".project-info", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.8,
      ease: "power3.Out",
    },"-=1")


    
    const skillsT2 = gsap.timeline();
    skillsT2
    
    .to(".skills-box", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.8,
      ease: "power3.Out",
    })
    
    const contactT3 = gsap.timeline();
    contactT3
    
    .to(".contact-section", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.8,
      ease: "power3.Out",
    },"-=0.12")

      .to(
    ".image-container",
    {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.5,
      ease: "power3.Out",
    },
    "-=0.6"
  )
    

}

