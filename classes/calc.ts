class Calculadora{
	constructor(){
	}

	public somar(numeroum: number, numerodois: number):number{
		return numerodois+numerodois;
	}
	public subtrair(numeroum: number, numerodois: number):number{
		return numeroum-numerodois;
	}
	public multiplicar(numeroum: number, numerodois: number):number{
		return numeroum*numerodois;
	}
	public dividir(numeroum: number, numerodois: number):number{
		return numeroum/numerodois;
	}

}

let calculo: Calculadora = new Calculadora();
let somar = calculo.somar(2,3);
let subtrair = calculo.subtrair(2,5);
let multiplicar = calculo.multiplicar(5,4);
let dividir = calculo.dividir(8,4);
console.log (somar);
console.log (subtrair);
console.log (multiplicar);
console.log (dividir);