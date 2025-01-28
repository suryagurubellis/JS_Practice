function findLargest(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  let largest = findLargest(20, 15);
  console.log("The largest number is: " + largest);