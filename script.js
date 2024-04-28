// Q1. Install Node.js, TypeScript and VS Code on your computer.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magicians
var magicians = [
    { name: "Merlin" },
    { name: "Gandalf" },
    { name: "Dumbledore" }
];
// Function to make the magicians great
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        modifiedMagicians.push({ name: "the Great ".concat(magician.name) });
    }
    return modifiedMagicians;
}
// Function to show the magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
// Call make_great with a copy of the original array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians with the array of great magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
/* 44. Sandwiches: Write a function that accepts a array of items a person wants on
a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the
sandwich that is being ordered. Call the function three times, using a
different number of arguments each time. */
/* 45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should
then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. Print the Object that’s returned to make
sure all the information was stored correctly. */
// color or an optional feature. Print the Object that’s returned to make 
