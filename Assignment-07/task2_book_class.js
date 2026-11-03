// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 7

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}
const b = new Book("Algorithms", 320);
console.log(b.summary());
