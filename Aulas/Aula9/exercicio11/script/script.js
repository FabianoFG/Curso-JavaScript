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