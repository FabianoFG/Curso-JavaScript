//Exercício

let numeroTabuana = Number(prompt('Digite um número de 1 a 10'));
function tabuada(numero){
    if((typeof numero === 'number')&&(numero > 0 && numero <=10)){
        let n = 1;
        document.write(`Tabuada do ${numero}<br>`);
        while(n <= 10){
            document.write(`${numero} x ${n} = ${numero*n}<br>`);
            n++;
        }
    }else{
        console.log('Número inválido! O número deve ser de 1 a 10.');
    }
}
tabuada(numeroTabuana);