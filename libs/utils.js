let html = function (cert, codFabr, res, nomeCliente, enderecoCliente, telCliente, emailCliente, codigoProduto, descProduto, mptProduto, mprProduto, 
    dixdeProduto, mrcProduto, pesoProduto, temperaturaProduto, pressaoTeste, dataTeste, tempoTeste, qtdMangueiras, mangueirasTestadas, comprimento,
    nfe, dataNfe, normas, terminais, material, formulario, revision, validade) {
    return `<!DOCTYPE html>

    <head>
        <div>
            <h1>CERTIFICADO</h1>
        </div>
        <div>
            <h3>Teste Hidrostático</h3>
        </div>
        <div>
            <p>CERTIFICADO Nº. ${cert} </p>
            <p>Cód. Fabricação ${codFabr}</p>
        </div>
        <div> <img src="${res}"> </div>
    </head>
    
    <body>
        <h2>Dados do Cliente:</h2>
        <p><b></b>Cliente:</b> ${nomeCliente}</p>
        <p><b></b>Endereço:</b> ${enderecoCliente}</p>
        <p><b></b>Telefone:</b> ${telCliente}</p>
        <p><b></b>E-mail:</b> ${emailCliente}</p>
        <br>
    
        <h2>Dados do Produto:</h2>
        <p><b></b>Código Da Mangueira:</b> ${codigoProduto}</p>
        <p><b></b>Descrição:</b> ${descProduto}</p>
        <p><b></b>Máxima Pressão de Trabalho:</b> ${mptProduto}</p>
        <p><b></b>Máxima Pressão de Ruptura:</b> ${mprProduto}</p>
        <p><b></b>Diâmetro Interno x Diâmetro Externo:</b> ${dixdeProduto}</p>
        <p><b></b>Mínimo Raio de Curvatura:</b> ${mrcProduto}</p>
        <p><b></b>Peso:</b> ${pesoProduto}</p>
        <p><b></b>Gama de Temperatura:</b> ${temperaturaProduto}</p>
        <br>
    
        <h2>Dados do Teste Hidrostático:</h2>
        <p><b></b>Pressão de Teste:</b> ${pressaoTeste}</p>
        <p><b></b>Data de Teste:</b> ${dataTeste}</p>
        <p><b></b>Tempo de Teste:</b> ${tempoTeste}</p>
        <p><b></b>Quantidade de mangueiras:</b> ${qtdMangueiras}</p>
        <p><b></b>Mangueiras Testadas:</b> ${mangueirasTestadas}</p>
        <p><b></b>Comprimento:</b> ${comprimento}</p>
        <p><b></b>Nota Fiscal:</b> ${nfe}</p>
        <p><b></b>Data NFE:</b> ${dataNfe}</p>
        <br>
        <p>Normas:</p>
        <p>${normas}</p>
        <br>
        <p>Terminais:</p>
        <p>${terminais}</p>
        <br>
        <p>Material / Tratamento Superficial:</p>
        <p>${material}</p>
        <br>
        <p>Observações:</p> 
        <p>Formulário: ${formulario} Revisão: ${revision} Validade: ${validade}</p>
        <br>
        <svg height="25" width="1200">
            <line x1="0" y1="0" x2="100000" y2="0" style="stroke:rgb(255,0,0);stroke-width:5" />
        </svg>
        <p>Rua São Salvador - 134 - Centro - Pinhais - PR - CEP 83.320-200 - Tel: (041)3657-2681 – 988104837</p>
        <p>Soletécnica Equipamentos Hidráulicos Eireli-EPP – CNPJ 04.520.544/0001-35</p>
        <p><a href="mailto:contato@soletecnica.com.br"> contato@soletecnica.com.br</a> - <a
                href="http://www.soletecnica.com.br/"> http://www.soletecnica.com.br/</a></p>
    
    </body>`
}

module.exports.html = html;