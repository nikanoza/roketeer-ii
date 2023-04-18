const yesRadioButton = document.querySelector("#yesRadioButton");
const noRadioButton = document.querySelector("#noRadioButton");
const errorMsg = document.querySelector("#error-msg");
const errorTextAreaOne = document.querySelector(".text-area-one-error");
const errorTextAreaTwo = document.querySelector(".text-area-two-error");

const nextButton = document.querySelector(".next-btn");
const container = document.querySelector("#container");
const buttons = document.querySelectorAll(".navigation");
const form = document.querySelector("#formId");

const textAreaOne = document.querySelector("#comentSectionOne");
const textAreaTwo = document.querySelector("#comentSectionTwo");

let personalData = {
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

const data = localStorage.getItem("personalData");
if (data) {
  personalData = JSON.parse(data);
  console.log(personalData);
}

textAreaOne.addEventListener("click", (e) => {
  textAreaOne.textContent = "";
  personalData.devtalk_topic = e.target.value;
  localStorage.setItem("personalData", JSON.stringify(personalData));
});

textAreaTwo.addEventListener("click", (e) => {
  textAreaTwo.textContent = "";
  personalData.something_special = e.target.value;
  localStorage.setItem("personalData", JSON.stringify(personalData));
});

yesRadioButton.addEventListener("change", (e) => {
  if (yesRadioButton.checked) {
    container.style.display = "block";
  } else {
    personalData.devtalk_topic = e.target.checked;
  }
});

yesRadioButton.addEventListener("click", (e) => {
  errorMsg.textContent = "";
  personalData.devtalk_topic = e.target.checked;
  localStorage.setItem("personalData", JSON.stringify(personalData));
});

noRadioButton.addEventListener("click", (e) => {
  localStorage.setItem("personalData", JSON.stringify(personalData));
  container.style.display = "none";

  errorMsg.textContent = "";
  container.style.display = "none";
});

function validateForm(event) {
  event.preventDefault();
  console.log(form.yesRadioButton.checked);
  console.log(form.noRadioButton.checked);
  const radios = document.getElementsByName("will_organize_devtalk");
  let checked = false;

  for (const radio of radios) {
    if (radio.checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    errorMsg.textContent = "Please select an option";
    return false;
  }

  return true;
}

nextButton.addEventListener("click", () => {
  const textOne = textOneCheck();
  const textTwo = textTwoCheck();

  if (yesRadioButton.checked && textOne && textTwo) {
    document.location.href = "../Submit/submit.html";
  }
  if (noRadioButton.checked) {
    document.location.href = "../Submit/submit.html";
  }
});

function textOneCheck() {
  if (textAreaOne === "") {
    errorTextAreaOne.textContent = "Please express yout thoughts";
    return false;
  }
  return true;
}

function textTwoCheck() {
  if (textAreaTwo === "") {
    errorTextAreaTwo.textContent = "Please express yout thoughts";
    return false;
  }
  return true;
}
