const skillsDiv = document.querySelector(".userSkills");
const select = document.getElementById("skills");
let skillError = document.getElementById("skillError");
let inputError = document.getElementById("inputError");

const userSkills = [];
let skills = [];

async function getSkills() {
  const response = await axios.get(
    "https://bootcamp-2022.devtest.ge/api/skills"
  );
  skills = response.data;
  const options = skills.map(
    (skills) =>
      `<option id="${skills.id}" "${skills.title}"value="${skills.title}">${skills.title}</option>`
  );
  select.innerHTML += options.join("Skills");
}
getSkills();
function addSkill() {
    const skillId = parseInt(select.options[select.selectedIndex].id);
    const existingSkill = userSkills.find((skill) => skill.id === skillId);
    const input = document.getElementById("numberInput");
    const inputValue = input.value;
    if (existingSkill) {
      skillError.style.marginTop = "-22px"
      skillError.style.marginBottom ="15px"
      skillError.innerHTML = "Please select another skill";
    }
    else if (select.value == "") {
      skillError.style.marginTop = "-22px"
      skillError.style.marginBottom ="15px"
      skillError.innerHTML = "Please select skill";
    }else{
      skillError.innerHTML = "";
      skillError.style.marginTop = "0"
      skillError.style.marginBottom ="0"
    }
    if (input.value < 1 ) {
      inputError.style.marginTop = "-22px"
      inputError.style.marginBottom ="15px"
      inputError.innerHTML = "Experience must be greater than 0";
    }else{
      inputError.innerHTML = "";
      inputError.style.marginTop = "0"
      inputError.style.marginBottom ="0"
    }
    if(!existingSkill && !(select.value ==="") && input.value > 0) {
      skillError.innerHTML = "";
      skillError.style.marginTop = "0"
      skillError.style.marginBottom ="0"
      inputError.innerHTML = "";
      inputError.style.marginTop = "0"
      inputError.style.marginBottom ="0"
      userSkills.push({
        id: skillId,
        experience: parseInt(inputValue),
      });
      displayItems();
    }
  }