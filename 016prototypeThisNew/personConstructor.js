function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.compareAge = function ({ name, age }) {
    if (age > this.age) {
      return `${name} is older than me`;
    } else if (age === this.age) {
      return `${name} is the same age as me`;
    } else {
      return `${name} is younger then me`;
    }
  };

  this.eat = function (someFood) {
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    }
  };

  this.poop = function () {
    this.stomach.length = 0;
  };

  this.toString = function () {
    return `${this.name},${this.age}`;
  };
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

// console.log(p1.compareAge(p2));
// console.log(p2.compareAge(p1));
// console.log(p1.compareAge(p3));

p1.eat("apple");
p1.eat("meat");
p1.eat("milk");
// console.log(p1.stomach);
p1.poop();
// console.log(p1.stomach.length);

// console.log(p3.toString());
