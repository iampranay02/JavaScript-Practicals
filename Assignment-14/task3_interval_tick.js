// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 14

let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(timer);
  }
}, 200);
