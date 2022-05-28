window.onload = function(){
    const ulPai = document.querySelectorAll('#ulPai');

    console.log(ulPai);

    ulPai.forEach(function(lista){//o parâmetro lista recebe o retorno de cara foreach
        lista.addEventListener('click',function(elemento){
            alert(elemento.target.innerHTML);
        });
    });
}