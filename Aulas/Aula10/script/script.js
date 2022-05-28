//Sinalizadores ou Flags(g/i/m/y):
//Global(g) -> busca múltiplas ocorrências na string
//Case Insensitive(i) -> busca independentemente de caixa(alta e baixa)
//Multi-linhas(m) -> busca em todas as linhas de uma string
//Sticky(y) -> busca a partir da posiçaõ atual da string
//Flags podem ser usadas separadas ou juntas, e em qualquer ordem. Podem ainda ser incluídas\
//em expressões regulares


//match() - procura uma palavra em uma string e retorna um array de mesmo nome
let nome = 'Fabiano Ferreira Gentil';

console.log(nome.match('ei'));

//search() - procura letra ou palavra e retorna sua posiçãos
console.log(nome.search('e'));
console.log(nome.search('f'));//lembrar que o JS é case-sensitive
console.log(nome.search(/f/i));//argumento i -> busca independente de caixa alta ou baixa

//replace() - localiza uma sequência de caracteres e substitui por outra
let a = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus?`;
let outraStr = a.replace(/sit/gi,'não');
console.log(outraStr);

//localeCompare() - compara se duas stringas são iguais
let gato = 'gato';
let gato2 = 'gato';
let cachorro = 'cachorro';
let nada = null;// também para undefined
console.log(gato.localeCompare(gato2));// se for igual retorna 0
console.log(gato.localeCompare(cachorro));// se for diferente retorna 1
console.log(gato.localeCompare(nada));// se não for possível comparar retorna -1

//toString() - converte valores quaisquer em string
let numero = 131;
let outroValor = null;//também para undifined
console.log(numero.toString());
// console.log(outroValor.toString());//não é possível

//toLowerCase() - converte em maiúscula
let str = `Lorem ipsum dolor SIT amet consectetur adipisicing elit. Est, minus?`;
let passaro = 'calopsita';
let passaro2 = 'CALOPSITA';
console.log(str.toLowerCase());
console.log(passaro.localeCompare(passaro2.toLocaleLowerCase()));

//toUpperCase() - converte em maiúscula
console.log(str.toUpperCase());

//trim() - remove espaços entre as extremidades de uma string
let str2 = `    Lorem ipsum dolor SIT amet consectetur adipisicing elit. Est, minus?       `;
console.log(str2);
console.log(str2.trim());

//NaN - not a number - não é um número - permite verificar se um valor é um número
//isNaN - verifica se um retorno é NaN
let num = Number('1o');
console.log(num);
console.log(isNaN(num));
console.log(isNaN('ashaus'));
console.log(isNaN(1));

if(!isNaN(num)){
    console.log('Isto é um número');
}else{
    console.log('Isto não é um número');
}

//toFixed() - recebe um número decimal e retorna uma string com número determinado de decimais
let valor = 2.424;
console.log(valor.toFixed(2));

//toLocaleString() - retorna uma string - permite converter para representação de moeda
//toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
console.log(valor.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}));

//EXERCÍCIO
let palavra = prompt('Digite uma palavra');
let nLetra = prompt('Qual letra deseja ver?')-1;
function exercicio(palavra,n){
    document.write('Esta palavra tem '+palavra.length+' caracteres<br>');
    document.write('A palavra ficou como '+palavra.toUpperCase()+'<br>');
    document.write('A letra '+palavra[n].toUpperCase()+' é o '+(n+1)+'º caractere da palavra '+palavra+'<br>');
    document.write(palavra.toUpperCase()+' ficou '+palavra.replace(palavra[n],'x'));
}
exercicio(palavra,nLetra);







