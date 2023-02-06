const btn = document.querySelectorAll(".btn");
const pop = document.querySelector(".pop");
const popup = document.querySelector(".pop__up");
const popContent = document.querySelector(".pop__content");
const closeBtn = document.querySelector("#close");

for (const item of btn) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    pop.classList.add("active");
    pop.addEventListener("click", function () {
      pop.classList.remove("active");
    });
  });
}

popContent.addEventListener("click", function (e) {
  e.stopPropagation();
});
closeBtn.addEventListener("click", function () {
  pop.classList.remove("active");
});


const navNav=document.querySelector('.nav__nav')

