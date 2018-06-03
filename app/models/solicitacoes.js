import DS from 'ember-data';

export default DS.Model.extend({
    // prenchidos em tela
    // dados do usuário
    nome: DS.attr('string'),
    email: DS.attr('string'),
    telefone: DS.attr('string'),
    iswhatsapp: DS.attr('boolean', {defaulValue: true}),
    
    // dados da solicitação
    code: DS.attr('string'),
    qtdDias: DS.attr('string'),
    qtdPessoas: DS.attr('string'),
    qtdCriancas: DS.attr('string'),
    idadeCriancas: DS.attr('string'),
    detalhesAdicionais: DS.attr('string'),
    
    // dados vindos do pacote
    pacoteCode: DS.attr('string'),
    origem: DS.attr('string'),
    destino: DS.attr('string'),
    servicosInclusos: DS.attr('string'),
    valorInicial: DS.attr('string'),
    valorInicialTipo: DS.attr('string'),
    dataInicio: DS.attr('string'),
    dataVolta: DS.attr('string'),
    // 
    isDetalhes: DS.attr('string'),

    // regras
    agree: DS.attr('boolean', {defaulValue: true}),
    profilename: DS.attr('string', {defaulValue: "user"}),
    userType: DS.attr('string', {defaulValue: "user"}),
    agent: DS.attr('string', {defaulValue: "pacotes-site"}),
    dataSolicitacao: DS.attr('string'),
    status: "aguardando-propostas"
});
