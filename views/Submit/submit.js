submitButton = document.querySelector(".submitButton");

async function submitData() {
  const info = JSON.parse(localStorage.getItem("info"));
  if (!info.had_covid_at) {
    delete info.had_covid_at;
  }

  if (!info.vaccinated_at) {
    delete info.vaccinated_at;
  }

  info.will_organize_devtalk = true;
  info.devtalk_topic = "true";
  info.token = "0b42bbe9-eea4-4ea4-9a87-c60f2fb5218d";
  console.log(info);
  const response = await fetch(
    "https://bootcamp-2022.devtest.ge/api/application",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(info),
    }
  );
  console.log(response);
  localStorage.clear();

  document.querySelector(".main").classList.add("hidde");
  document.querySelector(".thanks").classList.remove("hidde");
  setTimeout(function () {
    window.location.href = "../../index.html";
  }, 3000);
}
