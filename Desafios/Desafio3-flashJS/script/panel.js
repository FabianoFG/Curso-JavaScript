import {produtos} from './produtos.js';
import {clientes} from './clientes.js';

window.onload = function(){
    //ABRIR FORMS
    let iCli = 0;
    let iProd = 0;
    let novoClick = false;
    let data = new Date();
    let dataFormatada = data.toLocaleString('pt-BR',{year:'numeric',month:'2-digit',day:'2-digit'});

    let formClientes = document.querySelector('#formClientes');
    let formProdutos = document.querySelector('#formProdutos');
    let formPedidos = document.querySelector('#formPedidos');

    const ancClientes = document.querySelector('#ancClientes');
    const ancProdutos = document.querySelector('#ancProdutos');
    const ancPedidos = document.querySelector('#ancPedidos');

    const btnFecharCli = document.querySelector('#btnFecharCli');
    const btnFecharProd = document.querySelector('#btnFecharProd');
    const btnFecharPed = document.querySelector('#btnFecharPed');

    ancClientes.addEventListener('click',function(){
        formClientes.classList.remove('ocultar');
        formProdutos.classList.add('ocultar');
        formPedidos.classList.add('ocultar');
        carregarDadosCli(iCli);
        novoClick = false;
    });
    ancProdutos.addEventListener('click',function(){
        formProdutos.classList.remove('ocultar');
        formClientes.classList.add('ocultar');
        formPedidos.classList.add('ocultar');
        carregarDadosProd(iProd);
        novoClick = false;
    });
    ancPedidos.addEventListener('click',function(){
        formPedidos.classList.remove('ocultar');
        formProdutos.classList.add('ocultar');
        formClientes.classList.add('ocultar');
        novoClick = false;
    });
    btnFecharCli.addEventListener('click',function(){
        formClientes.classList.add('ocultar');
        novoClick = false;
    });
    btnFecharProd.addEventListener('click',function(){
        formProdutos.classList.add('ocultar');
        novoClick = false;
    });
    btnFecharPed.addEventListener('click',function(){
        formPedidos.classList.add('ocultar');
    });
    //CARREGAR DADOS DOS CLIENTES
    let cmpCodigoCli = document.querySelector('#cmpCodigoCli');
    let cmpNomeCli = document.querySelector('#cmpNomeCli');
    let cmpDtCadastroCli = document.querySelector('#cmpDtCadastroCli');

    const btnAnteriorCli = document.querySelector('#btnAnteriorCli');
    const btnProximoCli = document.querySelector('#btnProximoCli');

    function carregarDadosCli(i){
        cmpCodigoCli.value = clientes[iCli]['codCliente'];
        cmpNomeCli.value = clientes[iCli]['nomeCliente'];
        cmpDtCadastroCli.value = clientes[iCli]['dataCadCli'];
    }

    btnAnteriorCli.addEventListener('click',function(){
        if(iCli>0){
            iCli--;
        carregarDadosCli(iCli);
        }else{
            alert('Início da lista de clientes!');
        }
    });

    btnProximoCli.addEventListener('click',function(){
        if(iCli<(clientes.length-1)){
            iCli++;
        carregarDadosCli(iCli);
        }else{
            alert('Fim da lista de clientes!');
        }
    });
    //CARREGAR DADOS DOS PRODUTOS
    let cmpCodigoProd = document.querySelector('#cmpCodigoProd');
    let cmpDescricaoProd = document.querySelector('#cmpDescricaoProd');
    let cmpPrecoProd = document.querySelector('#cmpPrecoProd');
    let cmpQuantidadeProd = document.querySelector('#cmpQuantidadeProd');

    const btnAnteriorProd = document.querySelector('#btnAnteriorProd');
    const btnProximoProd = document.querySelector('#btnProximoProd');

    function carregarDadosProd(iProd){
        cmpCodigoProd.value = produtos[iProd]['codProduto'];
        cmpDescricaoProd.value = produtos[iProd]['descProduto'];
        cmpPrecoProd.value = (produtos[iProd]['precoProduto']).toFixed(2);
        cmpQuantidadeProd.value = produtos[iProd]['qtdEstoqueProd'];
    }
    btnAnteriorProd.addEventListener('click',function(){
        if(iProd>0){
            iProd--;
        carregarDadosProd(iProd);
        }else{
            alert('Início da lista de produtos!');
        }
    });
    btnProximoProd.addEventListener('click',function(){
        if(iProd<(produtos.length-1)){
            iProd++;
        carregarDadosProd(iProd);
        }else{
            alert('Fim da lista de produtos!');
        }
    });
    //NOVO CLIENTE
    const btnNovoCli = document.querySelector('#btnNovoCli');

    btnNovoCli.addEventListener('click',function(){
        cmpCodigoCli.value = clientes.length+1;
        cmpNomeCli.value = '';
        cmpDtCadastroCli.value = dataFormatada;
        novoClick = true;
        cmpNomeCli.removeAttribute('disabled');
    });
    //NOVO PRODUTO
    const btnNovoProd = document.querySelector('#btnNovoProd');

    btnNovoProd.addEventListener('click',function(){
        cmpCodigoProd.value = produtos.length+1;
        cmpDescricaoProd.value = '';
        cmpPrecoProd.value = '';
        cmpQuantidadeProd.value = '';
        novoClick = true;
        cmpDescricaoProd.removeAttribute('disabled');
        cmpPrecoProd.removeAttribute('disabled');
        cmpQuantidadeProd.removeAttribute('disabled');
    });
    //SALVAR CLIENTE
    const btnSalvarCli = document.querySelector('#btnSalvarCli');

    btnSalvarCli.addEventListener('click',function(){
        if(cmpNomeCli.value==''){
            alert('Você deve digitar um nome para o cliente.');
            cmpNomeCli.focus();
        }else if(novoClick){
            clientes.push({
                "codCliente" : Number(cmpCodigoCli.value),
                "nomeCliente" : cmpNomeCli.value,
                "dataCadCli" : cmpDtCadastroCli.value
            });
            iCli = 0;
            novoClick = false;
            cmpNomeCli.setAttribute('disabled','');
            carregarDadosCli(iCli);
            alert('Cliente cadastrado com sucesso!');
        }else{
            alert('Clique em "novo" para cadastrar cliente.');
        }
    });
    //SALVAR PRODUTO
    const btnSalvarProd = document.querySelector('#btnSalvarProd');

    btnSalvarProd.addEventListener('click',function(){
        if(cmpDescricaoProd.value==''){
            alert('Você deve digitar uma descrição para o produto.');
            cmpDescricaoProd.focus();
        }else if(novoClick){
            produtos.push({
                "codProduto" : Number(cmpCodigoProd.value),
                "descProduto" : cmpDescricaoProd.value,
                "precoProduto" : Number(cmpPrecoProd.value),
                "qtdEstoqueProd" : Number(cmpQuantidadeProd.value)
            });
            iProd = 0;
            novoClick = false;
            cmpDescricaoProd.setAttribute('disabled','');
            cmpPrecoProd.setAttribute('disabled','');
            cmpQuantidadeProd.setAttribute('disabled','');
            carregarDadosProd(iProd);
            alert('Produto cadastrado com sucesso!');
        }else{
            alert('Clique em "novo" para cadastrar Produto.');
        }
        
    });
    //PEDIDOS BUSCA CLIENTE POR CÓDIGO
    const cmpCodigoCliPed = document.querySelector('#cmpCodigoCliPed');
    const cmpClientePed = document.querySelector('#cmpClientePed');

    cmpCodigoCliPed.addEventListener('blur',function(){

        let acharCli = ()=>{
            for(let cli of clientes){
                if(cli['codCliente']==cmpCodigoCliPed.value){
                    cmpClientePed.value = cli['nomeCliente'];
                    return true;
                }
            }
        }
        if(!acharCli()){
            alert('Cliente não encontrado!');
            cmpCodigoCliPed.value = '';
            cmpClientePed.value = '';
            cmpCodigoCliPed.focus();
        }
    });

    //PEDIDOS LOCALIZAR PRODUTO POR CÓDIGO
    const cmpCodProdPed = document.querySelector('#cmpCodProdPed');
    const cmpDesProdPed = document.querySelector('#cmpDesProdPed');
    const cmpPreProdPed = document.querySelector('#cmpPreProdPed');
    let indice = 0;
    
    function limparBarraPedidos(){
        cmpCodProdPed.value = '';
        cmpDesProdPed.value = '';
        cmpPreProdPed.value = '';
        cmpQuaProdPed.value = '';
    }

    cmpCodProdPed.addEventListener('blur',function(){
        let acharProd = ()=>{
            for(let i=0;i<produtos.length;i++){
                if(produtos[i]['codProduto']==cmpCodProdPed.value){
                    cmpDesProdPed.value = produtos[i]['descProduto'];
                    cmpPreProdPed.value = produtos[i]['precoProduto'];
                    indice = i;
                    return true;
                }
            }
        }
        if(!acharProd()){
            alert('Produto não encontrado!');
            limparBarraPedidos();
            cmpCodProdPed.focus();
        }
    });
    //PEDIDOS LANÇAR NOVO
    const cmpQuaProdPed = document.querySelector('#cmpQuaProdPed');
    const btnLancarPed = document.querySelector('#btnLancarPed');
    const tblPedido = document.querySelector('#tblPedido');
    const totalPedido = document.querySelector('#totalPedido');
    let numLista = 0;
    let codListados = [];
    let total = 0;

    function montarTabela(){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        numLista++;

        tblPedido.appendChild(tr).setAttribute('id', `produto${numLista}`)
        const produtoPed = document.querySelector(`#produto${numLista}`);

        produtoPed.appendChild(td1).textContent = produtos[indice]['codProduto'];
        produtoPed.appendChild(td2).textContent = produtos[indice]['descProduto'];
        produtoPed.appendChild(td3).textContent = (produtos[indice]['precoProduto']).toFixed(2);
        produtoPed.appendChild(td4).textContent = cmpQuaProdPed.value;
        produtoPed.appendChild(td5).textContent = (Number(cmpQuaProdPed.value)*produtos[indice]['precoProduto']).toFixed(2);
    }

    btnLancarPed.addEventListener('click',function(){
        if(Number(cmpQuaProdPed.value)>produtos[indice]['qtdEstoqueProd']){
            alert('Não há quantidade suficiente em estoque!');
            cmpQuaProdPed.value = '';
            cmpQuaProdPed.focus();
        }else if(codListados.indexOf(Number(produtos[indice]['codProduto']))!=(-1)){
            alert('Este item já foi pedido!');
        }else{
            codListados.push(produtos[indice]['codProduto']);
            montarTabela();
            total+=Number(cmpQuaProdPed.value)*produtos[indice]['precoProduto'];
            totalPedido.textContent = total.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'});
            limparBarraPedidos();
        }
    });
}