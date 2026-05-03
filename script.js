// function that runs when button is clicked
function getAkanName() {

    // gets the value entered by the user (date of birth)
    let dob = document.getElementById("dob").value;

    // convert input into a date object
    let date = new Date(dob);

    // get the day of the week
    let day = date.getDay();

    // array storing male akan names for each day
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    // array storing female akan names for each day
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // get selected gender
    let gender = document.querySelector('input[name="gender"]:checked');

    // check if user filled all fields
    if (!dob || !gender) {
        document.getElementById("result").innerHTML = "Please fill all fields!";
        return;
    }

    // check gender and display correct akan name
    if (gender.value === "male") {
        document.getElementById("result").innerHTML =
            "You were born on day " + day + ". Your Akan name is " + maleNames[day];
    } else {
        document.getElementById("result").innerHTML =
            "You were born on day " + day + ". Your Akan name is " + femaleNames[day];
    }
}