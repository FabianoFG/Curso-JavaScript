//Exercício
let funComPars = function(idade,idadePar){
    if(idade>idadePar){
        alert("Você tem idade maior que "+idadePar);
    }else if(idade<idadePar){
        alert("Você tem idade menor que "+idadePar);
    }else{
        alert("Você tem idade igual a "+idadePar);
    }
}
funComPars(20,18);
funComPars(17,18);
funComPars(18,18);