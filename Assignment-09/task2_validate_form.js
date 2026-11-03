// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 9

// ---------- Task 2 ----------
function validateForm(name) {
  const errors = [];
  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }
  return errors;
}
console.log(validateForm("Asha"));
console.log(validateForm(""));
