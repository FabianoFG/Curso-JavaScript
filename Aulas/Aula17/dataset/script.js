window.onload = function(){
    const btnBuscar = document.querySelector('#btnBuscar');
    const txtNomeCli = document.querySelector('#nomeCliente');

    btnBuscar.addEventListener('click',function(){
        let dataSetCliente = txtNomeCli.dataset.codigo;
        let dataSetStatusCli = txtNomeCli.dataset.statuscli;
        console.log(dataSetCliente);
        console.log(dataSetStatusCli);
    });
}