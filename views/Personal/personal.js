const errorName = document.querySelector("#errorName");
const errorSurname = document.querySelector("#errorSurname");
const errorEmail = document.querySelector("#errorEmail");
const errorPhoneNumber = document.querySelector("#errorNumber");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");

const buttons = document.querySelectorAll(".navigation");
let submit = false;

let personalData = {
  "token": "89nOpas|asdanjjh^&as",
  "first_name": "gela",
  "last_name": "gelashvili",
  "email": "gelashvili@gela.ge",
  "phone": "+995591933382",
}

firstName.addEventListener("input", () => {
  if (submit) {
    nameCheck();
  }
});
lastName.addEventListener("input", () => {
  if (submit) {
    surnameCheck();
  }
});

email.addEventListener("input", () => {
  if (submit) {
    emailCheck();
  }
});

phoneNumber.addEventListener("input", () => {
  if (submit) {
    phoneNumCheck();
  }
});

const nameCheck = () => {
  if (firstName.value.trim() === "") {
    errorName.textContent = "* First name is required";
    return false;
  }
  if (!(firstName.value.trim().length > 1)) {
    errorName.textContent = "* Should contain at least two characters";
    return false;
  }
  errorName.textContent = "";
  return true;
};

const surnameCheck = () => {
  if (lastName.value.trim() === "") {
    errorSurname.textContent =
      "* last name should include 3 or more characters";
    return false;
  }
  if (!(lastName.value.trim().length > 1)) {
    errorSurname.textContent = "* Should contain at least two characters";
    return false;
  }
  errorSurname.textContent = "";
  return true;
};

const emailCheck = () => {
  if (email.value.trim() === "") {
    errorEmail.textContent = "* Email is required";
    return false;
  }
  if (!email.value.trim().includes("@") && !email.value.trim().includes(".")) {
    errorEmail.textContent = "* Should meet emil requirements";
    return false;
  }
  errorEmail.textContent = "";
  return true;
};

const phoneNumCheck = () => {
  let phoneNumValue = phoneNumber.value;

  if (phoneNumValue.trim() === "") {
    errorPhoneNumber.textContent = "* Phone number is required";
    return false;
  }
  if (
    !phoneNumValue.trim().includes("+") &&
    !phoneNumValue.trim().includes("995")
  ) {
    errorPhoneNumber.textContent = "* Should start with +995";
    return false;
  }

  if (phoneNumValue.trim().length !== 12) {
    errorPhoneNumber.textContent = "* Must match georgian phone number";
    return false;
  }
  errorPhoneNumber.textContent = "";
  return true;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!submit) {
      submit = true;
    }
    const name = nameCheck();
    const surname = surnameCheck();
    const email = emailCheck();
    const phoneNumber = phoneNumCheck();
    if (name && surname && email && phoneNumber) {
      document.location.href = "../Skills/skills.html";
    }
  });
});
