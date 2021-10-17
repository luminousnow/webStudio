const filter = document.querySelector(".filter");
const portfolioList = document.querySelectorAll(".portfolio__list .card");

filter.addEventListener("click", filtration);

function filtration(e) {
  const isButonPressed = e.target.closest(".filter__item");

  if (isButonPressed) {
    const filterButtonPressed = e.target.textContent;
    const filterResetButtonPressed =
      document.querySelector(".filter__button").textContent;

    portfolioList.forEach((el) => {
      const kindeText = el.querySelector(".card__kinde").textContent;
      const portfolioElementStyle = el.classList;

      if (
        filterButtonPressed === filterResetButtonPressed ||
        filterButtonPressed === kindeText
      ) {
        portfolioElementStyle.remove("card--hidden");
      } else {
        portfolioElementStyle.add("card--hidden");
      }
    });
  }
}
