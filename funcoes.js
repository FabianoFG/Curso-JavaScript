function somarPreco(){}

function listaGerar(lista){

    const listaF = document.querySelector("#produtos");

    for(let fruta of lista){

        const filhoLi = document.createElement("li");

        for(let prop in fruta){
            if(prop == "preco"){
                listaF.appendChild(filhoLi).setAttribute("data-preco", fruta[prop]);//escreve o preço da fruta
            }else{
                listaF.appendChild(filhoLi).textContent = `${fruta[prop]}`;//escreve o nome da fruta
            }
        }
    } 
}

function selecionarFrutas(lista, cestaId){
    
    const cestaF = document.querySelector("#cestaDoCliente");
    const total = document.querySelector("#mostraTotalCompra");
    const lisFru = document.querySelectorAll(`#${lista} > li`);//carrega os itens de #produtos como array
    let soma = 0;
    total.value = soma.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    
    for(let frutaLi of lisFru){//percorre cada item do array de #produtos

        frutaLi.addEventListener("click", function(){//identifica o evento click no item

            const cestaLi = document.querySelectorAll(`#${cestaId} > li`);// carrega itens de #cetaDoCliente como array

            let porNaCesta = true;//determina se vai copiar ou não

            if(cestaLi.length > 0){//verifica se há elementos na #cestaDoCliente

                for(let fLi of cestaLi){//percorre cada item do array cestaLi

                    if(fLi.innerHTML === frutaLi.innerHTML){//compara o conteúdo do item selecionado com o da cesta
                        alert(`O produto ${fLi.innerHTML} já está na sua cesta!`);
                        porNaCesta = false;//não vai copiar
                    }
                }
                if(porNaCesta){//verifica se pode colocar na cesta

                    let li = document.createElement("li");
                    cestaF.appendChild(li).textContent = frutaLi.innerHTML;
                    soma += Number(frutaLi.dataset.preco);
                }
            }else{//coloca o primeiro produto na cesta

                let li = document.createElement("li");
                cestaF.appendChild(li).textContent = frutaLi.innerHTML;
                soma += Number(frutaLi.dataset.preco);
            }

            total.value = soma.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        });
    }
    
}

export {listaGerar, selecionarFrutas};