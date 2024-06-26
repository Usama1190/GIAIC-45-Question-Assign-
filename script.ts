// Q1. Install Node.js, TypeScript and VS Code on your computer.





/* Q2. Personal Message: Store a person’s name in a variable, and print a 
message to that person. Your message should be simple, such as, “Hello 
Eric, would you like to learn some Python today?”  */

/*
// Old Steps
var personName = 'Eric';
console.log('Hello ' + personName + 
', would you like to learn some python today');
*/

/*
// Advanced Steps
let personName = 'Eric';
console.log(`Hello ${personName}, would you like to learn some python today`);
*/



/* Q3. Name Cases: Store a person’s name in a variable, and then print that 
person’s name in lowercase, uppercase, and titlecase. */


/* let personName = 'usAmA';

let personNameLowerCase = personName.toLowerCase();    // toLowerCase()
console.log(personNameLowerCase);

let personNameUpperCase = personName.toUpperCase();    // toUpperCase()
console.log(personNameUpperCase);

let firstLetter = personName[0];                       // title case

let firstLetterCapital = firstLetter.toUpperCase();

let remainingLetters = personName.slice(1);

let remainingLettersLowerCase = remainingLetters.toLocaleLowerCase();

let titleCase = firstLetterCapital + remainingLettersLowerCase;
console.log(titleCase);
*/





/* Q4. Famous Quote: Find a quote from a famous person you admire. Print the 
quote and the name of its author. Your output should look something like 
the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried 
anything new.” */

// let quoteAuthor = "Albert Einstein";

// let quoteText = `A person who never made a mistake never tried anything new.`;

// console.log(`${quoteAuthor} once said, ${quoteText}`);





/* Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous 
person’s name in a variable called famous_person. Then compose your message 
and store it in a new variable called message. Print your message. */

/*
let famous_person = 'Albert Einstein';

let message = `${famous_person} once said, "A person who never made a mistake never tired anything new."`;

console.log(message);
*/





/* Q6. Stripping Names: Store a person’s name, and include some whitespace 
characters at the beginning and end of the name. Make sure you use each 
character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after 
striping the white spaces. */


/*
let personName = "\t Usama Israr \n"; // Storing name with whitespace

// Printing name with whitespace
console.log("Name with whitespace:");
console.log("'" + personName + "'");

// Stripping whitespace
let strippedName = personName.trim();

// Printing stripped name
console.log("\nStripped name:");
console.log("'" + strippedName + "'")
*/




/* Q7. Number Eight: Write addition, subtraction, multiplication, and 
division operations that each result in the number 8. Be sure to enclose 
your operations in print statements to see the results. */


/*
// Addition
console.log('Addition: 5 + 3 = ', 5 + 3);

// Subtraction
console.log('Subtraction: 10 - 2 = ', 10 - 2);

// Multiplication
console.log('Multiplication: 4 * 2 = ', 4 * 2);

// Division
console.log('Division: 16 / 2 = ', 16 / 2);
*/




/* 8. You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on 
each line. */


/*
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
*/





/* Q9. Favorite Number: Store your favorite number in a variable. Then, 
using that variable, create a message that reveals your favorite number. 
Print that message. */

/*
let favoriteNumber = 7;

let myMessage = 'My favorite number is: ' + favoriteNumber;

console.log(myMessage);
*/




/* Q10. Adding Comments: Choose two of the programs you’ve written, and add 
at least one comment to each. If you don’t have anything specific to write 
because your programs are too simple at this point, just add your name and 
the current date at the top of each program file. Then write one sentence 
describing what the program does. */


/*
First Program
Program: Stripping Names
Author: Usama Israr Khan
Date: 24-04-2024
Description: This program stores a person's name with whitespace characters,
prints the name with whitespace, and then prints the name after stripping 
the whitespace.
*/

/*
let personName = "\t Usama \n"; // Storing name with whitespace

// Printing name with whitespace
console.log("Name with whitespace:");
console.log("'" + personName + "'");

// Stripping whitespace
let strippedName = personName.trim();

// Printing stripped name
console.log("\nStripped name:");
console.log("'" + strippedName + "'");



// Second Program
// Program: Operations Resulting in 8
// Author: Usama Israr Khan
// Date: 24-04-2024
// Description: This program demonstrates addition, subtraction, multiplication, 
// and division operations that each result in the number 8.

// Addition operation
console.log("Addition: 5 + 3 = ", 5 + 3);

// Subtraction operation
console.log("Subtraction: 10 - 2 = ", 10 - 2);

// Multiplication operation
console.log("Multiplication: 4 * 2 = ", 4 * 2);

// Division operation
console.log("Division: 16 / 2 = ", 16 / 2);
*/





