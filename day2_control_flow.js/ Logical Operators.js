let isLoggedIn = true;
let hasPremiumAccount = false;

if (isLoggedIn && hasPremiumAccount) {
  console.log("Welcome, Premium User!");
} else if (isLoggedIn || hasPremiumAccount) {
  console.log("Welcome, User!");
} else {
  console.log("Please log in.");
}

let isSunny = false;
console.log(!isSunny); // Output: true
