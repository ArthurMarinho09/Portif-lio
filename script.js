document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos do Menu Hambúrguer (Mobile)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Seleção do Botão de Tema (Claro/Escuro)
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica a preferência anterior guardada ou detecta a preferência do sistema operacional
    const temaSalvo = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica o tema na inicialização da página
    if (temaSalvo === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Gerencia o clique de troca de tema
    themeToggle.addEventListener('click', () => {
        const temaAtual = document.documentElement.getAttribute('data-theme');
        let novoTema = 'light';

        if (temaAtual !== 'dark') {
            novoTema = 'dark';
        }

        document.documentElement.setAttribute('data-theme', novoTema);
        localStorage.setItem('theme', novoTema); // Salva o estado no navegador
    });

    // Controla abertura e fechamento do menu mobile
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu móvel ao clicar em qualquer link da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
