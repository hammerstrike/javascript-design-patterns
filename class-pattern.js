class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    details() {
        return `${this.model} has done ${this.miles} miles`;
    }
}
  
  
  // Usage:
  var civic = new Car("Honda Civic", 2009, 20000);
  var aspire = new Car("Ford Aspire", 1997, 5000);
  
  console.log(civic.details());
  console.log(aspire.details());
  