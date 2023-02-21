var car = {
    name: "bmw",
    isAirBag: true
};
var loggerCalc = function (_a) {
    var name = _a.name, isAirBag = _a.isAirBag;
    console.log("my car name is ".concat(name, ", has isAirBag ").concat(isAirBag, " "));
};
loggerCalc(car);
