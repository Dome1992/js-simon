// selezione Bottoni
const startButton = document.getElementById("start");
// Creare un elemento ul (lista non ordinata)
const listaNumeri = document.getElementById("ul");


//Aggiungi un event listener per il clic sul pulsante "start"
startButton.addEventListener("click", start );

function start() {
    
 // array vuota
const mioArray = [];



// ciclo for per generare i numeri 
for (let i = 0; i < 5; i++) {
   mioArray.push(i);
    
}


// Utilizzare un altro ciclo for per creare elementi HTML e visualizzare i numeri in pagina
for (let i = 0; i < mioArray.length; i++) {
    const newElement = document.createElement("li");
    newElement.append(i);
    listaNumeri.append(newElement);
}



}


