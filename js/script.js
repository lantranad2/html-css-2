const icon = document.querySelector(".accordion__icon");
const accordion = document.querySelector(".accordion");
const dots = document.querySelector(".carousel__dots");
// console.log(icon);

icon.addEventListener("click", function (e) {
  accordion.classList.toggle("open");
});

dots.addEventListener("click", function (e) {
  console.log(e.target);
});