/* Q11. Names: Store the names of a few of your friends in a array called 
names. Print each person’s name by accessing each element in the list, one 
at a time. */

/*
let names: string[] = ['Usama','Hamza','Abdullah','Ali','Usman'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}
*/




/* Q12. Greetings: Start with the array you used in Exercise 11, but instead 
of just printing each person’s name, print a message to them. The text of 
each message should be the same, but each message should be personalized 
with the person’s name. */

/*
let names = ['Asad','Hamza','Usama','Ali'];

names.forEach( names => {
    console.log(`Hello ${names}, how are you?`);
    
})
*/




/* Q13. Your Own Array: Think of your favorite mode of transportation, such 
as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.” */


/*
// Define an array of favorite modes of transportation
const favoriteTransportation: string[] = ["Tesla Model S", "Honda CBR1000RR", "Vespa Primavera", "Toyota Tacoma"];

favoriteTransportation.forEach( transport => {
    console.log(`I would like to own a ${transport}`);
    
})
*/





/* Q14. Guest List: If you could invite anyone, living or deceased, to 
dinner, who would you invite? Make a list that includes at least three 
people you’d like to invite to dinner. Then use your list to print a 
message to each person, inviting them to dinner. */

/*
let invitePerson = ['Asad','Hamza','Ali','Hassan'];

invitePerson.forEach( person => {
    console.log(`Dear ${person}, I would like to invite you to dinner`);
    
})
*/




/* Q15. Changing Guest List: You just heard that one of your guests can’t 
make the dinner, so you need to send out a new set of invitations. You’ll 
have to think of someone else to invite. 

• Start with your program from Exercise 14. Add a print statement at 
the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with 
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is 
still in your list. */ 



/*
// original list
let inviteGuest = ['Asad','Umar','Hamza','Ali'];

function invitationMessage(guest: string) {
    console.log(`Dear ${guest}, I would like to invite you to dinner`);
    
}

inviteGuest.forEach( guest => {
    invitationMessage(guest);
    
})

// Remove a guest who can't make it and add a new guest
const notComing = 'Hamza';
const newGuest = 'Usman';

console.log(`Unfortunately ${notComing} can't make it to dinner`);

inviteGuest = inviteGuest.map( (guest) => ( guest === notComing ? newGuest: guest));

inviteGuest.forEach( guest => {
    invitationMessage(guest);
})
*/





/* Q16. More Guests: You just found a bigger dinner table, so now more space 
is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the 
end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one 
new guest to the end of your list. • Print a new set of invitation messages, 
one for each person in your list. */


/*
let inviteGuest = ['Asad','Umar','Hamza','Ali'];

function invitationMessage(guest) {
    console.log(`Dear ${guest}, I would like to invite you to take a dinner.`);
    
}

const notComing = 'Umar';
const newGuest = 'Usman';

inviteGuest = inviteGuest.map( (guest) => ( guest === notComing ? newGuest : guest));


inviteGuest.forEach(guest => {
    invitationMessage(guest);
})

inviteGuest.unshift('Hassan');       // first guest   starts  from zero index

inviteGuest.splice(3,0,'Ahsan');     // second guest  middle of an array

inviteGuest.push('Usama');           // third guest   end of an array

inviteGuest.forEach(guest => {
    invitationMessage(guest);    
})
*/





/* Q17. Shrinking Guest List: You just found out that your new dinner table 
won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain 
in your list. Each time you pop a name from your list, print a message to 
that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting 
them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end 
of your program. 


/Print your list to make sure you actually have an empty list at the end */

/*
let inviteGuest = ['Asad','Umar','Hamza','Ali'];

function invitationMessage(guest) {
    console.log(`Dear ${guest}, I would like to invite you to dinner`);
    
}

inviteGuest.forEach( guest => {
    invitationMessage(guest);
})

// console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner");


while(inviteGuest.length > 2) {
    const removedGuest = inviteGuest.pop();
    console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
    
}

console.log(`${inviteGuest[0]} and ${inviteGuest[1]}, you're still invited to dinner!`);

inviteGuest.pop();
inviteGuest.pop();

console.log(inviteGuest);
*/




