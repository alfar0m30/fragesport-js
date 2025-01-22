const länder = ["Holland", "Belgien", "Italien", "Rumänien", "Albanien", "Tjeckien", "Polen", "Österrike"];
const städer = ["Amsterdam", "Bryssel", "Rom", "Bukarest", "Tirana", "Prag", "Warzawa", "Wien"];

let p_fråga = document.querySelector("#fråga");
let input_svar=document.querySelector("#svar");
let p_resultat=document.querySelector("#resultat");

let points = 0;
let slumptal = 0;

function fråga(){
    slumptal = Math.floor(Math.random() * länder.length)
    let fråga = länder[slumptal]
    p_fråga.textContent = "Ange huvudstad för "+fråga
    input_svar.value = ""
}



function ange_svar(){
    let svar = input_svar.value;
    p_resultat.textContent = "Rätt svar: "+städer[slumptal];

    input_svar.value="";

    if (svar.toLowerCase() === städer[slumptal].toLowerCase()) {
        points++;
        p_resultat.textContent = "Rätt! Poäng = " + points;
    } else {
        p_resultat.textContent = "Fel! Rätt svar var " + städer[slumptal] + ". Poäng = " + points;
    }

    fråga();
}

function starta_om(){
    points = 0;
    p_resultat.textContent = "Poäng = 0"
}

input_svar.addEventListener("keydown", (event) =>{
    if (event.key === "Enter"){
        ange_svar();
    }
}
)

function add_BUTTON() {
    const nytt_land = document.querySelector("#nytt_land").value;
    const ny_huvudstad = document.querySelector("#ny_huvudstad").value;

    if (nytt_land && ny_huvudstad) {
        länder.push(nytt_land);
        städer.push(ny_huvudstad);

        document.querySelector("#nytt_land").value = "";
        document.querySelector("#ny_huvudstad").value = "";
    } else {
        alert("Fyll i både land och huvudstad!");
    }
}
