const länder = ["Holland", "Belgien", "Italien", "Rumänien", "Albanien", "Tjeckien", "Polen", "Österrike"];
const städer = ["Amsterdam", "Bryssel", "Rom", "Bukarest", "Tirana", "Prag", "Warzawa", "Wien"];

let p_fråga = document.querySelector("#fråga");
let input_svar=document.querySelector("#svar");
let p_resultat=document.querySelector("#resultat");

function fråga(){
    slumptal = parseInt(Math.random() * länder.length)
    let fråga = länder[slumptal]
    p_fråga.textContent = "Ange huvudstad för "+fråga
    input_svar.value = ""
}

let points = 0;

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