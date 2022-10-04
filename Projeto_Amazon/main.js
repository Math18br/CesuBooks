//vetor pra armazenar os itens escolhidos pelo usuário
let carrinhoDeCompras = []

//variáveis dos preços dos livros
let sandmanPreço = 120.00
let coralinepreço = 50.00
let dunaPreço = 80.00
let arturPreço = 170.00
let GeorgePreço = 35.00

//variável da quantidade de dinheiro que o usuário possui
let carteira = 500.00
//variável usada para calcular o valor final da compra
let valorFinal = 0

//Funções universais
function voltarHome(none) {
    let home = document.getElementById("home")
    none.setAttribute("style","display:none")
    home.setAttribute("style","display:inline")
}
function trocarPagina(none, inline) {
    none.setAttribute("style","display:none")
    inline.setAttribute("style","display:inline")
}
function adicionar(item){
    carrinhoDeCompras.push(item)
}
function limparCampo(params) {
    document.getElementById("valor").innerHTML = ""
    document.getElementById("lista").innerHTML = ""
}
//função de logar no app
function logar(params) {
    let telaLogin = document.getElementById("telaLogin")
    let home = document.getElementById("home")
    let email = document.getElementById("email").value 
    let senha = Number(document.getElementById("senha").value)
    let titulo = document.getElementById("titulo")
    

    if (email == "teste"&&senha == 123) {
        trocarPagina(telaLogin, home)
        titulo.setAttribute("style","display:none")
    } else {
        alert("login inválido!")
    }
}
//funções do item "Sandman"
function sandman(params) {
    let home = document.getElementById("home")
    let item1 = document.getElementById("item1")
    trocarPagina(home,item1)
}
function adicionarSandman(){
    if (carrinhoDeCompras.includes(sandmanPreço)) {
        alert("Item já foi adicionado no carrinho de compras!")
    } else {
        adicionar(sandmanPreço)
        alert("Item adicionado ao carrinho com sucesso!")
    }
}
function voltarHome1(params) {
    let item1 = document.getElementById("item1")
    voltarHome(item1)
}
//funções do item "coraline"
function coraline(params) {
    let home = document.getElementById("home")
    let item2 = document.getElementById("item2")
    trocarPagina(home,item2)
}
function adicionarCoraline(){
    if (carrinhoDeCompras.includes(coralinepreço)) {
        alert("Item já foi adicionado no carrinho de compras!")
    } else {
        adicionar(coralinepreço)
        alert("Item adicionado ao carrinho com sucesso!")
    }
}
function voltarHome2(params) {
    let item2 = document.getElementById("item2")
    voltarHome(item2)
}
//funções do item "Duna"
function duna(params) {
    let home = document.getElementById("home")
    let item3 = document.getElementById("item3")
    trocarPagina(home,item3)
}
function adicionarDuna(params) {
    if (carrinhoDeCompras.includes(dunaPreço)) {
        alert("Item já foi adicionado no carrinho de compras!")
    } else {
        adicionar(dunaPreço)
        alert("Item adicionado ao carrinho com sucesso!")
    }
}
function voltarHome3(params) {
    let item3 = document.getElementById("item3")
    voltarHome(item3)
}
//funções do item "As crônicas de Artur"
function artur(params) {
    let home = document.getElementById("home")
    let item4 = document.getElementById("item4")
    trocarPagina(home,item4)
}
function adicionarArtur(){
    if (carrinhoDeCompras.includes(arturPreço)) {
        alert("Item já foi adicionado no carrinho de compras!")
    } else {
        adicionar(arturPreço)
        alert("Item adicionado ao carrinho com sucesso!")
    }
}
function voltarHome4(params) {
    let item4 = document.getElementById("item4")
    voltarHome(item4)
}
//funções do item "1984"
function george(params) {
    let home = document.getElementById("home")
    let item5 = document.getElementById("item5")
    trocarPagina(home,item5)
}
function adicionarGeorge(params) {
    if (carrinhoDeCompras.includes(GeorgePreço)) {
        alert("Item já foi adicionado no carrinho de compras!")
    } else {
        adicionar(GeorgePreço)
        alert("Item adicionado ao carrinho com sucesso!")
    }
}
function voltarHome5(params) {
    let item5 = document.getElementById("item5")
    voltarHome(item5)
}
//função para ir para a página do carrinho e listar os itens contidos nele
function checarCarrinho(params) {
    let home = document.getElementById("home")
    let carrinho = document.getElementById("carrinho")
    trocarPagina(home, carrinho)

    if (carrinhoDeCompras.length == 0) {
        document.getElementById("lista").innerHTML = "Você não possui itens no carrinho"
    }else{
        for(let i = 0; i<carrinhoDeCompras.length;i++){
            valorFinal += carrinhoDeCompras[i]
        }
        document.getElementById("valor").innerHTML = "Valor total da compra: " + valorFinal + " reais"
    }

    if(carrinhoDeCompras.includes(sandmanPreço)){
        document.getElementById("lista").innerHTML += "Sandman" + "<br>"
    }
    if (carrinhoDeCompras.includes(coralinepreço)) {
        document.getElementById("lista").innerHTML += "Coraline" + "<br>"
    }
    if (carrinhoDeCompras.includes(dunaPreço)) {
        document.getElementById("lista").innerHTML += "Duna" + "<br>"
    }
    if (carrinhoDeCompras.includes(arturPreço)) {
        document.getElementById("lista").innerHTML += "As crônicas de Artur" + "<br>"
    }
    if (carrinhoDeCompras.includes(GeorgePreço)) {
        document.getElementById("lista").innerHTML += "1984" + "<br>"
    }
}
//função para finalizar a compra
function finalizarCompra(params) {
    if (carteira <0 || valorFinal>carteira) {
        alert("Você não possui dinheiro o suficiente para efetuar a compra")
    } else if(valorFinal == 0){
        alert("Primeiro adicione algo ao carrinho para efetuar a compra")
    }else{
        carteira = carteira - valorFinal
        alert("Compra realizada com sucesso! / Quantidade restante na carteira: " +carteira+ " reais")
        carrinhoDeCompras = []
        valorFinal = 0
        limparCampo()
        checarCarrinho()
    }
}
//função para remover um item do carrinho
function remover(params) {
    let itemRemover = document.getElementById("remover").value

    if (itemRemover == "") {
        alert("Digite algo no campo para remover!")
        document.getElementById("remover").value = ""
    }else if(itemRemover == "sandman"||itemRemover == "Sandman"||itemRemover == "SANDMAN"){
        if (carrinhoDeCompras.indexOf(sandmanPreço) == -1) {
            alert("Item não existe no carrinho! Tente novamente")
        }else{
            let index = carrinhoDeCompras.indexOf(sandmanPreço)
            carrinhoDeCompras.splice(index,1)
            document.getElementById("remover").value = ""
            alert("Item removido com sucesso!")
            valorFinal = 0
            limparCampo()
            checarCarrinho()
        }
    }else if(itemRemover == "coraline"||itemRemover == "Coraline"||itemRemover == "CORALINE"){
        if (carrinhoDeCompras.indexOf(coralinepreço) == -1) {
            alert("Item não existe no carrinho! Tente novamente")
        }else{
            let index = carrinhoDeCompras.indexOf(coraline)
            carrinhoDeCompras.splice(index,1)
            document.getElementById("remover").value = ""
            alert("Item removido com sucesso!")
            valorFinal = 0
            limparCampo()
            checarCarrinho()
        }
    }else if(itemRemover == "duna"||itemRemover == "Duna"||itemRemover == "DUNA"){
        if (carrinhoDeCompras.indexOf(dunaPreço) == -1) {
            alert("Item não existe no carrinho! Tente novamente")
        }else{
            let index = carrinhoDeCompras.indexOf(dunaPreço)
            carrinhoDeCompras.splice(index,1)
            document.getElementById("remover").value = ""
            alert("Item removido com sucesso!")
            valorFinal = 0
            limparCampo()
            checarCarrinho()
        }
    }else if(itemRemover == "As crônicas de Artur"||itemRemover == "as crônicas de Artur"||itemRemover == "as cronicas de artur"||itemRemover == "AS CRÔNICAS DE ARTUR"||itemRemover == "AS CRONICAS DE ARTUR"|| itemRemover == "As cronicas de artur"|| itemRemover == "As crônicas de arthur"){
        if (carrinhoDeCompras.indexOf(arturPreço) == -1) {
            alert("Item não existe no carrinho! Tente novamente")
        }else{
            let index = carrinhoDeCompras.indexOf(arturPreço)
            carrinhoDeCompras.splice(index,1)
            document.getElementById("remover").value = ""
            alert("Item removido com sucesso!")
            valorFinal = 0
            limparCampo()
            checarCarrinho()
        }
    }else if(itemRemover == "1984"){
        if (carrinhoDeCompras.indexOf(GeorgePreço) == -1) {
            alert("Item não existe no carrinho! Tente novamente")
        }else{
            let index = carrinhoDeCompras.indexOf(GeorgePreço)
            carrinhoDeCompras.splice(index,1)
            document.getElementById("remover").value = ""
            alert("Item removido com sucesso!")
            valorFinal = 0
            limparCampo()
            checarCarrinho()
        }
    }else{
        alert("item não existe no carrinho! tente novamente!")
        valorFinal = 0
        limparCampo()
        checarCarrinho()
    }
}
//função para voltar para a home inicial da página do carrinho
function voltarHomeFinal(params) {
    let carrinho = document.getElementById("carrinho")
    voltarHome(carrinho)
    limparCampo()
    valorFinal = 0
}