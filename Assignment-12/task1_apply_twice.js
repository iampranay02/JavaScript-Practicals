// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 12

function applyTwice(fn, value) {
  return fn(fn(value));
}
function addTen(n) {
  return n + 10;
}
console.log(applyTwice(addTen, 5));
