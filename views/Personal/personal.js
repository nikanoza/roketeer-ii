const errorName = document.querySelector("#errorName");
const errorSurname = document.querySelector("#errorSurname");
const errorEmail = document.querySelector("#errorEmail");
const errorPhoneNumber = document.querySelector("#errorNumber");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");

const nextPage = document.getElementById("next");
const skillsPage = document.getElementById("skills-page");
const buttons = document.querySelectorAll(".navigation");
let submit = false;

let info = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  skills: [],
  work_preference: "",
  had_covid: null,
  had_covid_at: "",
  vaccinated: null,
  vaccinated_at: "",
  will_organize_devtalk: null,
  devtalk_topic: "",
  something_special: "",
};

const data = localStorage.getItem("info");
if (data) {
  info = JSON.parse(data);
  console.log(info);
}

firstName.addEventListener("input", (e) => {
  info.first_name = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
  if (submit) {
    nameCheck();
  }
});
if (info.first_name) {
  firstName.value = info.first_name;
}
lastName.addEventListener("input", (e) => {
  info.last_name = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
  if (submit) {
    surnameCheck();
  }
});

if (info.last_name) {
  lastName.value = info.last_name;
}

email.addEventListener("input", (e) => {
  info.email = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
  if (submit) {
    emailCheck();
  }
});

if (info.email) {
  email.value = info.email;
}

phoneNumber.addEventListener("input", (e) => {
  info.phone = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
  if (submit) {
    phoneNumCheck();
  }
});

if (info.phone) {
  phoneNumber.value = info.phone;
}
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

nextPage.addEventListener("click", () => {
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

skillsPage.addEventListener("click", () => {
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
