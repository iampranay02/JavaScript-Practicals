// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 11

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
