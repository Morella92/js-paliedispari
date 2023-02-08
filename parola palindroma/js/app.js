console.log('Parola palindroma')

// Chiedere all’utente di inserire una parola
let userWord = prompt('Inserisci una parola')
console.log(userWord)

// Creare una funzione per capire se la parola inserita è palindroma
function palindromeWord (isPalindrome){

    let reverseWord = isPalindrome.split('').reverse().join('')
    console.log(reverseWord)

    return isPalindrome === reverseWord
}

// Comunicare all’utente se la parola che ha inserito è palindroma oppure no

if(palindromeWord(userWord)){
    console.log('La parola è palindroma')
}else{
    console.log('La parola non è palindroma')
}