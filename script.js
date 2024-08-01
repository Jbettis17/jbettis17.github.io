function validateForm() {
    let x = document.getElementById("email").value;
    let y = document.getElementById("confirmEmail").value;
    if(x === y) {
        alert("Email Confirmed!");
    }
    else {
        alert("Emails don't match. Try again.");
    }
}