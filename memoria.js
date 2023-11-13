const JATEKMEZO = document.querySelector("#jatekmezo");
const PONTSZAM = document.querySelector("h3");
const VEGE = document.querySelector("#vege");
const NAGYSAG = 4;
const SZELESSEG = 150;
const MAGASSAG = 150;
let HATTEREK = ["url('./kepek/amoba.jpg')", "url('./kepek/amoba.jpg')", "url('./kepek/amoba.jpg')", "url('./kepek/amoba.jpg')",
                "url('./kepek/memory.png')", "url('./kepek/memory.png')", "url('./kepek/memory.png')", "url('./kepek/memory.png')",
                "url('./kepek/snake.png')", "url('./kepek/snake.png')", "url('./kepek/snake.png')", "url('./kepek/snake.png')",
                "url('./kepek/bg.png')", "url('./kepek/bg.png')", "url('./kepek/bg.png')", "url('./kepek/bg.png')"];
let kartyak =  [];
let grid_gap = "";
let megnyomott = 0;
let elozo_gomb;
let pontok = 0;

// Játékmező
for (let i = 0; i < NAGYSAG**2; i ++){
    kartyak.push(document.createElement("button"));
    JATEKMEZO.append(kartyak[i]);
    kartyak[i].style.width = SZELESSEG + "px";
    kartyak[i].style.height = MAGASSAG + "px";
    kartyak[i].style.backgroundSize = "contain";
    let hatter = HATTEREK[Math.floor(Math.random() * HATTEREK.length)];
    kartyak[i].hatter = hatter;
    HATTEREK.splice(HATTEREK.indexOf(hatter),1);
    kartyak[i].addEventListener("click", hattervaltas);
    if (i % NAGYSAG == 0){
        grid_gap += `${SZELESSEG}px `;
    }
}
JATEKMEZO.style.display = "grid";
JATEKMEZO.style.gridTemplateColumns = grid_gap;

function hattervaltas(){
    this.style.backgroundImage = this.hatter;
    megnyomott += 1;
    if (megnyomott == 1){
        elozo_gomb = this;
    }
    console.log(megnyomott);
    console.log(elozo_gomb.hatter);
    console.log(this.hatter);
    if (megnyomott == 2){
        if (elozo_gomb.hatter == this.hatter){
            pontok += 1;
            PONTSZAM.textContent = `pontszám: ${pontok}`;
        }
        else{
            setTimeout(() => {
                elozo_gomb.style.backgroundImage = "";
                this.style.backgroundImage = "";
            },1000);
        }
        megnyomott = 0;
    }
    if (pontok == 8){
        VEGE.textContent = "VÉGE";
    }
}