function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
  if (this.tank <= 0) {
    console.log("fuel is empty");
  }
  console.log(`I ran out of fuel ${this.odometer} miles`);
};

const toyota = new Car("Toyota", 100 / 10);

toyota.fill(50);
toyota.drive(100);
toyota.fill(20);
toyota.drive(600);
console.log("tank::", toyota.tank);
console.log("odometer::", toyota.odometer);
