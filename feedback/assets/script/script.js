// javaScript stuff
function checkName() {
    "use strict";
    let obj = document.getElementById("visitor");
    let valid = true;

    if (obj.value == "") {
        obj.style.backgroundColor = "rgb(252, 174, 166)";
        valid = false;
    } else {
        obj.style.border = "none";
        obj.style.backgroundColor = "white";
        valid = true;
    }
    console.log("name valid:" + valid);
    return valid;
}

function checkEmail() {
    "use strict";
    let obj = document.getElementById("email");
    let valid = true;

    if (obj.value == "") {
        obj.style.backgroundColor = "rgb(252, 174, 166)";
        valid = false;
    } else {
        obj.style.border = "none";
        obj.style.backgroundColor = "white";
        valid = true;
    }
    console.log("name valid:" + valid);
    return valid;
}

function checkCheck() {
    "use strict";
    let history = document.getElementById('history').checked;
    let culture = document.getElementById('culture').checked;
    let nature = document.getElementById('nature').checked;
    let tourism = document.getElementById('tourism').checked;
    let valid = history || culture || nature || tourism;

    if (!valid) {
        document.getElementById('options').style.backgroundColor = "rgb(252, 174, 166)";
        valid = false;
    } else {
        document.getElementById('options').style.backgroundColor = "rgba(255, 255, 255, 0.726)";
        valid = true;
    }
    console.log("subject valid:" + valid);
    return valid;
}

function checkMessage() {
    "use strict";
    let obj = document.getElementById("message");
    let valid = true;

    if (obj.value == "") {
        obj.style.backgroundColor = "rgb(252, 174, 166)";
        valid = false;
    } else {
        obj.style.border = "none";
        obj.style.backgroundColor = "white";
        valid = true;
    }
    console.log("message valid:" + valid);
    return valid;
}

function validateForm() {
    "use strict";
    let nameOk = checkName();
    let emailOk = checkEmail();
    let checkOk = checkCheck();
    let messageOk = checkMessage();

    console.log("validateForm():" + (nameOk && emailOk && checkOk && messageOk));
    return (nameOk && emailOk && checkOk && messageOk);
}