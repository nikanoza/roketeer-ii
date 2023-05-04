const applicationForm = document.querySelector(".application");
let isClicked = true;

// const  getApplications = async () => {
//     try {
//         const response = await fetch(
//             "https://bootcamp-2022.devtest.ge/api/applications?token=0b42bbe9-eea4-4ea4-9a87-c60f2fb5218d",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 accept: "application/json",
//               },
//               body: JSON.stringify(info),
//             }
//           );
//           console.log(response);
//         } catch (error) {
        
//         }
// }

// async function main(){
//     const response = await axios({
//         method: "GET",
//         url: "https://bootcamp-2022.devtest.ge/api/applications?token=0b42bbe9-eea4-4ea4-9a87-c60f2fb5218d"
//     });
//     console.log(response)
// }


const getData = async () => {
    try {
        const response = await axios.get("https://bootcamp-2022.devtest.ge/api/applications?token=0b42bbe9-eea4-4ea4-9a87-c60f2fb5218d");

        console.log(response.data[0])
    } catch (error) {
        
    }
}

getData();

let showApplicationsForm = function(){
    if(isClicked){
        applicationForm.style.display = "block";
        isClicked = false;
    }else{
        applicationForm.style.display = "none";
        isClicked = true;
    }
}

