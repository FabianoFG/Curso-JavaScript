// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.mensagem = function(){
//     alert('Olá, '+this.nome);
// }

// let novaPessoa = new Pessoa('José');
// let outraPessoa = new Pessoa('Maria');

// novaPessoa.mensagem();
// outraPessoa.mensagem();
// console.log(novaPessoa);

// let Pessoa2 = {
//     'nome':'',
//     'idade':''
// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert('Olá, '+Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = 'Fabiano';
// P.msg();
// console.log(P);

let Pessoa3 = [//array de objetos usar [] e dentro inserir objetos com {}
    {
        'nome':'Fabiano',
        'idade':30,
        'sexo':'M'
    },
    {
        'nome':'Maria',
        'idade':30,
        'sexo':'F'
    },
    {
        'nome':'Josefina',
        'idade':28,
        'sexo':'F'
    }
]
let NPessoa = Pessoa3;

console.log(NPessoa[2].nome);
console.log(`Existem ${NPessoa.length} pessoas cadastradas`);

//Exercícios
//Questão 1: substitui um caractere ou conjunto de caracteres por outro
//Questão 2: ordena em ordem crescente
//Questão 3: Não. Ele apenas possui suporte a objetos.
//Questão 4: É uma palavra reservada que instancia um novo objeto, seguindo um modelo
