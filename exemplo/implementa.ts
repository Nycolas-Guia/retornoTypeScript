namespace empresa{
     let p = new Pessoa("Clebin", "000.000.000-00");
     p.setIdade(30);

     document.getElementById("nome").textContent = p.getNome();
     document.getElementById("cpf").textContent = p.getCpf();
     document.getElementById("idade").textContent = p.getIdade().toString();

     let c = new Cliente("Welington Orelha","120.120.120-00",120);
     c.setIdade(50);
     c.setLimite(3000);
     c.setSaldo(2000);
}