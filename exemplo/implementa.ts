namespace empresa{
     let p = new Pessoa("Clebin", "000.000.000-00");
     p.setIdade(30);

     document.getElementById("nome").textContent = p.getNome();
     document.getElementById("cpf").textContent = p.getCpf();
}