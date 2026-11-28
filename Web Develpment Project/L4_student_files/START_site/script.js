const toggleButton = document.querySelector("#toggle-button");
const moreContent = document.querySelector("#more-content");

toggleButton.addEventListener("click", function () {
  const isHidden = moreContent.hidden;

  moreContent.hidden = !isHidden;

  toggleButton.textContent = isHidden ? "Show Less" : "Show More";
});



const contactForm = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Check name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.removeAttribute("aria-invalid");
  }

  // Check email
  if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.removeAttribute("aria-invalid");
  }

  // Check message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    messageInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else {
    messageError.textContent = "";
    messageInput.removeAttribute("aria-invalid");
  }

    if (!isValid) {
    contactForm.querySelector('[aria-invalid="true"]').focus();
  }
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    nameError.textContent = "";
    nameInput.removeAttribute("aria-invalid");
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
    emailInput.removeAttribute("aria-invalid");
  }
});

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim() !== "") {
    messageError.textContent = "";
    messageInput.removeAttribute("aria-invalid");
  }
});
