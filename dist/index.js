var todosPlanetas = [];
var Situacao;
(function (Situacao) {
    Situacao["Habitavel"] = "habitavel";
    Situacao["Inabitavel"] = "inabitavel";
    Situacao["Habitado"] = "habitado";
    Situacao["Inexplorado"] = "inexplorado";
})(Situacao || (Situacao = {}));
function salvar(nome, coordenadas, situacao, satelites) {
    verificarSituacaoValida(situacao);
    var planeta = {
        nome: nome,
        coordenadas: coordenadas,
        situacao: situacao,
        satelites: satelites
    };
    todosPlanetas.push(planeta);
    return planeta;
}
function verificarSituacaoValida(situacao) {
    if (!Object.values(Situacao).includes(situacao)) {
        console.log("Situacao inv\u00E1lida: ".concat(situacao));
    }
}
function alterar(nomePlaneta, novaSituacao) {
    var planetaIndex = todosPlanetas.findIndex(function (planeta) { return planeta.nome === nomePlaneta; });
    verificarSituacaoValida(novaSituacao);
    if (planetaIndex === -1) {
        console.log("Planeta n\u00E3o encontrado: ".concat(nomePlaneta));
        return undefined;
    }
    var planeta = todosPlanetas[planetaIndex];
    planeta.situacao = novaSituacao;
    return planeta;
}
salvar("macacos", [12, 32, 41, 2], "habitavel", ["lua1", "lua2"]);
salvar("planeta2", [12, 3, 4, 5], "inabitavel", ["tome", "receba", "vish"]);
console.log(todosPlanetas);
alterar("macacos", "inexplorada");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log(todosPlanetas);
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
alterar("macacos", "fsd");
console.log(todosPlanetas);
