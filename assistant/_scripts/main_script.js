// Calls
const Body = document.body,
  hamburgerMenu = Body.querySelector(".navbar_hamburger"),
  darkLightBtn = Body.querySelector(".darkLightMode"),
  Links = Body.querySelectorAll(".navbar_item a")
NavBar = Body.querySelector("nav");


// Scrolling Functions
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    NavBar.classList.add("navbar_scrolled");
  } else {
    NavBar.classList.remove("navbar_scrolled");
  }
});
// Menu Toggle Function
hamburgerMenu.addEventListener("click", (e) => {
  Body.classList.toggle("Is_active");
});
Links.forEach(LKS => {
  LKS.addEventListener("click", (e) => {
    Body.classList.remove("Is_active");
  })
})
// Dark/Light Mode Functions
let darkModeLocal = localStorage.getItem("darkModeLocal");
const enableDarkMode = () => {
  Body.classList.add("darkMode");
  localStorage.setItem("darkModeLocal", "enabled");
}
const disableDarkMode = () => {
  Body.classList.remove("darkMode");
  localStorage.setItem("darkModeLocal", false);
}
if (darkModeLocal == "enabled") {
  enableDarkMode()
}
darkLightBtn.addEventListener("click", (e) => {
  darkModeLocal = localStorage.getItem("darkModeLocal")
  if (darkModeLocal !== "enabled") {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
})

// Gsap Animations Function
let tl = gsap.timeline();
// call to ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Gsap Functions
function animation() {
  // Set default Elements
  gsap.set(".About_text p, .About_text .Btn, #About h1, #About b, .text_Services h1, .text_Services p, .content_Services .cardBody, .WorkTitle h1, .WorkTitle b, .WorkTitle q, .WorkTitle p, .TestimonialsTitle h1, .TestimonialsTitle p, #Testimonials .cardBody,.ContactTitle h1, .ContactTitle p, .ContactInfo a", { y: 50, opacity: 0 });
  // TimeLine Functions
  tl.fromTo(
    ".navbar_container li, .navbar_brand",
    .9,
    {
      opacity: 0,
      y: -50,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "expo.inOut",
    }
  ).fromTo(
    ".darkLightMode",
    1,
    {
      opacity: 0,
      y: -50,
    },
    {
      y: 0,
      opacity: 1,
      ease: "expo.inOut",
    }, "-=.6"
  )

  // Auto Functions
  gsap.fromTo(
    "#Home span",
    1.5,
    {
      opacity: 0,
      y: 130,
    },
    {
      y: 0,
      opacity: .1,
      ease: "expo.inOut",
    }, "-=1.4"
  )
  gsap.fromTo(
    "#Home h1, #Home b, #Home p",
    1.5,
    {
      opacity: 0,
      y: 60,
    },
    {
      y: 0,
      stagger: 0.3,
      opacity: 1,
      ease: "expo.inOut",
    }, "-=1.1"
  )


  // Scroll To Action Functions

  gsap.to(" #About h1, #About h1 b", {
    scrollTrigger: {
      trigger: "#About h1, #About b",
      start: "top center",
      end: "100% center",
    },
    y: 0, opacity: 1, stagger: 0.2,
  })
  gsap.to(".About_text p, .About_text .Btn", {
    scrollTrigger: {
      trigger: ".About_text p, .About_text .Btn",
      start: "-16% center",
      end: "-20% center",
    },
    y: 0, opacity: 1, stagger: 0.2,
  })
  gsap.to(".Info_about .image .cover", 1.2, {
    scrollTrigger: {
      trigger: ".Info_about .image .cover",
      start: "top center",
      end: "-20% center",
    },
    x: "100%",
  })

  gsap.to(".text_Services h1, .text_Services p", {
    scrollTrigger: {
      trigger: ".text_Services h1",
      start: "top 70%",
      end: "top center",
    },
    y: 0, opacity: 1, stagger: 0.2,
  })
  gsap.to(".content_Services .cardBody", {
    scrollTrigger: {
      trigger: ".content_Services .cardBody",
      start: "-40% center",
      end: "-20% center",
    },
    y: 0, opacity: 1, stagger: 0.2,
  })
  gsap.to(".WorkTitle h1, .WorkTitle b, .WorkTitle q, .WorkTitle p", {
    scrollTrigger: {
      trigger: ".WorkTitle",
      start: "top center",
    },
    y: 0, opacity: 1, stagger: 0.2,
  })
  gsap.to(".TestimonialsTitle h1, .TestimonialsTitle p", {
    scrollTrigger: {
      trigger: ".TestimonialsTitle",
      start: "top center",
    },
    y: 0, opacity: 1, stagger: 0.3, ease: "expo.out",
  })
  gsap.to(".CardsContainer .cardBody", {
    scrollTrigger: {
      trigger: ".CardsContainer .cardBody",
      start: "top center",
    },
    y: 0, opacity: 1, stagger: 0.2, ease: "expo.out",
  })
  gsap.to(".ContactTitle h1, .ContactTitle p, .ContactInfo a", {
    scrollTrigger: {
      trigger: ".ContactTitle h1",
      start: "top 80%",
    },
    y: 0, opacity: 1, stagger: 0.2, ease: "expo.out",
  })



  // Sections Scroll to action
  gsap.to("#Home", {
    scrollTrigger: {
      trigger: "#Home main",
      start: "bottom 55%",
      end: "bottom 0%",
      scrub: 2,
    },
    y: '-5vw',
    opacity: 1
  })
  gsap.to("#About", {
    scrollTrigger: {
      trigger: "#About main",
      start: "bottom 35%",
      end: "70% 0%",
      scrub: 2,
    },
    y: '-5vw',
    opacity: 0
  })
  gsap.to("#Services", {
    scrollTrigger: {
      trigger: "#Services .content_Services",
      start: "bottom 35%",
      end: "70% 0%",
      scrub: 2,
    },
    y: '-5vw',
    opacity: 0
  })
  gsap.to("#Testimonials", {
    scrollTrigger: {
      trigger: "#Testimonials main:nth-child(2)",
      start: "bottom 35%",
      end: "70% 0%",
      scrub: 2,
    },
    y: '-5vw',
    opacity: 0
  })



  // scroll Anmation Function (Work Images)
  gsap.utils.toArray(".CardBody").forEach(box => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        end: "90% 10%",
        scrub: 3,
        onUpdate: () => box.classList.add("removed"),
      }
    });
    tl.fromTo(box,
      {
        opacity: 0,
        y: 30,
      },
      {
        y: -30,
        opacity: 1,
        stagger: 1, duration: 2,
        ease: "none",
      }).fromTo(box,
        {
          opacity: 1,
          y: -30,
        },
        {
          y: -60,
          opacity: 0,
          stagger: .1, duration: 2,
          ease: "none",
        })
  });
}
// ... existing code

// Lazy Loading Images with Blur Effect
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.onload = () => {
          img.classList.remove("blur");
        };
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    img.classList.add("blur");
    imageObserver.observe(img);
  });
});

// ... existing code
// callBack of Gsap Functions
animation()