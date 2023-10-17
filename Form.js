const genderOption = document.getElementsByName("gender");
const selectGender = false;


function submitForm() {
    const country = document.getElementById("country").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const date = document.getElementById("date").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const textarea = document.getElementById("textarea").value;


    if (firstName === "") {
        alert("First name fill");
    } else if (lastName === "") {
        alert("Enter last Name");
    } else if (date === "") {
        alert("Enter Date of barth");
    } else if (profession === "") {
        alert("Enter your profission");
    } else if (email === "") {
        alert("Etner your Email");
    } else if (number === "") {
        alert("Enter your Email");
    } else if (textarea === "") {
        alert("Etner your TextArea");
    } else if (country === "") {
        alert("Select Country");
    } else {
        alert("Submitted successfully");
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("date").value = "";
        document.getElementById("country").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("textarea").value = "";
        document.getElementById("male").checked = false;
        document.getElementById("female").checked = false;
        document.getElementById("other").checked = false;


    }

    for (const option of genderOption) {
        if (option.checked) {
            selectGender = true;
            break;
        }
    }

    if (!selectGender) {
        alert("Please select a gender.");
        return;
    }


}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("date").value = "";
    document.getElementById("country").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("textarea").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;
}