console.log("Hello world");
/*
változók deklarálása

var
let
const
*/

/* constans, állandó*/

let cimelem = document.getElementById("cim");
cimelem.textContent="kedvenceim";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function inditas() {
    while (true) {
        cimelem.textContent = "kedvenceim";
        await sleep(1000);

        cimelem.textContent = "Nem";
        await sleep(1000);
    }
}

inditas();

let gyumolcsElemek = document.querySelectorAll(".gyumolcs")

gyumolcsElemek[0].textContent="ALMA";
gyumolcsElemek[1].textContent=gyumolcsElemek[2].textContent;


let divElem=document.getElementById("uzenet")
divElem.addEventListener("click", beIr)

function beIr(){
    let felsorolasElem=document.getElementById("felsorolás")
    let inputElem=document.getElementById("kedvenc")
    let ertek=inputElem.value
    felsorolasElem.insertAdjacentHTML("beforeend", `<li class="gyumolcs">${ertek}</li>`)
}



