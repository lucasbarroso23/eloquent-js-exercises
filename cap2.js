/* 1 - Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

let count = 0;
console.log('================= QUESTÃO 1 =====================');
while (count < 8) {
  console.log('*'.repeat(count));
  count++;
}

/* 2 - FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

let count2 = 1;
console.log('================= QUESTÃO 2 =====================');

while (count2 <= 100) {
  if (count2 % 3 === 0 && count2 % 5 === 0) {
    console.log('BuzzFizz');
  } else if (count2 % 5 === 0) {
    console.log('Buzz');
  } else if (count2 % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(count2);
  }

  count2++;
}

/* 3 - Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

console.log('================= QUESTÃO 3 =====================');

/* for (let a = 0; a < 8; a++) {
  for (let b = 0; b < 8; b++) {
    if ((a + b) % 2 === 0) {
      console.log(' ');
    } else {
      console.log('#');
    }
  }
  console.log('\n');
} */

let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
