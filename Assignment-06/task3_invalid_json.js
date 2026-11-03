// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 6

const bad = "{name: Rohan}";
try {
  JSON.parse(bad);
} catch (e) {
  console.log("Invalid JSON");
}
