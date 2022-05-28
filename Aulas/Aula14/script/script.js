//while

// let loop = 0;
// let cores = ['verde','vermelho','azul']

// // while(loop < 10){
// //     console.log(loop);
// //     loop++;
// // }
// while(loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

// //do{}while()
// let teste = 0;
// do{
//     teste = Number(prompt('Digite 0 para sair'));
//     switch(teste){
//         case 0:
//             alert('Saindo do sistema')
//             break;
//         case 1:
//             alert('Cadastrando');
//             break;
//         case 2:
//             alert('Consultando');
//             break;
//         default:
//             alert('Opção inválida!')
//             break;
//     }
// }while(teste!=0)

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