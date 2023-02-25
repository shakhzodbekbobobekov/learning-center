class Car {
  brand: string;
  model: string;
  price: number;
  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  drive() {
    return " Car is draving";
  }
}

class NewCar extends Car {
  yoqilgiTuri: string;
  modelPlus: string;
  constructor(brand: string, model: string, price: number,yoqilgiTuri: string, modelPlus: string) {
    super(brand, model, price);
    this.yoqilgiTuri = yoqilgiTuri;
    this.modelPlus = modelPlus; 
  }
}

const result = new Car("GM", "Captiva", 25000);
const result2 = new NewCar("Tesla", "X2", 75000, "ECO", "Super X2");

console.log(result);
console.log(result2);
