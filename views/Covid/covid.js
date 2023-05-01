const navigation = document.getElementById("button");
const workOption = document.getElementById("work");
const covidOption = document.getElementById("covid-contact");
const vaccinatedOption = document.getElementById("vaccinated");
const covidDate = document.getElementById("covid-date");
const vaccineDate = document.getElementById("vaccine-date");
const covid = document.getElementById("covid-input");
const vaccine = document.getElementById("vaccine-input");

const yesCovid = document.getElementById("covid_yes");
const noCovid = document.getElementById("covid_no");
const yesVaccine = document.getElementById("vaccine_yes");
const noVaccine = document.getElementById("vaccine_no");

const workRadioButtons = document.getElementsByName("work");
const covidContactRadioButtons = document.getElementsByName("covid");
const covidDateInput = document.getElementById("covid-input");
const vaccinatedRadioButtons = document.getElementsByName("vaccine");
const vaccineDateInput = document.getElementById("vaccine-input");

const insightsPage = document.getElementById("insights-page");
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
}

navigation.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.setItem("info", JSON.stringify(info));
});

insightsPage.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.setItem("info", JSON.stringify(info));
});

function getSelectedRadioButtonValue(radioButtons) {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }

  return null;
}

workOption.addEventListener("input", function (e) {
  let selected = document.querySelector('input[name="work"]:checked');
  if (selected) {
    workOption.classList.remove("error");
  } else {
    workOption.classList.add("error");
  }
  info.work_preference = getSelectedRadioButtonValue(workRadioButtons);
});

covidOption.addEventListener("input", function () {
  let selected = document.querySelector('input[name="covid"]:checked');
  if (selected) {
    covidOption.classList.remove("error");
  } else {
    covidOption.classList.add("error");
  }
  info.had_covid =
    getSelectedRadioButtonValue(covidContactRadioButtons) === "true";
});

vaccinatedOption.addEventListener("input", function () {
  let selected = document.querySelector('input[name="vaccine"]:checked');
  if (selected) {
    vaccinatedOption.classList.remove("error");
  } else {
    vaccinatedOption.classList.add("error");
  }
  info.vaccinated =
    getSelectedRadioButtonValue(vaccinatedRadioButtons) === "true";
});

navigation.addEventListener("click", function () {
  let selected = document.querySelector('input[name="work"]:checked');
  if (selected) {
    workOption.classList.remove("error");
  } else {
    workOption.classList.add("error");
  }
});

insightsPage.addEventListener("click", function () {
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

insightsPage.addEventListener("click", function () {
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
insightsPage.addEventListener("click", function () {
  let selected = document.querySelector('input[name="vaccine"]:checked');
  if (selected) {
    vaccinatedOption.classList.remove("error");
  } else {
    vaccinatedOption.classList.add("error");
  }
});

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
insightsPage.addEventListener("click", function () {
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

insightsPage.addEventListener("click", function () {
  if (vaccine.value) {
    vaccineDate.classList.remove("error-date");
  } else {
    vaccineDate.classList.add("error-date");
  }
});

covidDate.addEventListener("input", function () {
  info.had_covid_at = covidDateInput.value;
});

vaccineDate.addEventListener("input", function () {
  info.vaccinated_at = vaccineDateInput.value;
});

insightsPage.addEventListener("click", function () {
  let selectedWork = document.querySelector('input[name="work"]:checked');
  let selectedCovid = document.querySelector('input[name="covid"]:checked');
  let selectedVaccine = document.querySelector('input[name="vaccine"]:checked');
  let isValid = false;

  if (selectedWork && selectedCovid && selectedVaccine) {
    isValid = true;
  }

  if (isValid === true) {
    window.location.href = "../Insights/insights.html";
  }
});

navigation.addEventListener("click", function () {
  let selectedWork = document.querySelector('input[name="work"]:checked');
  let selectedCovid = document.querySelector('input[name="covid"]:checked');
  let selectedVaccine = document.querySelector('input[name="vaccine"]:checked');
  let isValid = false;

  if (selectedWork && selectedCovid && selectedVaccine) {
    isValid = true;
  }

  if (isValid === true) {
    window.location.href = "../Insights/insights.html";
  }
});

navigation.addEventListener("click", function () {
  let selectedCovid = document.querySelector('input[name="covid"]:checked');
  let selectedVaccine = document.querySelector('input[name="vaccine"]:checked');
  let isValid = false;

  if (selectedCovid.value === true && !covid.value) {
    if (selectedVaccine.value === true && !vaccine.value) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      window.location.href = "../Insights/insights.html";
    }
  }
});
