/**
 * Generates an array containing the results of the FizzBuzz challenge for numbers 1 through 15.
 * 
 * The FizzBuzz challenge is a common programming task where:
 * - Numbers divisible by 3 are replaced with "Fizz".
 * - Numbers divisible by 5 are replaced with "Buzz".
 * - Numbers divisible by both 3 and 5 are replaced with "FizzBuzz".
 * - Other numbers remain unchanged.
 * 
 * @returns {Array<string|number>} An array with the FizzBuzz results.
 */
const answer = []

// Write your code below this line


// Solve this fizzbuzz challenge

for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
        answer.push('FizzBuzz');
    } else if (i % 3 === 0) {
        answer.push('Fizz');
    } else if (i % 5 === 0) {
        answer.push('Buzz');
    } else {
        answer.push(i);
    }
}


// Don't touch the code below this line, we'll cover it later
module.exports = answer
