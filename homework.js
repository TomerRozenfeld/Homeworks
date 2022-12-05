//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort
let arr=[42,1,3,9,15,23,29,35,54]
const bubbleSort = (arr) => {
    for(let i=0; i <arr.length-1; i++){
  if(arr[i] > arr[i+1]){
    const swap=arr[i];
    arr[i]=arr[i+1]
    arr[i+1]=swap;
    }
  }
  return arr
}
console.log(bubbleSort(arr));
//הסבר:הלולאה עוברת על המערך ואחריי זה נכנסת לתנאי, במידה והאיבר במקום האיי גדול לפני האיבר שלפניו
//אז אובייקט בשם סואפ שווה לאיבר במקום האיי לאחר מכן מקום האיי שווה לאיבר אחריו מה שמחליף ביניהם ומגדירים
//שהאיבר אחריי האיי שווה בעצם לאיבר של איי פלוס 1, פלוס אחד בלולאה זה כי אנחנו לא צריכים לעבור על איטרציה האחרונה במערך


// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort

let arr2=[1,54,93,12,82,51,34,22,1,2,16,7,44,68,79,-2,-1,2]

const selectionSort = (arr2) => {
  for(let i= 0; i<arr2.length; i++) {
  let min=i;
  for(let j =i+1; j<arr2.length; j++) {
    if(arr2[j]<arr2[min]){
      min=j;
    }
  }
  const swap=arr2[i]
  arr2[i]=arr2[min]
  arr2[min]=swap
}
return arr2 
  }
console.log(selectionSort(arr2));
//הסבר:הלולאה של איי עוברת על אורך המערך ואנחנו מגדירים שמשתנה מעין שווה לאיי, לאחר מכן גי עוברת על אורך המארך מהנקודה של איי פלוס 1 כלומר אחריו
//ויש תנאי, במידה ובתנאי הערך שבמקום הגי גדול קטן יותר מהערך במקום המעין במערך אז מעין שווה לגי, ואחריי יש אובייקט שהוא שווה לאי במקום המערך ואי שווה למעין שהוא בעצם אמרנו מקודם גי ומגדירים שהם מתחליפים

// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort
let arr3=[2,8,9,2,12,94,57,63,37,26,18,29,42,1,33,36,100,2]
const insertionSort = (arr) => {

};


//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
let ="hello world"
const capitalize = (str) => {};

// example:
// let str = "hello world";
// console.log(capitalize(str)); -> "Hello world"

// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {};

// example:
// let str = "hey mom";
// console.log(capitalizeWords(str)); -> "Hey Mom"
  
// 2.3 Reverse a string 
const reverseString = (str) => {};
// example:
// let srt = "Pizza";
// console.log(reverseString(str)); -> "azzip" - notice that the capital P is not capitalized


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str) => {};
// example:
// let str = "   hello world   ";
// console.log(trim(str)); -> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence

const fibonacci = (n) => {};

// example:
// let n = 7;
// console.log(fibonacci(n)); -> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~