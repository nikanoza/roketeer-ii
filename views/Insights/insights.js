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
const devtalkTopic = document.querySelector(".text-area-one");

const firstQuestion = document.querySelector(".radio-form");
const submitPage = document.getElementById("submit-page");
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

textAreaOne.addEventListener("input", (e) => {
  info.devtalk_topic = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
});
if (info.devtalk_topic) {
  textAreaOne.value = info.devtalk_topic;
  container.style.display = "block";
}
textAreaTwo.addEventListener("input", (e) => {
  info.something_special = e.target.value;
  localStorage.setItem("info", JSON.stringify(info));
});

if (info.something_special) {
  textAreaTwo.value = info.something_special;
}

yesRadioButton.addEventListener("change", (e) => {
  if (yesRadioButton.checked) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }

  errorMsg.textContent = "";
  info.devtalk_topic = e.target.checked;
  info.will_organize_devtalk = true;
  localStorage.setItem("info", JSON.stringify(info));
});

noRadioButton.addEventListener("change", (e) => {
  localStorage.setItem("info", JSON.stringify(info));
  container.style.display = "none";
  errorMsg.textContent = "";
  container.style.display = "none";
  info.will_organize_devtalk = false;
});

if (info.will_organize_devtalk !== null) {
  yesRadioButton.checked = info.will_organize_devtalk;
  noRadioButton.checked = !info.will_organize_devtalk;
}

nextButton.addEventListener("click", () => {
  const textOne = textOneCheck();
  const textTwo = textTwoCheck();
  if (!yesRadioButton.checked && !noRadioButton.checked) {
    errorMsg.textContent = "*Please select an option";
    return;
  }
  if (yesRadioButton.checked && textOne && textTwo) {
    document.location.href = "../Submit/submit.html";
  }

  if (textTwo && noRadioButton.checked) {
    document.location.href = "../Submit/submit.html";
  }
});

function textOneCheck() {
  if (yesRadioButton.checked && textAreaOne.value === "") {
    errorTextAreaOne.textContent = "*Please express your thoughts";
    return false;
  }
  return true;
}

function textTwoCheck() {
  if (textAreaTwo.value === "") {
    errorTextAreaTwo.textContent = "*Please express your thoughts";
    return false;
  }
  return true;
}

submitPage.addEventListener("click", function () {
  const textOne = textOneCheck();
  const textTwo = textTwoCheck();

  if (yesRadioButton.checked && textOne && textTwo) {
    document.location.href = "../Submit/submit.html";
  }
  if (textTwo && noRadioButton.checked) {
    document.location.href = "../Submit/submit.html";
  }
});
