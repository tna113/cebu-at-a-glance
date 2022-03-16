// javaScript stuff
function checkName() {
    "use strict";
    let obj = document.getElementById("name");
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
    let messageOk = checkMessage();

    console.log("validateForm():" + (nameOk && messageOk));
    return (nameOk && messageOk);
}