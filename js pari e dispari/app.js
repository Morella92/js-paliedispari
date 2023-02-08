console.log('Pari e dispari')

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5.'))
console.log(userNumber)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
let pcNumber
pcNumber = randomNumber()
console.log(pcNumber)

// Sommiamo i due numeri
let sum = userNumber + pcNumber
console.log(sum)

// Comunichiamo all’utente chi ha vinto

if(isEven(sum)){

    console.log('Complimenti!Hai vinto!')

}else if(isOdd(sum)){

    console.log('Hai perso. Riprova!')

}


// ***** FUNZIONI ****//

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNumber(){

    return Math.floor(Math.random()* 5) + 1

}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven (number){

    if(number % 2 === 0){
        return true     
    }else{
        return false
    }
}

function isOdd (number){

    if(number % 2 !== 0){
        return true
    }else{
        return false
    }
}