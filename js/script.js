const icon = document.querySelector(".accordion__icon");
const accordion = document.querySelector(".accordion");
// console.log(icon);

icon.addEventListener("click", function (e) {
  accordion.classList.toggle("open");
});