/* Q18. Seeing the World: Think of at least five places in the world you’d 
like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical 
order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order 
of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has 
changed.

• Reverse the order of your list again. Print the list to show it’s back to 
its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to 
show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed. 

• Sort to change your array so it’s stored in reverse alphabetical order. */


/*
let favorite_places = ['Toronto','Paris','New york','Los angles','Carlifornia','Maldiv'];

console.log('Original array ', favorite_places);

console.log('Alphabetical order ', [...favorite_places].sort()); //Sorting the array in alphabetical order

console.log('still original order ', favorite_places);      // original order

console.log('Reverse order ', [...favorite_places].sort().reverse());   //Reversing the order of the array

console.log('Still original order ', favorite_places);

console.log('Changed array reverse order', favorite_places.reverse());   //Reversing the order of the array

console.log('Again reverse, back original order ', favorite_places.reverse());  //Reversing the order of the array

console.log('changed array, Sorted order ', favorite_places.sort());

console.log('Sorted and reverse order ', favorite_places.sort().reverse());
*/





/* Q19. Dinner Guests: Working with one of the programs from Exercises 14 
through 18, print a message indicating the number of people you are inviting 
to dinner. */


/*
let invitePerson = ['Asad','Hamza','Ali','Hassan'];

console.log(`${invitePerson.length} peoples are invited for dinner`);
*/





/* Q20. Think of something you could store in a array. For example, you could 
make a list of mountains, rivers, countries, cities, languages, or anything 
else you’d like. Write a program that creates a list containing these items. 


make a list of mountains, rivers, countries, cities, languages, or anything */

/*
let favorite_things = ['Mount Everest','Amazon river','USA','New york','English US','Mango'];

console.log(favorite_things);
*/





/* Q21. They think of something you could store in a TypeScript Object. Write 
a program that creates Objects containing these items. */


/*
let favorite_things_object = {
    mountain: 'Mount Everest',
    river: 'Amazon river',
    country: 'USA',
    city: 'New york',
    language: 'English US',
    fruit: 'Mango'
}

console.log(favorite_things_object);
*/









/* Q22. Intentional Error: If you haven’t received an array index error in one of 
your programs yet, try to make one happen. Change an index in one of your 
programs to produce an index error. Make sure you correct the error before 
closing the program. */


/*
let myArray = [50,60,70];
console.log('Before Index Error');
try{
    // Intentionally causing Array Index Out Of Bounds Exception
    console.log("Element at index [4] is " + myArray[4]);
}
catch(err){
    console.error(`Oops! An error occurred: ${err}`);
}
finally{
    console.log("Element at index [4] is " + myArray[4]);
}
*/






/* Q23. Conditional Tests: Write a series of conditional tests. Print a 
statement describing each test and your prediction for the results of each 
test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line 
evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and 
another 5 tests evaluate to False. */

/*
let age: number = 22;
let studentName: string = 'Usama';
let isStudent: boolean = true;
let car: string = 'BMW';
let fruits: string[] = ['apple', 'banana', 'orange'];
let numberArray: number[] = [1, 2, 3, 4, 5];

console.log("Is age > 18? I predict True.", age > 18);
console.log("Is age < 20? I predict False.", age < 20);

console.log("Is name == 'Usama'? I predict True.", studentName == 'Usama');
console.log("Is studentName == 'Bob'? I predict False.", studentName == 'Bob');

console.log("Is isStudent true? I predict True.", isStudent);
console.log("Is isStudent false? I predict False.", !isStudent);

console.log("Is car == 'BMW'? I predict True.", car == 'BMW');
console.log("Is car == 'toyota'? I predict False.", car == 'toyota');

console.log("Is 'banana' included in fruits? I predict True.", fruits.includes('banana'));
console.log("Is 'grape' included in fruits? I predict False.", fruits.includes('graps'));
*/




