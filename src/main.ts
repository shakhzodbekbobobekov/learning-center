class Car {
    brand: string;
    model: string;
    price: number;
    constructor(brand:string, model:string, price:number){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    drive(){
        return(" Car is draving");
    }
}

const result  = new Car("GM", "Captiva", 25_000);

console.log(result.drive());