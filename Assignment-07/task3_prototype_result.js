// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 7

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};
const s2 = new Student("Asha", 88);
console.log(s2.result());
