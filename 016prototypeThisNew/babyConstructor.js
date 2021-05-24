Person.count = 0;  // count of created new objects
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.birthYear = new Date().getFullYear() - age;
  Person.count += 1
}
Person.prototype.greeting = function () {
  console.log(`Hello dear ${this.name}`);
};
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const b1 = new Baby("Hayk", 3, "ball");
console.log(b1);
console.log(b1.play());
b1.greeting();

const b2 = new Baby("Davit", 5, "car");
console.log(Person.count);