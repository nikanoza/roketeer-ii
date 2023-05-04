const applicationForm = document.querySelector(".application");
let isClicked = true;
let skillsArr = [];


let showApplicationsForm = function(){
    if(isClicked){
        applicationForm.style.display = "block";
        isClicked = false;
    }else{
        applicationForm.style.display = "none";
        isClicked = true;
    }
}

const getSklills = async () => {
    try {
        const response = await axios.get("https://bootcamp-2022.devtest.ge/api/skills");
        skillsArr = response.data;

    } catch (error) {
        
    }
}

getSklills();



const getData = async () => {
    try {
        const response = await axios.get("https://bootcamp-2022.devtest.ge/api/applications?token=0b42bbe9-eea4-4ea4-9a87-c60f2fb5218d");
        let mainData ="";

        response.data.map((value, index) => {
            let sliksData = "";

            value.skills.map((val)=> {
              
                let newEl = skillsArr.find((el)=> {
                    return val.id === el.id
                    
                })
                sliksData += `<div class="skils">
                <p>${newEl.title}</p>
                <p>years of experience:</p> 
                <p>${val.experience}</p>
               </div>`
            })
            mainData+=`
             <div class="aplication-forms">
            <div ${onclick='showApplicationsForm()'} class="form">
                <p>${index + 1}</p>
                <span>
                    <svg width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" fill="none" width="24" height="24"/>  
                        <g><path d="M7 10l5 5 5-5"/>
                        </g>
                        </svg>
                </span>
            </div>
            <div class="application">
<!-- section one -->
                <div class="section-one">
                    <div class="persoal-information">
                        <h2>Personal Information</h2>
                        <div class="name">
                            <p>First Name</p>
                            <p>${value.first_name}</p>
                        </div>
                        <div class="last-name">
                            <p>Last Name</p>
                            <p>${value.last_name}</p>
                        </div>
                        <div class="email">
                            <P>E Mail</P>
                            <P>${value.email}</P>
                        </div>
                        <div class="phone-number">
                            <P>Phone</P>
                            <P>${value.phone}</P>
                        </div>
                        
                    </div>
                    <div class="skilset">
                        <h2>Skillset</h2>
                        ${sliksData}
                    </div>
                </div>
                <div class="section-two">
                    <div class="covid-situation">
                  <div class="preference">
                    <form class="radio-button-wrapper" id="work">
                          <h2>Covid Situation</h2>
                        <p class="question">How would you prefer to work?</p>
                        <div>
                          <input type="radio" id="office" name="work" value="from_office" />
                          <label for="office">From Sairme Office</label>
                        </div>
                        <div>
                          <input type="radio" id="home" name="work" value="from_home" />
                          <label for="home">From Home</label>
                        </div>
                        <div>
                          <input type="radio" id="hybrid" name="work" value="hybrid" />
                          <label for="hybrid">Hybrid</label>
                        </div>
                      </form>
                  </div>
                  <form class="radio-button-wrapper" id="covid-contact">
                    <p class="question">Did you have covid 19? </p>
                    <div>
                      <input type="radio" id="covid_yes" name="covid" value="true" />
                      <label for="covid_yes">Yes</label>
                    </div>
                    <div>
                      <input type="radio" id="covid_no" name="covid" value="false" />
                      <label for="covid_no">No</label>
                    </div>
                  </form>
            <div class="radio-button-wrapper" id="covid-date">
                <p class="question">When did you have covid?</p>
                <input type="date" placeholder="Date" id="covid-input" />
            </div>
            <form class="radio-button-wrapper" id="vaccinated">
                <p class="question">Have you been vaccinated?</p>
                <div>
                  <input type="radio" id="vaccine_yes" name="vaccine" value="true" />
                  <label for="vaccine_yes">Yes</label>
                </div>
                <div>
                  <input type="radio" id="vaccine_no" name="vaccine" value="false" />
                  <label for="vaccine_no">No</label>
                </div>
              </form>
              <div clas="radio-button-wrapper" id="vaccine-date">
                <p class="question">When did you get your last covid vaccine?</p>
                <input type="date" placeholder="Date" id="vaccine-input" />
              </div>
             </div>
             <div class="insights">
                <div class="radio-form">
                    <h2>Insigts</h2>
              <p class="wrap-p">Would you attend Devtalks and maybe also organize your own?</p>
              <input
                type="radio"
                name="will_organize_devtalk"
                id="yesRadioButton"
                value="yes"
              />
              <label for="yesRadioButton">Yes</label><br />
              <input
                type="radio"
                name="will_organize_devtalk"
                id="noRadioButton"
                value="no"
              />
              <label for="noRadioButton">No</label><br />
              <p class="error" id="error-msg"></p>
            </div>
            <div class="container" id="container" style="display: none">
                <div class="text-area-one">
                  <p>What would you speak about at Devtalk?</p>
                  <textarea
                  name="text-area-two"
                  id="comentSectionTwo"
                  cols="65"
                  rows="8"
                  placeholder="I..."
                ></textarea>
                  <p class="text-area-one-error"></p>
                </div>
              </div>
              <div class="text-area-two">
                <p>What would you speak about at Devtalk?</p>
                <textarea
                  name="text-area-two"
                  id="comentSectionTwo"
                  cols="50"
                  rows="8"
                  placeholder="I..."
                ></textarea>
                <p class="text-area-two-error"></p>
              </div>
              <div class="text-area-two">
                <p>Tell us something special</p>
                <textarea
                  name="text-area-two"
                  id="comentSectionTwo"
                  cols="50"
                  rows="8"
                  placeholder="I..."
                ></textarea>
                <p class="text-area-two-error"></p>
              </div>
             </div>
            </div>
            </div>
        </div>`
        })
        document.querySelector(".main-container").innerHTML=mainData;

        console.log(response.data);
    } catch (error) {
        
    }
}

getData();

