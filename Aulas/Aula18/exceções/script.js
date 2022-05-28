//precisa ser inteiro, não negativo
let m = -1;

try{//exceções
    if(typeof m != 'number') throw new Error('Digite um número!');
    if(m < 0) throw new Error('O número não pode ser negativo!');
    if(m % 1 !== 0) throw new Error('Digite um número inteiro!');
}catch(error){//tratamento do erro
    console.log(`O erro é: ${error}`);
}finally{//independente da ocorrência de exceção
    console.log('Cheguei no finally!');
}