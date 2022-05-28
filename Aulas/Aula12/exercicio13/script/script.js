//Exercício

function inverter(palavra){
    let palavraInvertida =[];
    for(let l=palavra.length; l > 0;l--){
        palavraInvertida.push(palavra[l-1]);
    }
    console.log(palavraInvertida.join(''));
}

inverter('Abacate');