// Busca de produtos

function buscarProduto(){

let input = document
.getElementById("pesquisa")
.value
.toLowerCase();


let produtos =
document.querySelectorAll(".produto");


produtos.forEach(function(produto){


let nome =
produto.innerText.toLowerCase();


if(nome.includes(input)){

produto.style.display="block";

}else{

produto.style.display="none";

}


});


}



// Botão WhatsApp automático

function whatsapp(produto){

let mensagem =
"Olá, gostaria de informações sobre: "
+ produto;


let url =
"https://wa.me/5521920051788?text="
+ encodeURIComponent(mensagem);


window.open(url,"_blank");


}