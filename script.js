// // const scroll = new LocomotiveScroll({
// //   el: document.querySelector(".main"),
// //   smooth: true,
// // });


// Wait for DOM to fully load
window.addEventListener("load", () => {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"), // Scroll container
    smooth: true,                        // Enable smooth scrolling
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  // Tell ScrollTrigger to use Locomotive Scroll’s scroll position
  gsap.registerPlugin(ScrollTrigger);

  scroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
  });

  // Example GSAP animation (you can remove or customize this)
  // gsap.from(".hero-section .name", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.2,
  //   scrollTrigger: {
  //     trigger: ".hero-section .name",
  //     scroller: ".main",
  //     start: "top 80%",
  //     toggleActions: "play none none reverse",
  //   },
  // });

  // Refresh ScrollTrigger after everything is set up
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();
});




