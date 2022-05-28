//Exercício
var nome=prompt("Qual é o seu nome?");
var idade=prompt("Qual é a sua idade?");
var maioridade;
if(idade>18){
    maioridade="maior que";
}else if(idade<18){
    maioridade="menor que";
}else{
    maioridade="igual a"
}
document.write("Nome do usuário..: "+nome+"<br>"+"Idade do usuário...: "+idade+"<br>"
+"Você tem idade "+maioridade+" 18 anos!"+"<br>");