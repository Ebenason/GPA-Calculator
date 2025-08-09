let body = document.querySelector("body");
let addbtn = document.querySelector(".addbtn");
let rmbtn = document.querySelector(".rmbtn");
let calcbtn = document.querySelector(".calculate");
let subcount = 1;

addbtn.addEventListener("click", () => {
    let inputs = document.getElementsByClassName("inputs")[0];

    if (subcount >= 9) {
        alert("You cannot add more than 7 subjects!");
        return;
    }
    subcount++;
     let heading = document.createElement("h4")
     heading.textContent = "subject " +subcount;
     inputs.appendChild(heading)

    let creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.className = "credits";
    creditInput.placeholder = "Credits";
    inputs.appendChild(creditInput);

    let gradeSelect = document.createElement("select");
    gradeSelect.name = "grade";
    gradeSelect.className = "grade";
    gradeSelect.innerHTML = `
        <option value="" disabled selected hidden>Select Grade</option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C</option>
        <option value="4">P</option>
        <option value="0">F</option>
        <option value="0">*</option>
        <option value="0">ab</option>
    `;
    inputs.appendChild(gradeSelect);
});

rmbtn.addEventListener("click", () => {
    let inputs = document.getElementsByClassName("inputs")[0];
    if (subcount > 1) {
        for (let i = 0; i < 3; i++) {
            inputs.removeChild(inputs.lastElementChild);
        }
        subcount--;
    } else {
        alert("You must have at least one subject!");
    }
});

calcbtn.addEventListener("click", () => {
    let credits = document.querySelectorAll(".credits");
    let grades = document.querySelectorAll(".grade");
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        let creditVal = parseFloat(credits[i].value);
        let gradeVal = parseFloat(grades[i].value);

        if (isNaN(creditVal) || isNaN(gradeVal)) {
            alert("Please enter all credits and select all grades.");
            return;
        }
        totalCredits += creditVal;
        totalPoints += creditVal * gradeVal;
    }

    let gpa = (totalPoints / totalCredits).toFixed(3);
    document.querySelector(".result").textContent = `Your GPA is : ${gpa}`;
    let returnWindow = document.querySelector(".resultwindow")
    returnWindow.style.display = "flex";

    let closebtn = document.getElementsByClassName("close_btn")[0];
    closebtn.addEventListener("click",() => {
        let returnWindow = document.querySelector(".resultwindow")
    returnWindow.style.display = "none";
    document.body.classList.remove("blurred");
       
    })

    
});

