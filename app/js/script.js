const getStartedBtn = document.querySelector("#get-started");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

getStartedBtn.addEventListener("click",(e) => {
    
    let data = email.value;

    if(!data.includes("@", 0) || data == "" || data == " ") {
        e.preventDefault();
        error.classList.add("validate");
        email.value = "";
    } else {
        error.classList.remove("validate");
        email.value = "";
    }
})