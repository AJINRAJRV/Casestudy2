var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var loginButton = document.getElementById('loginbutton');
var err1 = document.getElementById('error1');
var err2 = document.getElementById('error2');

function validate(callback) {
    let isValid = true;

    if (userName.value.trim() === "") {
        err1.innerText = "Username is required";
        isValid = false;
    } else {
        let namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(userName.value)) {
            err1.innerText = "Enter alphabets only";
            isValid = false;
        } else {
            err1.innerText = "";
        }
    }

    if (passWord.value.trim() === "") {
        err2.innerText = "Password is required";
        isValid = false;
    } else {
        const passPattern = /^[A-Za-z0-9]+$/;
        if (!passPattern.test(passWord.value)) {
            err2.innerText = "Only letters and numbers allowed";
            isValid = false;
        } else {
            err2.innerText = "";
        }
    }

    if (isValid && userName.value === "admin" && passWord.value === "12345") {
        callback(true);
    } else {
        callback(false);
    }
}

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    validate(isLoginSuccessful => {
        if (isLoginSuccessful) {
            window.location.href = "home.html";
        }
    });
});
