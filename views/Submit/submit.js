submitButton = document.querySelector(".submitButton");

async function submitData() {
  const info = JSON.parse(localStorage.getItem("info"));
  if (!info.had_covid_at) {
    delete info.had_covid_at;
  }

  if (!info.vaccinated_at) {
    delete info.vaccinated_at;
  }

  if (!info.devtalk_topic) {
    delete info.devtalk_topic;
  }
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

  const data = await response.json();
  document.querySelector(".main").classList.add("hidde");
  document.querySelector(".thanks").classList.remove("hidde");
  setTimeout(function () {
    window.location.href = "../../index.html";
  }, 3000);
}
