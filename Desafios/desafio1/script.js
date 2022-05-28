import { listaGerar, selecionarFrutas} from "./funcoes.js";

let listaFrutas = [
    {nome:"Laranja", preco: "2.99"},
    {nome:"Maçã", preco: "3.49"},
    {nome:"Pera", preco: "4.50"},
    {nome:"Manga", preco: "1.35"},
    {nome:"Tangerina", preco: "3.25"}
]

listaGerar(listaFrutas);
selecionarFrutas("produtos","cestaDoCliente");