const fs = require('fs');
const qrcode = require('qrcode');
const util = require('./libs/utils');
const config = require('./resource/config')

run().catch(error => console.error(error.stack));

let cert = config.certificado.id;
let codFabr = config.fabricacao.id;
let nomeCliente = config.cliente.nomeCliente;
let enderecoCliente = config.cliente.enderecoCliente;
let telCliente = config.cliente.telCliente;
let emailCliente = config.cliente.emailCliente;
let codigoProduto = config.produto.codigoProduto;
let descProduto = config.produto.descProduto;
let mptProduto = config.produto.mptProduto;
let mprProduto = config.produto.mprProduto;
let dixdeProduto = config.produto.dixdeProduto;
let mrcProduto = config.produto.mrcProduto;
let pesoProduto = config.produto.pesoProduto;
let temperaturaProduto = config.produto.temperaturaProduto;
let pressaoTeste = config.teste.pressaoTeste;
let dataTeste = config.teste.dataTeste;
let tempoTeste = config.teste.tempoTeste;
let qtdMangueiras = config.teste.qtdMangueiras;
let mangueirasTestadas = config.teste.mangueirasTestadas;
let comprimento = config.teste.comprimento;
let nfe = config.nfe.nfe;
let dataNfe = config.nfe.data;
let normas = config.normas.normas;
let terminais = config.terminais.terminais;
let material = config.material.material;
let formulario = config.qualidade.formulario;
let revision = config.qualidade.revision;
let validade = config.qualidade.validade;

async function run() {
    const res = await qrcode.toDataURL('pdf.html');
    
    fs.writeFileSync('./qr.html', res)
    fs.writeFileSync('./pdf.html', util.html(cert, codFabr, res, nomeCliente, enderecoCliente, telCliente, emailCliente, codigoProduto, descProduto, mptProduto, mprProduto, 
        dixdeProduto, mrcProduto, pesoProduto, temperaturaProduto, pressaoTeste, dataTeste, tempoTeste, qtdMangueiras, mangueirasTestadas, comprimento,
        nfe, dataNfe, normas, terminais, material, formulario, revision, validade));
    console.log('Wrote to ./qr.html');
    console.log('Wrote to ./pdf.html');
}