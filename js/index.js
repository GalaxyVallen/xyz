//   const images = ["C:\Users\USER\Pictures\Saved Wall\random4.jpg", "C:\Users\USER\Pictures\Saved Wall\as.jpg", "C:\Users\USER\Pictures\Saved Wall\bocchi.jpg", "C:\Users\USER\Pictures\Saved Wall\random4.jpg"];
const images = ["image 1.jpg", "image 2.jpg", "image 3.jpg", "image 4.jpg"];
let currentImageIndex = 0;

const carousel = document.querySelector("#carousel");
const slides = carousel.querySelectorAll(".slide");

slides[currentImageIndex].classList.add("fade-in");

setInterval(() => {
  slides[currentImageIndex].classList.remove("fade-in");

  currentImageIndex = (currentImageIndex + 1) % images.length;

  slides[currentImageIndex].classList.add("fade-in");
}, 4000);