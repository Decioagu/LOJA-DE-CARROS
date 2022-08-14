const carros = [];
let id = 1;

// função de botão de acionamento
function adicionar() {
    // id dos campos de preemcimento
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const situacao = document.getElementById("situacao").value;
    const preco = (document.getElementById("preco").value == "") ? 0 : parseFloat(document.getElementById("preco").value);
    
    // lista do campo de peemcimento
    const carro = {
        id: id++,
        modelo: modelo,
        ano: ano,
        cor: cor,
        situacao: situacao,
        preco: preco
    };
    
    // funções
    carros.push(carro);
    mostraTabela();
    atualizaPagina();
    valorTotal();
}

// id para criar "tabela"
const tabela = document.getElementById("tabela");
// formatação para moeda corrente
moeda = new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"});
// escrever em HTML no campo id "tabela"
function mostraTabela() {
    // "tabela"
    tabela.innerHTML = carros.map(
        function(carro) {
            dados =
                `<tbody align="center">
                    <td>${carro.id}</td>
                    <td>${carro.modelo}</td>
                    <td>${carro.ano}</td>
                    <td style="background-color: ${carro.cor};"></td>
                    <td>${carro.situacao}</td>
                    <td>${moeda.format(carro.preco)}</td>
                </tbody>`;
            return dados;
        }
    ).join("");
}

// limpa conteudo do campo de dados (preemchimento)
function atualizaPagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo");
}

// Soma dos valores na "tabela"
function valorTotal() {
    // novo Arrey
    valorDoCarro = [];

    // adicionar preço do carro em Arrey "valorDoCarro = []"
    carros.forEach( 
        function(carro){ 
            valorDoCarro.push(carro.preco)
        }
    );
    
    // escrever em HTML no campo id "valorCarros"
    document.getElementById("valorCarros").innerHTML = moeda.format(
        valorDoCarro.reduce(
            function (total, atual) {
                return total += atual;
            }
        )
    )
}

