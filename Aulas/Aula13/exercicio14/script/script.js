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