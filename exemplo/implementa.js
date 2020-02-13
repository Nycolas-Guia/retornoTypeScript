"use strict";
var empresa;
(function (empresa) {
    var p = new empresa.Pessoa("Clebin", "000.000.000-00");
    p.setIdade(30);
    document.getElementById("nome").textContent = p.getNome();
    document.getElementById("cpf").textContent = p.getCpf();
})(empresa || (empresa = {}));
