const filter = document.querySelector(".filter");
const portfolioList = document.querySelector(".portfolio__list");

filter.addEventListener("click", (e) => console.log(e.target));

function getFilterButton(e) {
  if(e.target.closest(".filter__item"))
}