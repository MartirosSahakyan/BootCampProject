function Person(name, age) {
  this.name = name;
  this.age = age;
  this.birthYear = new Date().getFullYear() - age;
  this.greeting = function () {
    console.log(`Hello dear ${this.name}`);
  };
}
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `Playing with ${this.favoriteToy}`;
  };
}

const hayk = new Baby("Hayk", 3, "ball");
console.log(hayk);
hayk.greeting();
