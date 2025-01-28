function isEven(number) {
    return number % 2 === 0;
  }
  
  let number = 10;
  if (isEven(number)) {
    console.log(number + " is even."); // Output: 10 is even.
  } else {
    console.log(number + " is odd.");
  }