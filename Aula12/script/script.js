//incremento
let n = 1;//n++;n++;n++;n++;n++;n++;n--;n--;n--;n--;
// console.log(n);
let frutas = ['melancia','manga','uva','abacate'];
frutas.push('jabuticaba');
frutas.push('laranja');

// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i]);
// }

for(let i=frutas.length-1;i>=0;i--){
    console.log(frutas[i]);
}

//Exercício

function inverter(palavra){
    let palavraInvertida =[];
    for(let l=palavra.length; l > 0;l--){
        palavraInvertida.push(palavra[l-1]);
    }
    console.log(palavraInvertida.join(''));
}

inverter('Abacate');