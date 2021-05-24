function Person(name, age) {
  this.name = name;
  this.age = age;
  this.birthYear = new Date().getFullYear() - age;
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

const hayk = new Baby("Hayk", 3, "ball");
console.log(hayk);
console.log(hayk.play());
hayk.greeting();
