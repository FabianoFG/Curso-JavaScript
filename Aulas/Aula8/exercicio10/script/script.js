//Exercício
function calcularImc(){
    var nome = prompt('Digite seu nome');
    var altura = prompt('Digite sua altura');
    var peso = prompt('Digite seu peso');
    var imc = Number(peso)/(Number(altura)**2);

    document.write(`Nome........: ${nome}<br>Altura(m)..: ${altura}<br>Peso(Kg)...: ${peso}<br>IMC...........: ${imc}`);
}
calcularImc();