console.log('Pari e dispari')

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5.'))
console.log(userNumber)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
let pcNumber

function randomNumber(pcNumber){

    return Math.floor(Math.random()* 5) + 1

}

pcNumber = randomNumber(pcNumber)
console.log(pcNumber)

// Sommiamo i due numeri
let sum = userNumber + pcNumber
console.log(sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let numero

function isEven (numero){

    if(numero % 2 === 0){
        return true     
    }else{
        return false
    }
}

function isOdd (numero){

    if(numero % 2 !== 0){
        return true
    }else{
        return false
    }
}

// Comunichiamo all’utente chi ha vinto

if(isEven(sum)){
    console.log('Complimenti!Hai vinto!')
}else if(isOdd(sum)){
    console.log('Hai perso. Riprova!')
}

