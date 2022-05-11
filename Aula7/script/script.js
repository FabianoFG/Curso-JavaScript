// function verificarMaiorNumero(num1,num2){
//     if(num1>num2){
//         console.log("O número "+num1+" é maior que o número "+num2);
//     }else if(num1<num2){
//         console.log("O número "+num1+" é menor que o número "+num2);
//     }else{
//         console.log("O número "+num1+" é igual ao número "+num2);
//     }
// }
// verificarMaiorNumero(3,3);

// function teste(){
//     let nome = "Fabiano";
//     return nome;
// }
// console.log(teste());

// let mensagem = ()=>{
//     alert("Estou feliz da vida com o JS!");
// }
// mensagem();

// let mensagem = (nome)=>{return nome;};
// console.log(mensagem("José"));

// function teste(){
//     alert("Estou na função teste");
// }

// (function(produto,preco){
//     alert("O produto é "+produto+" e o preço é R$"+preco);
// })("biscoito",2.35)

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor1,valor2)=>{
    let resultado = Number(valor1) / Number(valor2);
    console.log(resultado);
}
soma(v1,v2);