console.log('Parola palindroma')

// Chiedere all’utente di inserire una parola
let userWord = prompt('Inserisci una parola')
console.log(userWord)

// Comunicare all’utente se la parola che ha inserito è palindroma oppure no

if(palindromeWord(userWord)){

    printResult('La parola '+ userWord + ' è palindroma')
    // console.log('La parola è palindroma')
}else{
    
    printResult('La parola '+ userWord + ' non è palindroma')
}

// Creare una funzione per capire se la parola inserita è palindroma
function palindromeWord (isPalindrome){

    let reverseWord = isPalindrome.split('').reverse().join('')
    console.log(reverseWord)

    return isPalindrome === reverseWord
}

function printResult(result){

    document.getElementById('palindrome-word').innerHTML += result

}