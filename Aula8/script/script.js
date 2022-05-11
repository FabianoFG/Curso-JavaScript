// let str = `Qualquer conteúdo`;
// let str2 = `Uma outra string ${str}`;

// let str3 = "Qualquer conteúdo";
// let str4 = `Uma outra string `+str3;

// console.log(str2);

// //arrays

// let frutas = ['Uva', 'Banana', 'Laranja', 'Melancia'];

// console.log(frutas[0]);

// let euGosto = `Eu gosto de ${frutas[2]}`;

// console.log(euGosto);

// console.log(frutas[0],frutas[1],frutas[2],frutas[3]);

// console.log(frutas);

const Pessoa = [
    'José',
    23,
    'solteiro',
    'bola',
    1.70,
    cores = ['azul','preto','salmão','amarelo']
];

let key = 0;

console.log('José'[3]);//strings são reconhecidas como arrays pelo JS
console.log(`Tentando imprimir um array ${Pessoa[5][key]}`);//array bidimensional

// (function(pessoa){
//     const jose = `Meu nome é ${pessoa[0]}. Tenho ${pessoa[1]} anos, sou ${pessoa[2]}\
// e gosto de jogar ${pessoa[3]}. Minha altura é de ${pessoa[4]} metros.`;

//     document.write(jose);
// })(Pessoa)

//Exercício
function calcularImc(){
    var nome = prompt('Digite seu nome');
    var altura = prompt('Digite sua altura');
    var peso = prompt('Digite seu peso');
    var imc = Number(peso)/(Number(altura)**2);

    document.write(`Nome........: ${nome}<br>Altura(m)..: ${altura}<br>Peso(Kg)...: ${peso}<br>IMC...........: ${imc}`);
}
calcularImc();