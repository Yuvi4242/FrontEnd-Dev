document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user.length < 5) return alert("Username must be at least 5 characters");
    if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(pass))
        return alert("Password must contain upper, lower, number & special char");

    alert("Login Successful!");
});
