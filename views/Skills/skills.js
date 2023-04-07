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