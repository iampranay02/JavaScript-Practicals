// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 8

class Locker {
  constructor(pin) {
    this.pin = pin;
  }
  checkPin(n) {
    return n === this.pin;
  }
}
const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
