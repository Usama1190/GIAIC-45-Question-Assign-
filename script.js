// Q1. Install Node.js, TypeScript and VS Code on your computer.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function storeCarInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, extras.reduce(function (acc, extra) { return (__assign(__assign({}, acc), extra)); }, {}));
    return car;
}
var carInfo = storeCarInfo("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
console.log(carInfo);
