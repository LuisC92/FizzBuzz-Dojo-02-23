const fizzBuzz = (buzzFizz) => {
  if (buzzFizz % 3 == 0) {
    console.log(`fizz`); 

  } else if (buzzFizz % 5 == 0) {
    console.log(`buzz`);

  } else if (buzzFizz % 3 , 5 == 0) {
    console.log(`fizzbuzz`); 

  } else {
    console.log(`buzzFizz`);
  }
  /*the number in the case where the latter 
  is neither a multiple of 3 nor a multiple of 5*/
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
