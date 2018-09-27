var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (numeroum, numerodois) {
        return numerodois + numerodois;
    };
    Calculadora.prototype.subtrair = function (numeroum, numerodois) {
        return numeroum - numerodois;
    };
    Calculadora.prototype.multiplicar = function (numeroum, numerodois) {
        return numeroum * numerodois;
    };
    Calculadora.prototype.dividir = function (numeroum, numerodois) {
        return numeroum / numerodois;
    };
    return Calculadora;
}());
var calculo = new Calculadora();
var somar = calculo.somar(2, 3);
var subtrair = calculo.subtrair(2, 5);
var multiplicar = calculo.multiplicar(5, 4);
var dividir = calculo.dividir(8, 4);
console.log(somar);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);
