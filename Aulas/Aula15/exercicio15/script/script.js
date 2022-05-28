window.onload = function(){

    const botao = document.getElementById('btn');
    const txtBox = document.querySelector('#txtbox');
    const caixa = document.querySelector('#caixa');

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
        caixa.innerHTML = 'Número inválido! O número deve ser de 1 a 10.';
    }
}