/* Q24. More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons, write more tests. Have 
at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less 
than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


/*
let myString = 'Usama';
console.log('Equality ',myString == 'Usama');
console.log('Inequality ',myString == 'Hamza');

let myStringLowerCase = myString.toLowerCase();
console.log('Is Lower case function ', myStringLowerCase == 'usama');
console.log('Is Lower case function ', myStringLowerCase == 'Usama');

console.log("It's length equals to 5 ", myString.length == 5);
console.log("It's length equals to 3 ", myString.length == 3);

console.log("It's length smaller than 6 ", myString.length < 6);
console.log("It's length greater than 5 ", myString.length > 5);

console.log("It's length smaller than equals to 5 ", myString.length <= 5);
console.log("It's length greater than equals to 5 ", myString.length >= 5);
*/




/* Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a 
variable called alien_color and assign it a value of 'green', 'yellow', or 
'red'.

• Write an if statement to test whether the alien’s color is green. If it 
is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another 
that fails. (The version that fails will have no output.) */


/*
let alien_color = 'green';
if(alien_color ==='green') {
    console.log('You just earned 5 points!');
} else {
    
}
*/




/* Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 
5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just 
earned 10 points.

• Write one version of this program that runs the if block and another that 
runs the else block.*/

/*
// version 1 running if block
let alien_color = 'green';

if(alien_color == 'green') {
    console.log('You just earn 5 points');
    
}
else {
    console.log('You just earn 10 points');
    
}
*/

/*
// version 2 running else block
let alien_color = 'red';

if(alien_color == 'green') {
    console.log('You just earn 5 points');
    
}
else {
    console.log('You just earn 10 points');
    
}
*/





/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an 
if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for 
the appropriate color alien. */


/*
// version 1 alien_color green
let alienColor = "green";

if (alienColor ==="green"){
    console.log("You just earned  5 points for shooting the alien.");
}
else if(alienColor === 'yellow'){
    console.log("You just earned  10 points.")
}
else if(alienColor === 'red') {
    console.log("You just earned 15 points");
    
}
*/

/*
// version 2 alien_color yellow
let alienColor = "yellow";

if (alienColor ==="green"){
    console.log("You just earned  5 points for shooting the alien.");
}
else if(alienColor === 'yellow'){
    console.log("You just earned  10 points.")
}
else if(alienColor === 'red') {
    console.log("You just earned 15 points");
    
}
*/


/*
// version 3 alien_color red
let alienColor = "red";

if (alienColor ==="green"){
    console.log("You just earned  5 points for shooting the alien.");
}
else if(alienColor === 'yellow'){
    console.log("You just earned  10 points.")
}
else if(alienColor === 'red') {
    console.log("You just earned 15 points");
    
}
*/






/* 28. Stages of Life: Write an if-else chain that determines a person’s stage 
of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a 
baby.

• If the person is at least 2 years old but less than 4, print a message that 
the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that 
the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that 
the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that 
the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */


/*
let person_age = 23;

if(person_age < 2) {
    console.log('You are a baby');
}
else if(person_age >= 2 && person_age < 4) {
    console.log('You are a toddler');   
}
else if(person_age >= 4 && person_age < 13) {
    console.log('You are a kid');   
}
else if(person_age >= 13 && person_age < 20) {
    console.log('You are a teeneger');   
}
else if(person_age >= 20 && person_age < 65) {
    console.log('You are a adult');   
}
else if(person_age >= 65) {
    console.log('You are a elder');   
}
*/






/* 29. Favorite Fruit: Make a array of your favorite fruits, and then write a 
series of independent if statements that check for certain fruits in your 
array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of 
fruit is in your array. If the fruit is in your array, the if block should 
print a statement, such as You really like bananas! */


/*
let favorite_fruits: string[] = ['banana','mango','orange','apple'];

if (favorite_fruits.includes('banana')) {
    console.log('I like banana!');
}

if (favorite_fruits.includes('mango')) {
    console.log('I like mango!');
}

if (favorite_fruits.includes('orange')) {
    console.log('I like orange!');
}

if (favorite_fruits.includes('apple')) {
    console.log('I like apples!');
    
}

if(favorite_fruits.includes('graps')){
    console.log('graps not add in my list');
    
}
*/






/* 30. Hello Admin: Make a array of five or more usernames, including the 
name 'admin'. Imagine you are writing code that will print a greeting to 
each user after they log in to a website. Loop through the array, and print 
a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, 
would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for 
logging in again. */


