// Seleciona todos os links da barra de navegação
const navLinks = document.querySelectorAll('#navbar a');

// Adiciona o efeito de scroll suave
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Pega o destino do link (href)
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
