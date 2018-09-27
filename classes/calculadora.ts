class calculadora{

public Calculadora(){}

public somar(): number {
    let result: number = 4+5;
    return result;
}
public subtração(): number {
    let result:number = 7-5;
    return result;
}

}

let calc: calculadora = new calculadora;
let soma = calc.somar();
let subtração = calc.subtração();
console.log(soma);
console.log(subtração);