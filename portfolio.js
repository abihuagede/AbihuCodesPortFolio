document.querySelector(".logo").textContent = "<Abihu></Code>";

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const ul = document.querySelector("ul");
  ul.style.display = ul.style.display === "block" ? "none" : "block";
  ul.style.top = "50px";

  const ulparent = document.querySelector(".ulparent");
});

const chat = document.querySelector(".iconWa");
chat.addEventListener("click", (even) => {
  even.preventDefault();
  const formParent = document.querySelector(".formParent");
  formParent.style.display =
    formParent.style.display === "block" ? "none" : "block";
});

let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");
const items = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  if (index < 0) {
    slideIndex = items.length - 1;
  } else if (index >= items.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}
function openCV() {
  window.open("abihuagede.pdf", "_blank");
}
