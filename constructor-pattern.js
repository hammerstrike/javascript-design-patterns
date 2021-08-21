function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.details = function () {
  return `${this.model} has done ${this.miles} miles`;
};

// Usage:
var civic = new Car("Honda Civic", 2009, 20000);
var aspire = new Car("Ford Aspire", 1997, 5000);

console.log(civic.details());
console.log(aspire.details());
