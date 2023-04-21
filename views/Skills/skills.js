const skillsDiv = document.querySelector(".userSkills");
const select = document.getElementById("skills");
let skillError = document.getElementById("skillError");
let inputError = document.getElementById("inputError");

let skills = [];

let info = {
  token: "",
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
  something_special: ""
}

const data = localStorage.getItem("info");

if (data){
  info = JSON.parse(data);
}

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
  const skillIndex = info.skills.findIndex((skill) => skill.id === id);
  info.skills.splice(skillIndex, 1);
  displayItems();
  localStorage.setItem("info", JSON.stringify(info));
}

function addSkill() {
    const skillId = parseInt(select.options[select.selectedIndex].id);
    const existingSkill = info.skills.find((skill) => skill.id === skillId);
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
      info.skills = [...info.skills, {id: skillId, experience:inputValue}];
      localStorage.setItem("info",JSON.stringify(info))
      displayItems();
    }
  }
  function displayItems() {
    skillsDiv.innerHTML = "";
  
    for (let i = 0; i < info.skills.length; i++) {
      const skillId = info.skills[i].id;
      const skillExperience = info.skills[i].experience;
  
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
 