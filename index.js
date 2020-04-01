const fs = require('fs');
const qrcode = require('qrcode');
const util = require('./libs/utils');

run().catch(error => console.error(error.stack));

let cert = 'CC 023155';
let codFabr = 199510792;
let nomeCliente = 'SOLETECNICA EQUIPAMENTOS HIDRAULICOS - EIRELI - EPP';
let enderecoCliente = 'Rua São Salvador - 134 - Centro - Pinhais - PR';
let telCliente =  '(041)3657-2681';
let emailCliente = 'contato@soletecnica.com.br';
let codigoProduto;
let descProduto;
let mptProduto = '720 bar ( 10440 PSI)';
let mprProduto = '2880 bar (41760 PSI)';
let dixdeProduto = '6,4 x 12,5 mm';
let mrcProduto = '70 mm';
let pesoProduto = '250 g/m';
let temperaturaProduto = '-40ºC a +100ºC (40ºF a 212ºF)';
let pressaoTeste = '1100 bar';
let dataTeste = '13/12/2018';
let tempoTeste = `1'`;
let qtdMangueiras = 1;
let mangueirasTestadas = '100%';
let comprimento = '0,5 m';
let nfe = '016319';
let dataNfe = '13/12/2018';
let normas = 'Mangueiras superam especificações das normas DIN 20022-parte 2, SAE 517-100R16S e ISO 11237-SC';
let terminais = 'Terminal macho M12 x 1,5mm 700-1000 bar / Terminal femea giratoria M14 x 1,5mm 700-1000 bar';
let material = `Terminais fabricados com aço de alta resistência 9S Mn Pb 28K e com tratamento superficial de acordo
com a norma DIN 50961 Fe/Zn / Terminais fabricados com aço de alta resistência 9S Mn Pb 28K e com
tratamento superficial de acordo com a norma DIN 50961 Fe/Zn`;
let formulario = 010;
let revision = 00;
let validade = '12 MESES';

async function run() {
    const res = await qrcode.toDataURL('pdf.html');
    
    fs.writeFileSync('./qr.html', res)
    fs.writeFileSync('./pdf.html', util.html(cert, codFabr, res, nomeCliente, enderecoCliente, telCliente, emailCliente, codigoProduto, descProduto, mptProduto, mprProduto, 
        dixdeProduto, mrcProduto, pesoProduto, temperaturaProduto, pressaoTeste, dataTeste, tempoTeste, qtdMangueiras, mangueirasTestadas, comprimento,
        nfe, dataNfe, normas, terminais, material, formulario, revision, validade));
    console.log('Wrote to ./qr.html');
    console.log('Wrote to ./pdf.html');
}