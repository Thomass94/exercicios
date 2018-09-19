class Animal {
    nome: string;
    especie: string;
    raca: boolean;
    tamanho: number;

    constructor(nome: string, especie: string, raca: boolean, tamanho:number) {
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.tamanho = tamanho;
    }
    imprimeAnimal():string {
        return "nome:"+this.nome;
    }
}

let animal:Animal = new Animal("dog","cão",true,12); 
let mensagem:string = animal.imprimeAnimal();
console.log(animal.nome,animal.raca);
console.log(mensagem);
