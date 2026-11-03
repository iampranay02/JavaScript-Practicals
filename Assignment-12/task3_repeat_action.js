// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 12

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}
repeatAction(3, (r) => console.log("Round " + r));
