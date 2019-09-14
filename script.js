var cross1 = document.getElementById("cross1");
var cross2 = document.getElementById("cross2");
var cross1bis = document.getElementById("cross1bis");
var cross2bis = document.getElementById("cross2bis");
var firstline = document.getElementById("firstline");
var secondline = document.getElementById("secondline");
var bouton = document.getElementById("line");
var bouton2 = document.getElementById("line2");
var cross = document.getElementById("cross");
var crossbis = document.getElementById("crossbis");
var blanc = document.getElementById("second");
var red = document.getElementById("red");
var lang0 = document.getElementById("langue");
var lang1 = document.getElementById("langue1");
var lang2 = document.getElementById("langue2");
var lang3 = document.getElementById("langue3");
var hr = document.getElementById("hr");
var select = document.getElementById("select");
var sousmenu = document.getElementById("sousmenu");
var sm1 = document.getElementById("sm1");
var sm2 = document.getElementById("sm2");
var sm3 = document.getElementById("sm3");
var sm4 = document.getElementById("sm4");
var ss1 = document.getElementById("ss1");
var ss2 = document.getElementById("ss2");
var ss3 = document.getElementById("ss3");
var ss4 = document.getElementById("ss4");
var x = window.matchMedia("(max-width: 1000px)")

// For open the menu
function mouv(x) {
    x.animate([
        { transform: "translateY(150%)" },
        { transform: "translateY(0)" }
    ], { duration: 400 });
}



bouton.addEventListener("click", function() {
    if (x.matches) {
        bouton.style.display = "none";
        cross.style.display = "block";
        cross1.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(45deg)" },
        ], { duration: 100 })

        cross2.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(-45deg)" },
        ], { duration: 100 });
        setTimeout(function() {
            red.style.display = "block";
            setTimeout(function() {
                sousmenu.style.display = "block";
                mouv(sm4);
                mouv(sm1);
                mouv(sm2);
                mouv(sm3);
            }, 300);
            red.animate([
                { transform: "translateX(100%)" },
                { transform: "translateX(0%)" },
            ], { duration: 500 })
        }, 100);
    } else {

        bouton.style.display = "none";
        blanc.style.display = "block";
        cross.style.display = "block";
        blanc.animate([
            { transform: "translate(100%)" },
            { transform: "translate(0)" }
        ], { duration: 100 });
        cross1.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(45deg)" },
        ], { duration: 100 })

        cross2.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(-45deg)" },
        ], { duration: 100 });
        setTimeout(function() {
            hr.style.display = "block";
            hr.animate([
                { transform: "scaleX(0)" },
                { transform: "scaleX(1)" }
            ], { duration: 400 });
            select.style.display = "flex";
            mouv(lang0);
            mouv(lang1);
            mouv(lang2);
            mouv(lang3);
            red.style.display = "block";
            setTimeout(function() {
                sousmenu.style.display = "block";
                mouv(sm4);
                mouv(sm1);
                mouv(sm2);
                mouv(sm3);
            }, 300);
            red.animate([
                { transform: "translateX(100%)" },
                { transform: "translateX(0%)" },
            ], { duration: 500 })
        }, 100);

    }

});


// For close the menu
function closemouv(x) {
    x.animate([
        { transform: "translateY(0)" },
        { transform: "translateY(150%)" }
    ], { duration: 500 });

}

function close(a, b) {
    a.animate([
        { transform: "translateX(0%)" },
        { transform: "translateX(100%)" },
    ], { duration: b })
}

cross.addEventListener("click", function() {
    closemouv(sm4);
    closemouv(sm1);
    closemouv(sm2);
    closemouv(sm3);
    close(red, 500);
    setTimeout(function() {
        hr.animate([
            { transform: "scaleX(1)" },
            { transform: "scaleX(0)" }
        ], { duration: 400 });
        closemouv(lang0);
        closemouv(lang1);
        closemouv(lang2);
        closemouv(lang3);
        close(blanc, 500);

        cross1.animate([
            { transform: "rotate(45deg)" },
            { transform: "rotate(0deg)" },
        ], { duration: 150 });

        cross2.animate([
            { transform: "rotate(-45deg)" },
            { transform: "rotate(0deg)" },
        ], { duration: 150 });
        red.style.display = "none";
        sousmenu.style.display = "none";
        bouton.style.display = "block";
        setTimeout(function() {
            select.style.display = "none";
            hr.style.display = "none";
        }, 400);
        setTimeout(function() {
            cross.style.display = "none";
        }, 150);
        setTimeout(function() {
            blanc.style.display = "none";
        }, 500);
    }, 500);
})


ss1.addEventListener("mouseover", function() {
    red.style.opacity = "0.99999";
    ss2.style.opacity = "0.5";
    ss3.style.opacity = "0.5";
    ss4.style.opacity = "0.5";
})
ss1.addEventListener("mouseout", function() {
    red.style.opacity = "1";
    ss2.style.opacity = "1";
    ss3.style.opacity = "1";
    ss4.style.opacity = "1";
})

ss2.addEventListener("mouseover", function() {
    red.style.opacity = "0.99999";
    ss1.style.opacity = "0.5";
    ss3.style.opacity = "0.5";
    ss4.style.opacity = "0.5";
})
ss2.addEventListener("mouseout", function() {
    red.style.opacity = "1";
    ss1.style.opacity = "1";
    ss3.style.opacity = "1";
    ss4.style.opacity = "1";
})
ss3.addEventListener("mouseover", function() {
    red.style.opacity = "0.99999";
    ss1.style.opacity = "0.5";
    ss2.style.opacity = "0.5";
    ss4.style.opacity = "0.5";
})
ss3.addEventListener("mouseout", function() {
    red.style.opacity = "1";
    ss1.style.opacity = "1";
    ss2.style.opacity = "1";
    ss4.style.opacity = "1";
})
ss4.addEventListener("mouseover", function() {
    red.style.opacity = "0.99999";
    ss1.style.opacity = "0.5";
    ss2.style.opacity = "0.5";
    ss3.style.opacity = "0.5";
})
ss4.addEventListener("mouseout", function() {
    red.style.opacity = "1";
    ss1.style.opacity = "1";
    ss2.style.opacity = "1";
    ss3.style.opacity = "1";
})