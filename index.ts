// const car = {
//   name: "bmw",
//   isAirBag: true,
// };

// const loggerCalc = ({
//   name,
//   isAirBag,
// }: {
//   name: string;
//   isAirBag: boolean;
// }): void => {
//   console.log(`my car name is ${name}, has isAirBag ${isAirBag} `);
// };
// loggerCalc(car);

// const amg = {
//   color: "black",
//   isAirBag: true,
//   locations: {
//     country: "Germany",
//     city: "Bayern",
//   },
//   setColor(color: string): void {
//     this.color = color;
//   },
// };

// const { color }: { color: string } = amg;
// const {locations: { country, city }}: { locations: { country: string; city: string } } = amg;

// const { color }: { color: string } = amg;
// const {
//   locations: { country, city },
// }: { locations: { country: string; city: string } } = amg;

interface Public {
  name: string;
  color: string;
  wheels: number;
  speed(): number;
}

const car = {
  name: "abu",
  color: "red",
  wheels: 4,
  speed():number {
    return 150 * this.wheels
  }
};

const bestGM = {
  name: "Gentra",
  color: "white",
  wheels: 7,
  speed():number {
    return 150 * this.wheels
  }
}

const myCar = (vehicles: Public): void => {
  console.log(`
  my car ${vehicles.name}
  my color ${vehicles.color}
  my wheels ${vehicles.wheels}
  speed is ${vehicles.speed()}
  `);
};

myCar(car);
myCar(bestGM);
