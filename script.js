// selezione Bottoni
const startButton = document.getElementById("start");
// Creare un elemento ul (lista non ordinata)
const listaNumeri = document.getElementById("ul");

let clock;


//Aggiungi un event listener per il clic sul pulsante "start"
startButton.addEventListener("click", start );

function start() {
    
    // array vuota
    const mioArray = [];

    // ciclo for per generare i numeri 
    for (let i = 0; i < 5; i++) {
        mioArray.push(Math.floor(Math.random(i) * 10) + 1); // Numeri casuali da 1 a 10
        
    }
    // Utilizzare un altro ciclo for per creare elementi HTML e visualizzare i numeri in pagina
    for (let i = 0; i < mioArray.length; i++) {
        const newElement = document.createElement("li");
        newElement.append(mioArray [i]);
        listaNumeri.append(newElement);
    }

   // setto con setTimeout un timer di 30 secondi 
    setTimeout ( function () {
        
         console.log("Ora tocca indovinare a te!" );
        alert("Ora tocca indovinare a te! inserisci i 5 numeri corretti.")

        // Chiamare la funzione numUtente
         numUtente();  

         // Chiamare la funzione hideElement
         hideElement()

        }, 5000
         // Chiamare la funzione
    
    );

    function numUtente() {
        let numUtente; // dichiarazione variabile
      
            for (let i = 0; i < 5; i++) {
                console.log("Numeri inseriti dall'utente" + i);
                const numUtente = parseInt(prompt("Iinserisci un numero!"));
            }
    
            if (mioArray.includes(numUtente)) {
                console.log("Ottima memoria, HAI VINTO!");
                alert("Ottima memoria, HAI VINTO!")
            } else {
                console.log("Mi dispiace, HAI PERSO!");
                alert("Mi dispiace, HAI PERSO!")
            }
    }
        

    // Funzione per nascondere gli elementi della lista
    function hideElement() {
        
    // Seleziona tutti gli elementi della lista
    const elementiLista = document.getElementsByTagName("li");

    // Itera attraverso gli elementi della lista e nascondili
    for (let i = 0; i < elementiLista.length; i++) {
        elementiLista[i].style.display = "none";
    }
}
}



   
