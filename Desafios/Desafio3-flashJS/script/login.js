window.onload = function(){
    const campoUsuario = document.querySelector('#campoUsuario');
    const campoSenha = document.querySelector('#campoSenha');
    const botaoEnviar = document.querySelector('#botaoEnviar');

    function verificarDados(usuario,senha,dadosJson){

        let url = './panel.html';
        let listaUsuarios = dadosJson['users'];

        let ver = ()=>{
            for(let user of listaUsuarios){
                if(user['user'] == usuario){
                    if(user['pws'] == senha){
                        return 2;
                    }else{
                        return 1;
                    }
                }
            }
            return 0;
        }
        switch(ver()){
            case 0: 
                alert('Usuário não encontrado!');
                break;
            case 1:
                alert('Senha incorreta!');
                break;
            case 2:
                location.href = url;
                break;
            default:
                alert('Erro');
                break;
        }
    };

    let dadosUsuarios = async function(){
        let url = './script/usuario.json';
        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            if(!dadosJson) throw new Error('Erro no fecth');
            verificarDados(campoUsuario.value,campoSenha.value,dadosJson);
        }catch(error){
            alert(`Algo deu errado: ${error}`);
        }
    };

    botaoEnviar.addEventListener('click',function(){
        dadosUsuarios();
    });
}