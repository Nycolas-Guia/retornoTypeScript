"use strict";
var empresa;
(function (empresa) {
    var p = new empresa.Pessoa("Clebin", "000.000.000-00");
    p.setIdade(30);
    document.getElementById("nome").textContent = p.getNome();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("idade").textContent = p.getIdade().toString();
    var c = new empresa.Cliente("Welington Orelha", "120.120.120-00", 120);
    c.setIdade(50);
    c.setLimite(3000);
    c.setSaldo(2000);
    document.getElementById("nomeC").textContent = c.getNome();
    document.getElementById("cpfC").textContent = c.getCpf();
    document.getElementById("codC").textContent = c.getCodCliente().toString();
    document.getElementById("idadeC").textContent = c.getIdade().toString();
    document.getElementById("limiteC").textContent = "R$ " + c.getLimite().toString();
    document.getElementById("saldoC").textContent = "R$ " + c.getSaldo().toString();
    var f = new empresa.Funcionario("Claudio Dollynho", "111.111.111-11");
    f.setIdade(32);
    f.setCodFuncionario(456);
    f.setValorDia(100);
    document.getElementById("nomeF").textContent = f.getNome();
    document.getElementById("cpfF").textContent = f.getCpf();
    document.getElementById("codF").textContent = f.getCodFuncionario().toString();
    document.getElementById("idadeF").textContent = f.getIdade().toString();
    document.getElementById("valorDia").textContent = "R$ " + f.getValorDia().toString();
    document.getElementById("saldoC").textContent = "R$ " + f.calcularSalario().toString();
})(empresa || (empresa = {}));
