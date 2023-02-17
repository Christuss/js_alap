// ha betoltott az oldal, akkor fut le
window.addEventListener("load", init)

function init() {
    console.log("itt vagyok");
    console.log(document.querySelector("button"));
    valtozok();
    elagazasok();
    ciklusok();
}

function valtozok() {
    var vnev1;
    let vnev2 = 2.4;
    const VNEV3 = "4";
    vnev1 = 2;
    console.log("vnev1", vnev1, typeof vnev1);
    console.log("vnev2", parseFloat(vnev2), typeof parseFloat(vnev2));
    console.log("VNEV3", VNEV3, typeof VNEV3);
}

function elagazasok() {
    var szam = 6;
    if (szam % 3 === 0 && szam % 2 === 0 ) {
        console.log("3 - mal és kettővel osztható");
    } else if (szam % 3 === 0) {
        console.log("3 - mal osztható");
    } else if (szam % 2 === 0) {
        console.log("kettővel osztható");
    }
    console.log("2" === 2);
    console.log("2" == 2);

    var nap;
    nap = Math.floor(Math.random()*7)+1;
    switch (nap) {
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Nincs ilyen nap!");
            break;
    }

}
function ciklusok() {
    let index = 0;
    while (index < 10) {
        var szam = Math.floor(Math.random()*(100-60+1)+60);
        console.log(szam);
        index++;
    }
    var szam;
    do {
        szam = Math.floor(Math.random()*(10+20+1)-20)
        console.log(szam);
    } while (szam < 0);
}