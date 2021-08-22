const active = document.querySelector(".active");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelectorAll(".iphone");
const bars = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
const times = document.querySelector(".times");
const reviews = document.querySelectorAll(".reviews-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function next() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}
function prev() {
  images[index].classList.remove("active");
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add("active");
}
function showNav() {
  navbar.classList.add("show");
}
function closeNav() {
  navbar.classList.remove("show");
}
window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});
// media query to check
let media_query = "screen and (min-width:320px) and (max-width:860px)";

// matched or not
let matched = window.matchMedia(media_query).matches;
let int = null;

window.addEventListener("DOMContentLoaded", () => {
  if (matched) {
    int = setInterval(() => {
      next();
    }, 4000);
  }
});

let reviewImg = 0;
function nextReview() {
  reviews[reviewImg].classList.remove("show-review");
  reviewImg = (reviewImg + 1) % reviews.length;
  reviews[reviewImg].classList.add("show-review");
}
function prevReview() {
  reviews[reviewImg].classList.remove("show-review");
  reviewImg = (reviewImg - 1 + reviews.length) % reviews.length;
  reviews[reviewImg].classList.add("show-review");
}
nextBtn.addEventListener("click", nextReview);
prevBtn.addEventListener("click", prevReview);

bars.addEventListener("click", showNav);
times.addEventListener("click", closeNav);
right.addEventListener("click", next);
left.addEventListener("click", prev);
