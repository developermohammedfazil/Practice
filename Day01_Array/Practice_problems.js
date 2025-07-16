//1. Remove duplicates from an array.
const arr = [1, 2, 3, 2, 3, 10, 20];
const duplicate =()=> [...new Set(arr)];
console.log(duplicate());   // 1, 2, 3, 10, 20 


//2. Find the second largest number in an array.
function SecondLargest(arr){
const unqiueval = [...new Set(arr)];// Remove duplicates
unqiueval.sort((a,b) =>  b - a);  // Sort in descending order
return unqiueval[1];  //Second element is 2nd largest
}
console.log(SecondLargest(arr)); //10


//Ascending order
function Ascending(arr){
   const unqiue = [...new Set(arr)]; 
   unqiue.sort((a,b) => a - b );
   return unqiue;
}
console.log(Ascending(arr)); // 1, 2, 3, 10, 20 


//3. Find the Frequency of Each Element in an Array

function Frequency(arr){
    const freq = {};
    for(let i = 0; i< arr.length; i++){
     const num = arr[i];
        if(freq[num]){
            freq[num]++;
        }
        else{
            freq[num] = 1;
        }
    }
    return freq;

}
console.log(Frequency(arr));

// short method
const freqs = {
  1: 2,
  2: 3,
  3: 1
};
const sorted = Object.entries(freqs).sort((a, b) => b[1] - a[1]);
console.log(sorted);

// 4. Write a function to reverse a string manually (without using reverse() method).

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString('hello'))

//Write a function to reverse a string
function Reversed(str){
  return str.split("").reverse().join("");
}
console.log(Reversed('hello world'));

//Write a function that reverses each word in a sentence

function reverseWords(sentence){
    return sentence.split("").map(words => words.split("").reverse().join("")).join("");
}
console.log(reverseWords("hello world"));



