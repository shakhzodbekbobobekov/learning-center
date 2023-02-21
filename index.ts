const car = {
  name: "bmw",
  isAirBag: true,
};

const loggerCalc = ({
  name,
  isAirBag,
}: {
  name: string;
  isAirBag: boolean;
}): void => {
  console.log(`my car name is ${name}, has isAirBag ${isAirBag} `);
};
loggerCalc(car);
