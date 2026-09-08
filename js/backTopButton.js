const header = document.getElementById("selMenu");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (header.getBoundingClientRect().bottom < 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});