/*
let userName = ['Usama','Hamza','Asad','Ali','Umar','Hassan'];

for(let user of userName) {
    if(user == 'Usama') {
        console.log(`Hello ${user}, would you like to see a status report`);
        
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
        
    }
}
*/






/* 31. No Users: Add an if test to Exercise 28 to make sure the list of users is 
not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct 
message is printed. */


/*
let userName = ['Usama','Hamza','Asad','Ali','Umar','Hassan'];

userName = [];

if(userName.length === 0) {
    console.log('We need to find some user!');
    
}
else {
    console.log('We have some users.');
    
}
*/






/* 32. Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or 
two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already 
been used. If it has, print a message that the person will need to enter a 
new username. If a username has not been used, print a message saying that 
the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 
'JOHN' should not be accepted. */


/*
let current_users = ['hamza','asad','ali','umar','abdullah'];

let new_users = ['usama','usman','asad','abdullah','zayn'];

function isUsernameTaken(username: string): boolean {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

new_users.forEach(user => {
    if (isUsernameTaken(user)) {
        console.log(`Sorry, the username '${user}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
});
*/






/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, 
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending 
for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 
9th", and each result should be on a separate line. */


/*
let myNumbers = [1,2,3,4,5,6,7,8,9];

myNumbers.forEach(number => {
    if(number === 1) {
        console.log(number + 'st');
        
    }
    else if(number === 2) {
        console.log(number + 'nd');
        
    }
    else if(number === 3) {
        console.log(number + 'rd');
        
    }
    else{
        console.log(number + 'th');
        
    }
    
})
*/







/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store 
these pizza names in a array, and then use a for loop to print the name of 
each pizza.

• Modify your for loop to print a sentence using the name of the pizza 
instead of printing just the name of the pizza. For each pizza you should 
have one line of output containing a simple statement like I like pepperoni 
pizza.

• Add a line at the end of your program, outside the for loop, that states 
how much you like pizza. The output should consist of three or more lines 
about the kinds of pizza you like and then an additional sentence, such as 
I really love pizza! */


/*\
let favoritePizzas = ['BBQ Pizza', 'Chickan Fajita Pizza', 'Sicilian Pizza'];

for(let pizza of favoritePizzas) {
    console.log(pizza);
    
}

for(let pizza of favoritePizzas) {
    console.log(`I really like ${pizza}.`);
    
}

console.log('I love Pizzas');
*/





/* 35. Animals: Think of at least three different animals that have a common 
characteristic. Store the names of these animals in a list, and then use a 
for loop to print out the name of each animal. • Modify your program to 
print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in 
common. You could print a sentence such as Any of these animals would make 
a great pet! */


/*
let petNames = ['dog', 'cat', 'goat'];

for(let pet of petNames) {
    console.log(pet);
    
}

for(let pet of petNames) {
    console.log(`A ${pet} would make a great pet`);
    
}
*/





/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and 
the text of a message that should be printed on the shirt. The function 
should print a sentence summarizing the size of the shirt and the message 
printed on it. Call the function. */


/*
function make_shirt(size: number, message: string) {
    console.log(`The shirt size is ${size} and print on it is ${message}`);
    
}

make_shirt(24, 'Hrray Potter');
*/





/* 37. Large Shirts: Modify the make_shirt() function so that shirts are 
large by default with a message that reads I love TypeScript. Make a large 
shirt and a medium shirt with the default message, and a shirt of any size 
with a different message. */


/*
function make_shirt(size: number = 24 && 18, messages: string = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and print message on it ${messages}`);
    
}

make_shirt();
*/





/* 38. Cities: Write a function called describe_city() that accepts the name 
of a city and its country. The function should print a simple sentence, such 
as Karachi is in Pakistan. Give the parameter for the country a default 
value. Call your function for three different cities, at least one of which 
is not in the default country. */


/*
function describe_city(city: string = 'Karachi', country: string = 'Pakistan') {
    console.log(`${city} is in ${country}`);
    
}

describe_city();
*/




/* 39. City Names: Write a function called city_country() that takes in the 
name of a city and its country. The function should return a string 
formatted like this:

"Lahore, Pakistan" 

Call your function with at least three city-country pairs, and print 
the value that’s returned. */


/*
function city_country(city: string, country: string) {
    return console.log(`"${city}, ${country}"`);
    
}

city_country('Karachi', 'Pakistan');
city_country('Bristol', 'England');
city_country('New York', 'America');
*/





