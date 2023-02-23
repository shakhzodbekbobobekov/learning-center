// const car = {
//   name: "bmw",
//   isAirBag: true,
// };
var car = {
    name: "abu",
    color: "red",
    wheels: 4,
    speed: function () {
        return 150 * this.wheels;
    }
};
var bestGM = {
    name: "Gentra",
    color: "white",
    wheels: 7,
    speed: function () {
        return 150 * this.wheels;
    }
};
var myCar = function (vehicles) {
    console.log("\n  my car ".concat(vehicles.name, "\n  my color ").concat(vehicles.color, "\n  my wheels ").concat(vehicles.wheels, "\n  speed is ").concat(vehicles.speed(), "\n  "));
};
myCar(car);
myCar(bestGM);
