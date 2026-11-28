const toggleButton = document.querySelector("#toggle-button");
const moreContent = document.querySelector("#more-content");

toggleButton.addEventListener("click", function () {
  const isHidden = moreContent.hidden;

  moreContent.hidden = !isHidden;

  toggleButton.textContent = isHidden ? "Show Less" : "Show More";
});

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
  if (!contactForm.checkValidity()) {
    event.preventDefault();
    contactForm.reportValidity();
  }
});
