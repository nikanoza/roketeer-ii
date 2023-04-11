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

let insightsData = {
  will_organize_devtalk: true,
  devtalk_topic: "I would ...",
  something_special: "I am special!",
};

textAreaOne.addEventListener("click", () => {
  textAreaOne.textContent = "";
});
textAreaTwo.addEventListener("click", () => {
  textAreaTwo.textContent = "";
});

yesRadioButton.addEventListener("change", () => {
  if (yesRadioButton.checked) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
});

yesRadioButton.addEventListener("click", () => {
  errorMsg.textContent = "";
});

noRadioButton.addEventListener("click", () => {
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
