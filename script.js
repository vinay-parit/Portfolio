// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });


// const moon = document.querySelector(".moon");
// const sun = document.querySelector(".sun");
// const root = document.documentElement;

// moon.addEventListener("click", () => {
//   // Switch to light mode
//   root.style.setProperty("--white", "#000000"); // main text to black
//   root.style.setProperty("--black", "#ffffff"); // header background white
//   root.style.setProperty("--body-color", "#ffffff"); // body white

//   document.querySelector("body").style.color = "#000000"; // all text black

//   // Show sun icon instead of moon
//   moon.querySelector("svg").style.display = "none";
//   sun.querySelector("svg").style.display = "block";

//   // Add box shadow to main image
//   document.querySelector(".image img").style.boxShadow =
//     "0 0 20px rgba(255, 255, 255, 0.3), 0 0 20px rgba(250, 250, 250, 0.3) inset";
// });

// sun.addEventListener("click", () => {
//   // Switch back to dark mode
//   root.style.setProperty("--white", "#ffffff"); // text white again
//   root.style.setProperty("--black", "#000000"); // header dark
//   root.style.setProperty("--body-color", "#111010"); // body dark

//   document.querySelector("body").style.color = "#ffffff"; // text white again

//   // Swap icons again
//   sun.querySelector("svg").style.display = "none";
//   moon.querySelector("svg").style.display = "block";

//   // Remove box shadow from image
//   document.querySelector(".image img").style.boxShadow = "none";
// });



// const moon = document.querySelector(".moon");
// const sun = document.querySelector(".sun");
// const root = document.documentElement;

// moon.addEventListener("click", () => {
//   // Switch to light mode
//   root.style.setProperty("--white", "#000000"); // main text black
//   root.style.setProperty("--black", "#ffffff"); // header white
//   root.style.setProperty("--body-color", "#ffffff"); // body white

//   document.querySelector("body").style.color = "#000000"; // text color black

//   // Header white background
//   document.querySelector("header").style.backgroundColor = "#ffffff";

//   // Middle div white but keep pattern visible
//   const middle = document.querySelector(".middle");
//   middle.style.backgroundColor = "#ffffff";
//   middle.style.backgroundImage = `
//     repeating-radial-gradient(circle at 0 0, transparent 0, #eaeaea 5px),
//     repeating-linear-gradient(#f5f5f555, #f0f0f0)
//   `;

//   // Show sun icon instead of moon
//   moon.querySelector("svg").style.display = "none";
//   sun.querySelector("svg").style.display = "block";

//   // Box shadow to top image
//   const topImage = document.querySelector(".image img");
//   topImage.style.boxShadow = "0 0 25px rgba(0,0,0,0.3)";

//   // Add box-shadow to all certificate images
//   const certImages = document.querySelectorAll(".certificates img");
//   certImages.forEach((img) => {
//     img.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
//   });
// });

// sun.addEventListener("click", () => {
//   // Switch back to dark mode
//   root.style.setProperty("--white", "#ffffff"); // text white
//   root.style.setProperty("--black", "#000000"); // header black
//   root.style.setProperty("--body-color", "#111010"); // dark body

//   document.querySelector("body").style.color = "#ffffff"; // text white

//   // Header dark again
//   document.querySelector("header").style.backgroundColor = "#000000";

//   // Middle div back to original dark theme pattern
//   const middle = document.querySelector(".middle");
//   middle.style.backgroundColor = "#2e2d2d";
//   middle.style.backgroundImage = `
//     repeating-radial-gradient(circle at 0 0, transparent 0, #111010 5px),
//     repeating-linear-gradient(#08080855, #050505)
//   `;

//   // Swap icons again
//   sun.querySelector("svg").style.display = "none";
//   moon.querySelector("svg").style.display = "block";

//   // Remove shadows
//   const topImage = document.querySelector(".image img");
//   topImage.style.boxShadow = "none";

//   const certImages = document.querySelectorAll(".certificates img");
//   certImages.forEach((img) => {
//     img.style.boxShadow = "none";
//   });
// });


const themeToggle = document.querySelector(".them");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const root = document.documentElement;

let isLightMode = false;

themeToggle.addEventListener("click", () => {
  if (!isLightMode) {
    // Switch to light mode
    root.style.setProperty("--white", "#000000"); // main text black
    root.style.setProperty("--black", "#ffffff"); // header white
    root.style.setProperty("--body-color", "#ffffff"); // body white

    document.querySelector("body").style.color = "#000000";

    // Header white
    document.querySelector("header").style.backgroundColor = "#ffffff";

    // Middle div white but keep pattern visible
    const middle = document.querySelector(".middle");
    middle.style.backgroundColor = "#ffffff";
    middle.style.backgroundImage = `
      repeating-radial-gradient(circle at 0 0, transparent 0, #eaeaea 5px),
      repeating-linear-gradient(#f5f5f555, #f0f0f0)
    `;

    // Show sun icon instead of moon
    moon.querySelector("svg").style.display = "none";
    sun.querySelector("svg").style.display = "block";

    // Add shadow to top image
    const topImage = document.querySelector(".image img");
    topImage.style.boxShadow = "0 0 25px rgba(0,0,0,0.3)";

    // Add shadow to certificate images
    const certImages = document.querySelectorAll(".certificates img");
    certImages.forEach((img) => {
      img.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    });

    isLightMode = true;
  } else {
    // Switch back to dark mode
    root.style.setProperty("--white", "#ffffff");
    root.style.setProperty("--black", "#000000");
    root.style.setProperty("--body-color", "#111010");

    document.querySelector("body").style.color = "#ffffff";

    document.querySelector("header").style.backgroundColor = "#000000";

    const middle = document.querySelector(".middle");
    middle.style.backgroundColor = "#2e2d2d";
    middle.style.backgroundImage = `
      repeating-radial-gradient(circle at 0 0, transparent 0, #111010 5px),
      repeating-linear-gradient(#08080855, #050505)
    `;

    sun.querySelector("svg").style.display = "none";
    moon.querySelector("svg").style.display = "block";

    const topImage = document.querySelector(".image img");
    topImage.style.boxShadow = "none";

    const certImages = document.querySelectorAll(".certificates img");
    certImages.forEach((img) => {
      img.style.boxShadow = "none";
    });

    isLightMode = false;
  }
});
