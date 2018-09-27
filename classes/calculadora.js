var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.Calculadora = function () { };
    calculadora.prototype.somar = function () {
        var result = 4 + 5;
        return result;
    };
    calculadora.prototype.subtração = function () {
        var result = 7 - 5;
        return result;
    };
    return calculadora;
}());
var calc = new calculadora;
var soma = calc.somar();
var subtração = calc.subtração();
console.log(soma);
console.log(subtração);
