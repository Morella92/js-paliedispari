console.log('Parola palindroma')

// // Chiedere all’utente di inserire una parola
// let userWord = prompt('Inserisci una parola')
// console.log(userWord)

// // Comunicare all’utente se la parola che ha inserito è palindroma oppure no

// if(palindromeWord(userWord)){

//     printResult('La parola '+ userWord + ' è palindroma')
//     // console.log('La parola è palindroma')
// }else{
    
//     printResult('La parola '+ userWord + ' non è palindroma')
// }

// // Creare una funzione per capire se la parola inserita è palindroma
// function palindromeWord (isPalindrome){

//     let reverseWord = isPalindrome.split('').reverse().join('')
//     console.log(reverseWord)

//     return isPalindrome === reverseWord
// }

// function printResult(result){

//     document.getElementById('palindrome-word').innerHTML += result

// }


/*************CORREZIONE*****************/

// Chiedere all’utente di inserire una parola
let parola = prompt('Inserisci una parola')
console.log(parola)

// Controllare se è palindroma
// Pippo 
// 1- invertire la parola dell'utente ==> oppiP
// 2- confrontare la parola con la versione invertita Pippo === oppiP?



// Scrivere all'utente il risultato
if(isPalindrome(parola)){
    //la parola è palindroma
    console.log('La parola ' + parola + ' è palindroma' )
}else{
    //la parola non è palindroma
    console.log('La parola ' + parola + ' non è palindroma' )
}

function isPalindrome(parolaDaVerificare){

    parola = parolaDaVerificare.toLowerCase()
    // invertire la parolaDaVerificare
    //per le stringhe possiamo usare .length come negli array per la lunghezza
    let parolaInvertita = ''

    //di solito cicliamo cosi

    // for(let i = 0; i < parolaDaVerificare.length; i++){
    //     const carattere = parolaDaVerificare.charAT(i)
    //     console.log(carattere)
    // }

    //ma dobbiamo ciclare al contrario per avere la parola invertita
    let lastIndex = parola.length - 1

    for(let i = lastIndex; i >= 0; i--){
        const carattere = parola[i]
        parolaInvertita += carattere
        console.log(carattere, parolaInvertita)
    }
    // potevamo scrivere anche i > -1 perchè dobbiamo arrivare a leggere la prima lettera
    // che ha valore 0, dopodichè deve finire il ciclo
    // .charAt () serve per leggeree ciclare le stringhe come se fossero array
    // esiste .at() che fa la stessa cosa ma si possono usare anche indici negativi
    //quindi in questo caso si poteva fare il ciclo normale e poi mettere
    // .at(-1)

    console.log(parola, parolaInvertita)
    
    //confrontare le 2 stringhe
    const result = parolaDaVerificare === parolaInvertita
    //deve ritornare true o false
    return result
}