const navigation = document.getElementById("button");
const workOption = document.getElementById("work");
const covidOption = document.getElementById("covid-contact");
const vaccinatedOption = document.getElementById("vaccinated");
const covidDate = document.getElementById("covid-date");
const vaccineDate = document.getElementById("vaccine-date");
const covid = document.getElementById("covid-input")
const vaccine = document.getElementById('vaccine-input')

navigation.addEventListener("click", function(){
    let selected = document.querySelector(
    'input[name="work"]:checked');
    if (selected) {
        workOption.classList.remove("error");}
                    else{
                        workOption.classList.add("error");
                      } 
   
 })

navigation.addEventListener("click", function(){
    let selected = document.querySelector(
    'input[name="covid"]:checked');
    if (selected) {
        covidOption.classList.remove("error");}
                    else{
                        covidOption.classList.add("error");
                      } 
   
 })


navigation.addEventListener("click", function(){
    let selected = document.querySelector(
    'input[name="vaccine"]:checked');
    if (selected) {
        vaccinatedOption.classList.remove("error");}
                    else{
                        vaccinatedOption.classList.add("error");
                      } 
   
 })

 const yesCovid = document.getElementById('covid_yes');
 const noCovid = document.getElementById('covid_no');
 const yesVaccine = document.getElementById('vaccine_yes');
 const noVaccine = document.getElementById('vaccine_no');

 yesCovid.addEventListener('change', () => {
  if (yesCovid.checked) {
    covidDate.style.display = 'block';
  } else {
    covidDate.style.display = 'none';
  }
});

noCovid.addEventListener('change', () => {
  if (noCovid.checked) {
    covidDate.style.display = 'none';
  } else {
    covidDate.style.display = 'block';
  }
});

navigation.addEventListener("click", function () {

  if (covid.value) {
    covidDate.classList.remove("error-date");
  } else {
    covidDate.classList.add("error-date");
  }
});

yesVaccine.addEventListener('change', () => {
  if (yesVaccine.checked) {
    vaccineDate.style.display = 'block';
  } else {
    vaccineDate.style.display = 'none';
  }
});

noVaccine.addEventListener('change', () => {
  if (noVaccine.checked) {
    vaccineDate.style.display = 'none';
  } else {
    vaccineDate.style.display = 'block';
  }
});

navigation.addEventListener("click", function () {
  if (vaccine.value) {
    vaccineDate.classList.remove("error-date");
  } else {
    vaccineDate.classList.add("error-date");
  }
});
