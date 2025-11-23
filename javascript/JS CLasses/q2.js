document.getElementById("studentForm").addEventListener("submit", function(e){
    e.preventDefault();

    validateField("name", /^[A-Za-z ]+$/, "Name must contain alphabets only");
    validateField("email", /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format");
    validateField("phone", /^\d{10}$/, "Phone must be 10 digits");
    validateField("password", /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/, 
                  "Password must contain 1 uppercase, 1 number & 1 special character");
});

function validateField(id, regex, message){
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if(regex.test(field.value)){
        field.style.border = "2px solid green";
        error.innerText = "";
    } else {
        field.style.border = "2px solid red";
        error.innerText = message;
    }
}
