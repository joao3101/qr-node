const cliente = {
    "nomeCliente": "SOLETECNICA EQUIPAMENTOS HIDRAULICOS - EIRELI - EPP",
    "enderecoCliente": "Rua São Salvador - 134 - Centro - Pinhais - PR",
    "telCliente": "(041)3657-2681",
    "emailCliente": "contato@soletecnica.com.br"
}

const produto = {
    codigoProduto: 'SRV',
    descProduto: 'mqtt://10.90.62.150',
    mptProduto: '720 bar ( 10440 PSI)',
    mprProduto: '2880 bar (41760 PSI)',
    dixdeProduto: '6,4 x 12,5 mm',
    mrcProduto: '70 mm',
    pesoProduto: '250 g/m',
    temperaturaProduto: '-40ºC a +100ºC (40ºF a 212ºF)'
}

const teste = {
    "pressaoTeste": "1100 bar",
    "dataTeste": "13/12/2018",
    "tempoTeste": `1'`,
    "qtdMangueiras": "1",
    "mangueirasTestadas": "100%",
    "comprimento": "0,5 m"
}

const nfe = {
    'nfe': '016319',
    'data': '13/12/2018'
}

const normas = {
    'normas': 'Mangueiras superam especificações das normas DIN 20022-parte 2, SAE 517-100R16S e ISO 11237-SC'
}

const terminais = {
    'terminais': 'Mangueiras superam especificações das normas DIN 20022-parte 2, SAE 517-100R16S e ISO 11237-SC'
}

const material = {
    'material': 'Mangueiras superam especificações das normas DIN 20022-parte 2, SAE 517-100R16S e ISO 11237-SC'
}

const qualidade = {
    'formulario': 010,
    'revision': 00,
    'validade': '12 MESES'
}

const certificado = {
    'id': 'CC 023155'
}

const fabricacao = {
    'id': 199510792
}

const config = { 
    'cliente': cliente,
    'produto': produto,
    'teste': teste,
    'nfe': nfe,
    'normas': normas,
    'terminais': terminais,
    'material': material,
    'qualidade': qualidade,
    'certificado': certificado,
    'fabricacao': fabricacao
}

module.exports = config
