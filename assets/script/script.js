var bgarray = ["./assets/img/bg/bg1.jpg", "./assets/img/bg/bg2.jpg", "./assets/img/bg/bg3.jpg", "./assets/img/bg/bg4.jpg", "./assets/img/bg/bg5.jpg", "./assets/img/bg/bg6.jpg"];
var bgtextarray = ["./assets/img/bg/bg_text1.png", "./assets/img/bg/bg_text2.png", "./assets/img/bg/bg_text3.png", "./assets/img/bg/bg_text4.png", "./assets/img/bg/bg_text5.png", "./assets/img/bg/bg_text6.png"];

$(document).ready(function() {
    var linkhovercolor = "rgb(252, 247, 247)";
    var pagename = $('#pagename').html();

    if (pagename == "cebu") {
        //alert("home page");
        let x = 0;
        let linkcolor = "rgba(68, 49, 36, 0.562)";
        let titlecolor = "rgb(39, 51, 39)";
        let subtitlecolor = "rgb(57, 63, 57)";
        let textcolor = "rgba(68, 49, 36, 0.863)";
        let footercolor = "rgba(68, 49, 36, 0.562)";

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })
        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);
        $("p.scroll").css("color", linkcolor);
        $('button').css("color", linkhovercolor);
        $("nav a:hover").css("color", linkhovercolor);
        $("nav a:visited").css("color", linkcolor);
        $("nav button:hover").css("color", linkhovercolor);
        $(".container2 .wordbox h2").css("color", titlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    } else if (pagename == "history") {
        //alert("history page");
        let x = 1;
        let linkcolor = "rgba(68, 49, 36, 0.562)";
        let titlecolor = "rgb(216, 207, 187)";
        let subtitlecolor = "rgba(216, 207, 197, 0.843)";
        let textcolor = "rgba(68, 49, 36, 0.863)";
        let footercolor = "rgba(68, 49, 36, 0.562)";
        let alttitlecolor = "rgb(39, 51, 39)";
        let altlinkcolor = "rgba(255, 227, 219, 0.562)";

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })
        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title").css("opacity", "0.9");
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);

        $(".nav a").css("color", linkcolor);
        $('button').css("color", linkhovercolor);
        $('.nav a').hover(function() {
            $(this).css({ 'color': linkhovercolor });
        }, function() {
            $(this).css({ 'color': linkcolor });
        });

        $('a.scroll').css("color", altlinkcolor);
        $('a.scroll').hover(function() {
            $(this).css({ 'color': linkhovercolor });
        }, function() {
            $(this).css({ 'color': altlinkcolor });
        });

        $("nav a:visited").css("color", linkcolor);
        $(".container2 .wordbox h2").css("color", alttitlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    } else if (pagename == "culture") {
        //alert("culture page");
        let x = 2;
        let linkcolor = "rgba(250, 253, 230, 0.663)";
        let titlecolor = "rgb(241, 245, 184)";
        let subtitlecolor = "rgba(230, 223, 190,0.832)";
        let textcolor = "rgba(68, 49, 36, 0.863)";
        let footercolor = "rgba(68, 49, 36, 0.562)";
        let alttitlecolor = "rgb(39, 51, 39)"

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })
        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);
        $("a.scroll").css("color", linkcolor);
        $("a").css("color", linkcolor);
        $('a').hover(function() {
            $(this).css({ 'color': linkhovercolor });
        }, function() {
            $(this).css({ 'color': linkcolor });
        });
        $("nav a:visited").css("color", linkcolor);
        $(".container2 .wordbox h2").css("color", alttitlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    } else if (pagename == "nature") {
        //alert("nature page");
        let x = 3;
        let linkcolor = "rgb(102, 121, 129)";
        let titlecolor = "rgb(62, 90, 104)";
        let subtitlecolor = "rgba(84, 114, 128)";
        let textcolor = "rgba(33, 57, 70, 0.856)";
        let footercolor = "rgba(68, 49, 36, 0.562)";

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })

        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title").css("opacity", "0.9");
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);
        $("p.scroll").css("color", linkcolor);
        $('button').css("color", linkhovercolor);
        $("nav a:hover").css("color", linkhovercolor);
        $("nav a:visited").css("color", linkcolor);
        $("nav button:hover").css("color", linkhovercolor);
        $(".container2 .wordbox h2").css("color", titlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    } else if (pagename == "tourism") {
        //alert("tourism page");
        let x = 4;
        let linkcolor = "rgba(68, 49, 36, 0.562)";
        let titlecolor = "rgb(32, 49, 63)";
        let subtitlecolor = "rgb(62, 83, 100)";
        let textcolor = "rgba(68, 49, 36, 0.863)";
        let footercolor = "rgba(68, 49, 36, 0.562)";

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })
        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);
        $("p.scroll").css("color", linkcolor);
        $('button').css("color", linkhovercolor);

        $("nav a").css("color", linkcolor);
        $('nav a').hover(function() {
            $(this).css({ 'color': linkhovercolor });
        }, function() {
            $(this).css({ 'color': linkcolor });
        });

        $("nav a:visited").css("color", linkcolor);
        $(".container2 .wordbox h2").css("color", titlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    } else if (pagename == "about") {
        //alert("about page");
        let x = 5;
        let linkcolor = "rgba(36, 47, 68, 0.562)";
        let titlecolor = "rgb(109, 42, 33)";
        let subtitlecolor = "rgb(141, 53, 42)";
        let textcolor = "rgba(68, 36, 52, 0.863)";
        let footercolor = "rgba(61, 39, 68, 0.562)";

        $(".front").css({
            "background-image": "url(" + bgarray[x] + ")"
        })
        $("body").css({
            "background-image": "url(" + bgtextarray[x] + ")"
        })
        $(".title h2").css("color", titlecolor);
        $(".title p").css("color", subtitlecolor);
        $("p.scroll").css("color", linkcolor);
        $('button').css("color", linkhovercolor);

        $('nav a').css("color", linkcolor);
        $('nav a').hover(function() {
            $(this).css({ 'color': linkhovercolor });
        }, function() {
            $(this).css({ 'color': linkcolor });
        });

        $("nav a:visited").css("color", linkcolor);
        $("nav button:hover").css("color", linkhovercolor);
        $(".container2 .wordbox h2").css("color", titlecolor);
        $(".container2 .wordbox p").css("color", textcolor);
        $("footer").css("color", footercolor);
    }
})

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