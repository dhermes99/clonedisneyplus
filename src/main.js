document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;

      // Remove a classe ativa de todos os botões
      buttons.forEach((button) =>
        button.classList.remove("shows__tabs__button--is--active")
      );

      // Adiciona a classe ativa ao botão clicado
      botao.target.classList.add("shows__tabs__button--is--active");

      // Esconde todas as abas
      escondeTodasAbas();

      // Exibe a aba correta
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      aba.classList.add("shows__list--is--active");
    });
  }
});

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is--active");
  }
}
