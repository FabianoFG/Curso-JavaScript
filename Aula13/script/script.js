// let i = 0;
// for(let x=0; x<=10;x++){
//     console.log(`O valor da iteração é ${x} e do i é ${i++}`);
// }

// let Pessoas = {
//     nome: 'Fulano de Tal',
//     idade: 45,
//     heroi: 'Qualquer'

// }
// //let arr = ["nome" => "Fabiano"]//array associativo - possui chaves para cada valor

// for(let propriedade in Pessoas){//PARA OBJETOS
//     console.log(Pessoas[propriedade]);
// }

// let frutas = ['uva','banana','maçã','abacate'];

// for(let nomeFruta of frutas){//PARA ARRAYS
//     console.log(nomeFruta);
// }

let Herois = [
    {
        identidadeSecreta: 'Steven Roger',
        heroi: 'Capitão América'
    },
    {
        identidadeSecreta: 'Tony Starck',
        heroi: 'Homem de Ferro'
    }
];

// let Marvel = Herois[1].identidadeSecreta;

// console.log(Marvel);

Herois.push({identidadeSecreta:'Diana', heroi:'Mulher Maravilha'});
Herois.push({identidadeSecreta:'Bruce Baner', heroi:'Incrível Hulk'});

for(let marvel of Herois){
    console.log(marvel);
    for(let m in marvel){
        console.log(`${m}: ${marvel[m]}`);
    }
}

//Exercício
let precosFrutas = {
    'maçã': 2.50,
    'pêra': 4.35,
    'abacate': 1.99,
    'mamão': 2.09,
    'laranja': 2.89
};

(function (fru){
    let total = 0;
    for(let fruta in fru){
        document.write(`Fruta: ${fruta}...Preço: ${fru[fruta].toLocaleString('pt-BR',
        {style:'currency',currency: 'BRL'})}<br>`);
        total+=fru[fruta];
    }
    document.write(`Total: ${total.toLocaleString('pt-BR',
    {style:'currency',currency: 'BRL'})}`);
})(precosFrutas);
//('pt-BR', {style:'currency', currency: 'BRL'})
// function ler(frutas){
//     for(let fruta in frutas){
//         document.write(`Fruta: ${fruta}...Preço: ${frutas[fruta].toLocaleString('pt-BR',
//         {style:'currency',currency: 'BRL'})}<br>`);
//     }
// }
// ler(precosFrutas);