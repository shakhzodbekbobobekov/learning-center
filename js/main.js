"use strict";
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    drive() {
        return (" Car is draving");
    }
}
const result = new Car("GM", "Captiva", 25000);
console.log(result.drive());
