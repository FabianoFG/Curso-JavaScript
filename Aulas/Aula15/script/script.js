//document.getElementById() - pelo id
//document.querySelector() - por id ou classe
//document.querySelectorAll() - id ou classe do pai para manipular os filhos

//REGISTRO DE EVENTOS
//const botao = document.getElementById('idDoElemento');
//elemento.addEventListener('click', function(){});

// let m = '1';
// console.log(typeof m);

// if(typeof m === 'number'){
//     console.log(`O dado informado é um number: ${m}`);
// }else{
//     console.log(`O dado informado não é um number: ${m} : ${typeof m}`);
// }

window.onload = function(){
    // alert('Olá!');
    const botao = document.getElementById('btn');
    const txtBox = document.querySelector('#txtbox');
    const caixa = document.querySelector('#caixa');
    
    // botao.addEventListener('click', function(){
    //     caixa.innerHTML +=' '+txtBox.value;
    // })

    botao.addEventListener('click', function(){
        tabuada(Number(txtBox.value));
        
    })
}
function tabuada(numero){
    if((typeof numero === 'number')&&(numero > 0 && numero <=10)){
        let n = 1;
        caixa.innerHTML = `Tabuada do ${numero}<br>`;
        while(n <= 10){
            caixa.innerHTML += `${numero} x ${n} = ${numero*n}<br>`;
            n++;
        }
    }else{
        alert('Número inválido! O número deve ser de 1 a 10.');
    }
}

