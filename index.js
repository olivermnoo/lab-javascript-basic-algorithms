/*
### Iteration 3: Loops

  3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

  3.2 Print all the characters of the navigator's name, in reverse order, i.e., `"nhoJ"`.

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.` <br>
- `Yo, the navigator goes first definitely.` <br>
- `What?! You both have the same name?`
*/

// Iteration 1: Names and Input

let hacker1 = "Matheus";
console.log(`"The drivers name is ${hacker1}`);
let hacker2 = "Daniela";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  let hackerUperSpace = "";
  hackerUperSpace = hacker1[i];
  console.log(hackerUperSpace.toUpperCase());
  console.log(` 2`);
}

for (let i = hacker2.length; i >= 0; i--) {
  let hackerUperSpace = "";
  hackerUperSpace += hacker2[i];
  console.log(hackerUperSpace.toUpperCase());
  console.log(" ");
}
