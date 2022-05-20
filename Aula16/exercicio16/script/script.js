window.onload = function(){
    const numero1 = document.querySelector('#numero1');
    const numero2 = document.querySelector('#numero2');
    const resultado = document.querySelector('#resultado');

    numero2.addEventListener('blur',function(){
        resultado.value = Number(numero1.value) + Number(numero2.value);
    });
}