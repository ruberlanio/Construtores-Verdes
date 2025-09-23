document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Enviar").addEventListener("click", Pegar_Valores);

  // Função para coletar os valores do formulário
  function Pegar_Valores() {
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const avaliacao = document.getElementById("avaliacao").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!nome || !idade || !avaliacao) {
      alert("Preencha todos os campos!");
      return;
    }

    // Verifica se a idade é um número
    if (isNaN(idade)) {
      alert("Idade deve ser um número!");
      return;
    }

  
  }
});


