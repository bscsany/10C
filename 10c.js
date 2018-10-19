
var ki;

function cucc() {
    var i = 0;
    var mehet = true;
    for (; mehet;) {
        ki.innerHTML = ki.innerHTML + i + "<br>";
        i++;
        if (i == 10) {
            mehet = false;
        }
    }
    var n = 0;
    ki.innerHTML = ki.innerHTML + "**************<br>";
    for (var k = 0; n < 100; k++) {
        n = k * k;
        ki.innerHTML = ki.innerHTML + n + "<br>";
    }
}

function elso(a, b) {
    var macska = document.getElementById("hazi");
    for (var i = a; i <= b; i++) {
        if (i % 7 == 0 || i % 8 == 0) {
            macska.innerHTML += i + "\n";
        }
    }
}
function masodik() {
    var veletlen1 = vel(1, 100);
    var veletlen2 = vel(1, 100);
    var kiir = document.getElementById("hazi");
    if (veletlen1 > veletlen2) {
        var seged = veletlen1;
        veletlen1 = veletlen2;
        veletlen2 = seged;
    }
    var k = Math.min(veletlen1, veletlen2);
    var n = Math.max(veletlen1, veletlen2);

    kiir.innerHTML += 1 / veletlen1 + " : " + 1 / veletlen2 + " \n";
    kiir.innerHTML += 1 / k + " : " + 1 / n + " \n";
}
function vel(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

//*****************//



var vezetekNev = ["Póczak", "Makunga", "Cicura", "Lakatos", "Kolompár"];
var keresztNevLany = ["Dzsesszika", "Doloresz", "Lilla", "Mercédesz"];
var keresztNevFiu = ["Márió", "Tibor", "Rikárdó", "Fernándó", "Dzsézönsztetem"];
function Lakat() {
    var nevekO = document.getElementById("nevek");
    for (var i = 0; i < vezetekNev.length; i++) {
        nevekO.innerHTML += vezetekNev[i] + ", ";
    }
    nevekO.innerHTML += "<br>";
    for (var i = 0; i < keresztNevFiu.length; i++) {
        nevekO.innerHTML += keresztNevFiu[i] + ", ";
    }
    nevekO.innerHTML += "<br>";
    for (var i = 0; i < keresztNevLany.length; i++) {
        nevekO.innerHTML += keresztNevLany[i] + ", ";
    }
    nevekO.innerHTML += "<br>";
    for (var i = 0; i < 5; i++) {
        var nev = "";
        nev = vezetekNev[vel(0, vezetekNev.length - 1)];
        var nem = vel(0, 1);
        if (nem == 0) {
            nev += " " + keresztNevFiu[vel(0, keresztNevFiu.length - 1)];

        } else {
            nev += " " + keresztNevLany[vel(0, keresztNevLany.length - 1)];
        }
        nevekO.innerHTML += nev + "<br>";
    }
}