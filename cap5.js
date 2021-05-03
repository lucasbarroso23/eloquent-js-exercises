/* 
1 - Flattening
Use the reduce method in combination with the concat method 
to “flatten” an array of arrays into a single array 
that has all the elements of the original arrays. 
*/

console.log("================= QUESTÃO 1 =====================");

function reduceConcat(array) {
  return array.reduce((flat, current) => flat.concat(current), []);
}

console.log(reduceConcat([[1, 2, 3], [3, 4], [1]]));

/* 
2 - Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update 
function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping. 
*/

console.log("================= QUESTÃO 2 =====================");

function hofLoop(value, test, update, body) {
  for (let start = value; test(start); start = update(start)) {
    body(start);
  }
}

hofLoop(
  6,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

/* 
3 - Everything
Analogous to the some method, arrays also have an every method. This one returns true 
when the given function returns true for every element in the array. In a way, some is a version 
of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method. 
*/

console.log("================= QUESTÃO 3 =====================");

function everyLoop(array, predicate) {
  for (arr in array) {
    if (!predicate(arr)) return false;
  }
  return true;
}

console.log(
  "everyLoop",
  everyLoop([2, 4], (n) => n < 10)
);

function everySome(array, predicate) {
  if (array.some((arr) => !predicate(arr))) return false;

  return true;
}

console.log(
  "everySome",
  everySome([2, 4, 9, 11], (n) => n < 10)
);

/* 
4 - Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), 
"rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. 
The characterScript and countBy functions defined earlier in the chapter are probably useful here. 
*/

console.log("================= QUESTÃO 4 =====================");

var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [
      [125184, 125259],
      [125264, 125274],
      [125278, 125280],
    ],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet",
  },
  {
    name: "Caucasian Albanian",
    ranges: [
      [66864, 66916],
      [66927, 66928],
    ],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet",
  },
  {
    name: "Ahom",
    ranges: [
      [71424, 71450],
      [71453, 71468],
      [71472, 71488],
    ],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet",
  },
];

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
