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
function remove(id) {
  const skillIndex = userSkills.findIndex((skill) => skill.id === id);
  userSkills.splice(skillIndex, 1);
  displayItems();
}
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
  function displayItems() {
    skillsDiv.innerHTML = "";
  
    for (let i = 0; i < userSkills.length; i++) {
      const skillId = userSkills[i].id;
      const skillExperience = userSkills[i].experience;
  
      const skill = skills.find((skill) => skill.id === skillId);
  
      const createSkillDiv = document.createElement("div");
      createSkillDiv.classList.add("userSkill");
      skillsDiv.appendChild(createSkillDiv);
      const createP = document.createElement("p");
      createP.textContent = skill.title;
      createSkillDiv.appendChild(createP);
      const createP2 = document.createElement("p");
      createP2.textContent = "Years of Experience: " + skillExperience;
      createSkillDiv.appendChild(createP2);
      const createImg = document.createElement("img");
      createImg.setAttribute("src", "../../assets/Remove.png");
      createImg.addEventListener("click", function () {
        remove(skill.id);
      });
      createSkillDiv.appendChild(createImg);
    }
  }