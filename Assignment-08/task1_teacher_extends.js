// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 8

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi, I am " + this.name;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
const t = new Teacher("Anita", "Maths");
console.log(t.greet());
