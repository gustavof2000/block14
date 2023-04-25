// Only Odds 
// Take array of numbers and filter out into new array containing only odd numbers.
// Create const of our [array]
// Our new array [oddResults] will = our array filtered out anything % by 2
// Output our new array into the terminal

const array = [2, 4, 6, 8, 11, 20, 15, 22];
const oddResults = array.filter(array => array%2);
console.log(oddResults);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddResults2 = array2.filter(array2 => array2%2);
console.log(oddResults2);

const array3 = [70, 42, 55, 81, 21, 91, 34];
const oddResults3 = array3.filter(array3 => array3%2);
console.log(oddResults3);

const array4 = [2, 4, 6, 8, 10, 11, 12];
const oddResults4 = array4.filter(array4 => array4%2);
console.log(oddResults4);

// Vowel Vs Consonant
// Define a consonant variable for the input string
// Define vowel and consonant
// Create if loop any vowels will increase counter
// Else anything not a vowel will increase the consonant counter
// Output (word) has (cons) consonants and (vow) vowels"

const word = "hello"
let vow = 0;
let cons = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
    vow++
    }
    else{
        cons++
    }
}

console.log(word + " has " + cons + " consonants and " + vow + " vowels")

const word1 = "ukelele"
let vow1 = 0;
let cons1 = 0;

for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "a" || word1[i] === "e" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") {
    vow1++
    }
    else{
        cons1++
    }
}

console.log(word1 + " has " + cons1 + " consonants and " + vow1 + " vowels")

const word2 = "awesome"
let vow2 = 0;
let cons2 = 0;

for (let i = 0; i < word2.length; i++) {
    if (word2[i] === "a" || word2[i] === "e" || word2[i] === "i" || word2[i] === "o" || word2[i] === "u") {
    vow2++
    }
    else{
        cons2++
    }
}

console.log(word2 + " has " + cons2 + " consonants and " + vow2 + " vowels")

const word3 = "onomonopia"
let vow3 = 0;
let cons3 = 0;

for (let i = 0; i < word3.length; i++) {
    if (word3[i] === "a" || word3[i] === "e" || word3[i] === "i" || word3[i] === "o" || word3[i] === "u") {
    vow3++
    }
    else{
        cons3++
    }
}

console.log(word3 + " has " + cons3 + " consonants and " + vow3 + " vowels")

const word4 = "textbook"


let vow4 = 0;
let cons4 = 0;

for (let i = 0; i < word4.length; i++) {
    if (word4[i] === "a" || word4[i] === "e" || word4[i] === "i" || word4[i] === "o" || word4[i] === "u") {
    vow4++
    }
    else{
        cons4++
    }
}

console.log(word4 + " has " + cons4 + " consonants and " + vow4 + " vowels")

// Reverse Array
// Create const for input array
// Create const for reversed input array and use the .reverse() method
// Console.log our new array which is the original, reversed.

const input1 = [1, 2, 3];
const reversed1 = input1.reverse();
console.log(reversed1);

const input2 = [1, 3, 5, 7, 9, 11];
const reversed2 = input2.reverse();
console.log(reversed2);

const input3 = [20, 50, 30, 60, 200];
const reversed3 = input3.reverse();
console.log(reversed3);

const input4 = [1, -1, 2, -3, 5, -8, 13];
const reversed4 = input4.reverse();
console.log(reversed4);

// FizzBuzz
// Algorithm will print each number from 1 to 100 on separate lines
// Numbers with multiples of 3 and 5 will print "FizzBuzz" instead of the number
// Each multiple of 3 will print Fizz instead of the number
// Each multiple of 5 will print Buzz instead of the number


let counting = 1
while(counting <= 100) {
    if (counting % 3 === 0 && counting % 5 === 0){
        console.log("FizzBuzz")
    }else if (counting % 5 === 0){
        console.log("Buzz")
    }else if (counting % 3 === 0){
        console.log("Fizz");
    }else
    console.log(counting);
    counting++;
}