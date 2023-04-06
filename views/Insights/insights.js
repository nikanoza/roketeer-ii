const yesRadioButton = document.querySelector("#yesRadioButton");
const noRadioButton = document.querySelector("#noRadioButton");
const errorMsg = document.querySelector("#error-msg");

const container = document.querySelector("#container");

const buttons = document.querySelectorAll(".navigation");

const form = document.querySelector("#formId");

yesRadioButton.addEventListener("change", () => {
  if (yesRadioButton.checked) {
    container.style.display = "block";
  } 
  else {
    container.style.display = "none";
  }
});

yesRadioButton.addEventListener("click", ()=>{
    errorMsg.textContent = "";
      
  })
  
  noRadioButton.addEventListener("click", ()=>{
    errorMsg.textContent = "";
    container.style.display = "none";
  })


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

