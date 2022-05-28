window.onload = function(){
    const btnExibir = document.querySelector('#btnExibir');
    const olLista = document.querySelector('#olLista');
    let veiculos = ['ônibus','motocicleta','patinete','skate','monociclo'];

    btnExibir.addEventListener('click',function(){
        for(let meio of veiculos){
            let itemMeio = document.createElement('li');
            olLista.appendChild(itemMeio).textContent = meio;
        }
    })
}