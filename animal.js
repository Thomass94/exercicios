var Animal = /** @class */ (function () {
    function Animal(nome, especie, raca, tamanho) {
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.tamanho = tamanho;
    }
    Animal.prototype.imprimeAnimal = function () {
        return "nome:" + this.nome;
    };
    return Animal;
}());
var animal = new Animal("dog", "cão", true, 12);
var mensagem = animal.imprimeAnimal();
console.log(animal.nome, animal.raca);
console.log(mensagem);