/* 40. Album: Write a function called make_album() that builds a Object 
describing a music album. The function should take in an artist name and an 
album title, and it should return a Object containing these two pieces of 
information. Use the function to make three dictionaries representing 
different albums. Print each return value to show that Objects are storing 
the album information correctly. Add an optional parameter to make_album() 
that allows you to store the number of tracks on an album. If the calling 
line includes a value for the number of tracks, add that value to the 
album’s Object. Make at least one new function call that includes the 
number of tracks on an album. */


/*
interface Album {
    artistName: string,
    albumTitle: string,
    numberOfTracks?: number
}


function make_album(artistName: string, albumTitle: string, numberOfTracks?: number) {
    const myAlbum: Album = {
        artistName: artistName,
        albumTitle: albumTitle,
    }

    if(numberOfTracks !== undefined) {
        myAlbum.numberOfTracks = numberOfTracks;
    }

    return myAlbum;
}


const album_1 = make_album('Artist_1', 'Album title 1', 10);
const album_2 = make_album('Artist_2', 'Album title 2');
const album_3 = make_album('Artist_3', 'Album title 3', 30);

console.log(album_1);
console.log(album_2);
console.log(album_3);
*/





/* 41. Magicians: Make a array of magician’s names. Pass the array to a 
function called show_magicians(), which prints the name of each magician 
in the array. */


/*
let megician_names: string[] = ['Daniel', 'Gabriel', 'Alejandro', 'Diego'];

function show_megician(megicians: string[]) {
    for(let i = 0; i < megicians.length; i ++) {
        console.log(megicians[i]);
        
    }
}

show_megician(megician_names);
*/





/* 42. Great Magicians: Start with a copy of your program from Exercise 39. Write 
a function called make_great() that modifies the array of magicians by 
adding the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified. */


/*
interface Megician {
    name: string;
}

const megicians: Megician[] = [
    {name: 'Daniel'},
    {name: 'Gabriel'},
    {name: 'Alejandro'}
]

function make_great(megicians: Megician[]): void {
    for(let megician of megicians) {
        megician.name = `The Great ${megician.name}`;
    }
}

function show_magicians(megicians: Megician[]): void {
    for(let megician of megicians) {
        console.log(megician);
        
    }
}

make_great(megicians);

show_magicians(megicians);
*/






/* 43. Unchanged Magicians: Start with your work from Exercise 40. Call the 
function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and 
store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with 
the Great added to each magician’s name. */


/*
interface Magician {
    name: string;
}

const magicians: Magician[] = [
    {name: 'Daniel'},
    {name: 'Gabriel'},
    {name: 'Alejandro'}
]

function make_great(megicians: Magician[]): Magician[] {
    const modifiedMagicians: Magician[] = [];

    for(let magician of magicians) {
        modifiedMagicians.push({name: `The Great ${magician.name}`});
    }

    return modifiedMagicians;
}


function show_magicians(magicians: Magician[]): void {
    for(let magician of magicians) {
        console.log(magician.name);
        
    }
}

const geatMagicians = make_great([...magicians]);

show_magicians(magicians);

show_magicians(geatMagicians);
*/






/* 44. Sandwiches: Write a function that accepts a array of items a person 
wants on a sandwich. The function should have one parameter that collects as 
many items as the function call provides, and it should print a summary of the 
sandwich that is being ordered. Call the function three times, using a 
different number of arguments each time. */


/*
function makeSandwich(...items: string[]):void {
    if(items.length === 0) {
        console.log('You ordered an empty sandwich. Please specify some items.');
        
    }
    else {
        console.log('You ordered a sandwich with the following items:');
        items.forEach(item => {console.log(`- ${item}`);
        })
        
    }
}

makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich('Turkey', 'Tomato');
makeSandwich();
*/






/* 45. Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should 
then accept an arbitrary number of keyword arguments. Call the function with 
the required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly. */


/*
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}


function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any} []):Car {
    const car: Car = {
        manufacturer,
        modelName,
        ...extras.reduce((acc, extra) => ({ ...acc, ...extra}), {})
    };

    return car;
}

const carInfo = storeCarInfo("Toyota", "Camry", { color: "Blue" }, { year: 2022 });

console.log(carInfo);
*/
