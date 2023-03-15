const fizzBuzz = (number) => {
  if ((number % 3  === 0) && (number % 5 === 0)) {
    return 'fizzbuzz'
  } else if (number % 5 === 0) {
    return 'buzz'
  } else if (number % 3 === 0) {
    return 'fizz'}
else { return number}
};

// Check your console.log on the browser console and match all outputs
console.log(fizzBuzz(3)); // fizz
console.log(fizzBuzz(6)); // fizz
console.log(fizzBuzz(18)); // fizz
console.log(fizzBuzz(5)); // buzz
console.log(fizzBuzz(10)); //buzz
console.log(fizzBuzz(25)); // buzz
console.log(fizzBuzz(15)); // fizzbuzz
console.log(fizzBuzz(30)); // fizzbuzz
console.log(fizzBuzz(150)); // fizzbuzz
console.log(fizzBuzz(2)); // 2
console.log(fizzBuzz(8)); // 8
console.log(fizzBuzz(52)); // 52
