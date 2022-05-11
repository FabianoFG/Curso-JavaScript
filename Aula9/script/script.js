//concat(); // concatena arrays "soma"
// let nomes1 = ['Fabiano','André','Marcelo','Juliano'];
// let nomes2 = ['Camila','Flávia','Bianca'];

// let todosOsNomes = nomes1.concat(nomes2);

// console.log(nomes1);
// console.log(nomes2);
// console.log(todosOsNomes);

// console.log(`O array nomes1 possui ${nomes1.length} elementos`);

//indexOf // determina o índice de determinado elemento do array, pelo seu valor
// let nomes1 = ['Fabiano','André','Marcelo','Juliano'];

// console.log(nomes1.indexOf('Juliana'));

// let buscaNome = 'André';

// if(nomes1.indexOf(buscaNome)!=(-1)){
//     alert(`Eu encontri o nome ${buscaNome}! Ele está na posição ${nomes1.indexOf(buscaNome)}`);
// }else{
//     alert(`Não encontrei o nome ${buscaNome}`);
// }

//join // une os elementos do array em uma string
// let nomes1 = ['Fabiano','André','Marcelo','Juliano'];

// console.log(nomes1);
// console.log(nomes1.join());

//push // inserte elemento no fim do array
// let frutas = [];
// frutas.push('maçã');
// frutas.push('banana','abacaxi');

// let insertFruta = 'banana';

// if(frutas.indexOf(insertFruta)==(-1)){
//     frutas.push(insertFruta);
//     console.log(`A fruta ${insertFruta} foi inserida na lista!`);
// }else if(frutas.indexOf(insertFruta)!=(-1)){
//     console.log(`A fruta ${insertFruta} já está na lista!`);
// }

// console.log(frutas);

//pop // retira o último elemento do array
// let frutas = [];
// frutas.push('maçã');
// frutas.push('banana','abacaxi');

// frutas.pop();
// console.log(frutas);

//reverse // inverte a ordem dos elementos
// let frutas = [];
// frutas.push('maçã');
// frutas.push('banana','abacaxi');

// frutas.reverse();

// console.log(frutas);

//shift // retira o primeiro elemento do array
// let frutas = [];
// frutas.push('maçã');
// frutas.push('banana','abacaxi');

// frutas.shift();

// console.log(frutas);

//sort // ordena os elementos do array
// let numeros = ['4','72','265','83','3','0','94'];//não funciona com números em string//só numbers
// let letras = ['g','s','k','t','p','v','n','a','x'];

// numeros.sort();
// letras.sort();

// console.log(numeros);
// console.log(letras);

//toString // converte array em string
// let frutas = ['uva','abacaxi','banana','abacate'];
// let numeros = [3,5,7,3,5,7,8,3,0];
// let variedades = [
//     bananas = ['nanica','da terra','prata','caturra'],
//     maca = ['do amor','verde'],
//     uva = ['roxinha','verdinha']
// ]

// console.log(frutas.toString());
// console.log(numeros.toString());
// console.log(numeros.join());
// console.log(variedades.toString());

//SPLICE // remove elemento pelo seu índice // faz um recorte de elementos
// let bananas = ['nanica','da terra','prata','caturra'];
// let novaLista = bananas.splice(1,2);
// console.log(bananas);
// console.log(novaLista);

//Exercício
let nomes = ['Mariana','Marina','Maria','Marilúcia','Mariela'];
let novoNome = 'Maristela';
let escolherNome = 5;

function infoNomes(lista,novo,escolher){
    nomes.push(novo);
    document.write(`Quantidade de elementos do array: ${lista.length}<br>`);
    document.write(`Você escolheu o índice ${escolher}, que é o nome ${lista[escolher]}<br>`);
    document.write(`A quantidade atual de elementos do array é de ${lista.length}<br>`);
}
infoNomes(nomes,novoNome,escolherNome);