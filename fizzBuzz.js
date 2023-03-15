const fizzBuzz = (number) => {
  // 3. "fizzbuzz" if multiple of both 3 and 5
  if (number % 15 === 0) {
    // => if(number % 3 === 0 && number % 5 ===0){
    return "fizzbuzz";
  }
  // 1. "fizz" if multiple of 3.
  if (number % 3 === 0) {
    return "fizz";
  }
  // 2. "buzz" if multiple of 5
  if (number % 5 === 0) {
    return "buzz";
  }
  // 4. The number if neither a multiple of 3 nor a multiple of 5
  return number;
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

//! creating a loop from 0 until 100
for(let i = 0; i <=100; i++){
  console.log(fizzBuzz(i))
}
