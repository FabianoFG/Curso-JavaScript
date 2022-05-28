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