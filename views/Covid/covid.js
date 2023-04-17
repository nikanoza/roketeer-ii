const navigation = document.getElementById("button");
const workOption = document.getElementById("work");
const covidOption = document.getElementById("covid-contact");
const vaccinatedOption = document.getElementById("vaccinated");
const covidDate = document.getElementById("covid-date");
const vaccineDate = document.getElementById("vaccine-date");
const covid = document.getElementById("covid-input");
const vaccine = document.getElementById("vaccine-input");

workOption.addEventListener("click", function () {
  let selected = document.querySelector('input[name="work"]:checked');
  if (selected) {
    workOption.classList.remove("error");
  } else {
    workOption.classList.add("error");
  }
});

covidOption.addEventListener("click", function () {
  let selected = document.querySelector('input[name="covid"]:checked');
  if (selected) {
    covidOption.classList.remove("error");
  } else {
    covidOption.classList.add("error");
  }
});

vaccinatedOption.addEventListener("click", function () {
  let selected = document.querySelector('input[name="vaccine"]:checked');
  if (selected) {
    vaccinatedOption.classList.remove("error");
  } else {
    vaccinatedOption.classList.add("error");
  }
});

navigation.addEventListener("click", function () {
  let selected = document.querySelector('input[name="work"]:checked');
  if (selected) {
    workOption.classList.remove("error");
  } else {
    workOption.classList.add("error");
  }
});

navigation.addEventListener("click", function () {
  let selected = document.querySelector('input[name="covid"]:checked');
  if (selected) {
    covidOption.classList.remove("error");
  } else {
    covidOption.classList.add("error");
  }
});

navigation.addEventListener("click", function () {
  let selected = document.querySelector('input[name="vaccine"]:checked');
  if (selected) {
    vaccinatedOption.classList.remove("error");
  } else {
    vaccinatedOption.classList.add("error");
  }
});

const yesCovid = document.getElementById("covid_yes");
const noCovid = document.getElementById("covid_no");
const yesVaccine = document.getElementById("vaccine_yes");
const noVaccine = document.getElementById("vaccine_no");

yesCovid.addEventListener("change", () => {
  if (yesCovid.checked) {
    covidDate.style.display = "block";
    covidDate.classList.remove("error-date");
  } else {
    covidDate.style.display = "none";
  }
});

noCovid.addEventListener("change", () => {
  if (noCovid.checked) {
    covidDate.style.display = "none";
  } else {
    covidDate.style.display = "block";
  }
});

navigation.addEventListener("click", function () {
  if (covid.value) {
    covidDate.classList.remove("error-date");
  } else {
    covidDate.classList.add("error-date");
  }
});

yesVaccine.addEventListener("change", () => {
  if (yesVaccine.checked) {
    vaccineDate.style.display = "block";
    vaccineDate.classList.remove("error-date");
  } else {
    vaccineDate.style.display = "none";
  }
});

noVaccine.addEventListener("change", () => {
  if (noVaccine.checked) {
    vaccineDate.style.display = "none";
  } else {
    vaccineDate.style.display = "block";
  }
});

navigation.addEventListener("click", function () {
  if (vaccine.value) {
    vaccineDate.classList.remove("error-date");
  } else {
    vaccineDate.classList.add("error-date");
  }
});

const workRadioButtons = document.getElementsByName("work");
const covidContactRadioButtons = document.getElementsByName("covid");
const covidDateInput = document.getElementById("covid-input");
const vaccinatedRadioButtons = document.getElementsByName("vaccine");
const vaccineDateInput = document.getElementById("vaccine-input");

navigation.addEventListener("click", (event) => {
  event.preventDefault();

  const formValues = {
    work_preference: getSelectedRadioButtonValue(workRadioButtons),
    had_covid: getSelectedRadioButtonValue(covidContactRadioButtons),
    had_covid_at: covidDateInput.value,
    vaccinated: getSelectedRadioButtonValue(vaccinatedRadioButtons),
    vaccinated_at: vaccineDateInput.value,
  };

const data = localStorage.getItem("formValues")

if(data){
  formValues = JSON.parse(data)

}
localStorage.setItem("formValues", JSON.stringify(formValues))


  console.log(formValues);
});

function getSelectedRadioButtonValue(radioButtons) {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }

  return null;
}
