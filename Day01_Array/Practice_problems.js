//Remove duplicates from an array.
const arr = [1, 2, 3, 2, 3, 10, 20];
const duplicate =()=> [...new Set(arr)];
console.log(duplicate());   // 1, 2, 3, 10, 20 


//Find the second largest number in an array.
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


//Find the Frequency of Each Element in an Array

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
