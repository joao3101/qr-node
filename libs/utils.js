let html = function (cert, codFabr, res, nomeCliente, enderecoCliente, telCliente, emailCliente, codigoProduto, descProduto, mptProduto, mprProduto,
    dixdeProduto, mrcProduto, pesoProduto, temperaturaProduto, pressaoTeste, dataTeste, tempoTeste, qtdMangueiras, mangueirasTestadas, comprimento,
    nfe, dataNfe, normas, terminais, material, formulario, revision, validade) {
    return `
    <!DOCTYPE html>

    <head>
        <title>Certificado</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="./public/css/bootstrap.min.css">

        <script src="./public/js/jquery.min.js"></script>
        <script src="./public/js/bootstrap.min.js"></script>

        <div class="container">
            <div class="jumbotron text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h1>CERTIFICADO</h1>
                            <h3>Teste Hidrostático</h3>
                            <p>CERTIFICADO Nº. ${cert} </p>
                            <p>Cód. Fabricação ${codFabr}</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="${res}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </head>

    <body>
        <div class="container">
            <div class="well">
                <h2>Dados do Cliente:</h2>
                <p><b>Cliente:</b> ${nomeCliente}</p>
                <p><b>Endereço:</b> ${enderecoCliente}</p>
                <p><b>Telefone:</b> ${telCliente}</p>
                <p><b>E-mail:</b> ${emailCliente}</p>
            </div>
        </div>
        <div class="container">
            <div class="well">
                <h2>Dados do Produto:</h2>
                <p><b>Código Da Mangueira:</b> ${codigoProduto}</p>
                <p><b>Descrição:</b> ${descProduto}</p>
                <p><b>Máxima Pressão de Trabalho:</b> ${mptProduto}</p>
                <p><b>Máxima Pressão de Ruptura:</b> ${mprProduto}</p>
                <p><b>Diâmetro Interno x Diâmetro Externo:</b> ${dixdeProduto}</p>
                <p><b>Mínimo Raio de Curvatura:</b> ${mrcProduto}</p>
                <p><b>Peso:</b> ${pesoProduto}</p>
                <p><b>Gama de Temperatura:</b> ${temperaturaProduto}</p>
            </div>
        </div>

        <div class="container">
            <div class="well">
                <h2>Dados do Teste Hidrostático:</h2>
                <p><b>Pressão de Teste:</b> ${pressaoTeste}</p>
                <p><b>Data de Teste:</b> ${dataTeste}</p>
                <p><b>Tempo de Teste:</b> ${tempoTeste}</p>
                <p><b>Quantidade de mangueiras:</b> ${qtdMangueiras}</p>
                <p><b>Mangueiras Testadas:</b> ${mangueirasTestadas}</p>
                <p><b>Comprimento:</b> ${comprimento}</p>
                <p><b>Nota Fiscal:</b> ${nfe}</p>
                <p><b>Data NFE:</b> ${dataNfe}</p>
            </div>
        </div>

        <div class="container">
            <div class="well">
                <h2>Normas:</h2>
                <p>${normas}</p>
            </div>
        </div>
        <div class="container">
            <div class="well">
                <h2>Terminais:</h2>
                <p>${terminais}</p>
            </div>
        </div>
        <div class="container">
            <div class="well">
                <h2>Material / Tratamento Superficial:</h2>
                <p>${material}</p>
            </div>
        </div>
        <div class="container">
            <div class="well">
                <h2>Observações:</h2>
                <p><b>Formulário: </b> ${formulario}</p>
                <p><b>Revisão: </b> ${revision} </p>
                <p><b>Validade: </b> ${validade}</p>
            </div>
        </div>
    </body>
    <div class="container">
        <svg height="25" width="1150">
            <line x1="0" y1="0" x2="1150" y2="0" style="stroke:rgb(255,0,0);stroke-width:5" />
        </svg>
    </div>

    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <p>Rua São Salvador - 134 - Centro - Pinhais - PR - CEP 83.320-200 - Tel: (041)3657-2681 – (041)98810-4837</p>
                <p>Soletécnica Equipamentos Hidráulicos Eireli-EPP – CNPJ 04.520.544/0001-35</p>
                <p><a href="mailto:contato@soletecnica.com.br"> contato@soletecnica.com.br</a> - <a
                        href="http://www.soletecnica.com.br/"> http://www.soletecnica.com.br/</a></p>
            </div>
        </div>
    </footer>`
}

module.exports.html = html;