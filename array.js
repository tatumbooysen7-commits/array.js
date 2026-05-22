// TODO: Create an empty array called colors
// TODO: Add three colors to the array using push()
// TODO: Create another array called numbers with five numbers 
// TODO: Remove the last color from the colors array 
// TODO: Add a new color to the beginning of the colors array 
// TODO: Print the length of both arrays

const colors = [];

colors.push("Red","Blue","Purple");

let numbers = [10, 20, 30, 40, 50];

colors.pop(); 
colors.unshift("Yellow");

console.log(colors.length);
console.log(numbers.length);