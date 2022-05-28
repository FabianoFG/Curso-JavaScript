window.onload = function(){
    let produtos = [
        {descricao:'biscoito mirabel', preco:2.20},
        {descricao:'marmelada', preco:3.20},
        {descricao:'sabonete', preco:4.20},
        {descricao:'abacaxi', preco:1.20}
    ]

    const listaProdutos = document.querySelector('#listaDeProdutos');
    const Total = document.querySelector('#total');

    ((lista)=>{
        let totalzinho = 0;
        for(let produto of lista){
            const filhoLi = document.createElement('li');
            for(let propriedade in produto){
                if(propriedade == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute(
                        'data-preco',produto[propriedade]);
                    totalzinho += produto[propriedade]
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = 
                `${propriedade}: ${produto[propriedade]}`;
                }
                
                console.log(produto[propriedade]);
            }
        }
        Total.value = totalzinho.toFixed(2);
        
    })(produtos)
}