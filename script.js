document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DE ACESSIBILIDADE ---

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');
    const alternaContrasteBtn = document.getElementById('alterna-contraste');
    const body = document.body;
    const html = document.documentElement;

    // 1. Mostrar/Esconder o menu de opções de acessibilidade
    botaoAcessibilidade.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique feche o menu imediatamente
        opcoesAcessibilidade.classList.toggle('ativo');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!opcoesAcessibilidade.contains(event.target) && !botaoAcessibilidade.contains(event.target)) {
            opcoesAcessibilidade.classList.remove('ativo');
        }
    });

    // 2. Alternar Alto Contraste
    alternaContrasteBtn.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
        // Salva a preferência do usuário
        if (body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrast', 'enabled');
        } else {
            localStorage.setItem('highContrast', 'disabled');
        }
    });

    // 3. Controle de Tamanho da Fonte
    let fontSize = 16; // Tamanho base em pixels
    const minFontSize = 12;
    const maxFontSize = 22;

    aumentarFonteBtn.addEventListener('click', function() {
        if (fontSize < maxFontSize) {
            fontSize++;
            html.style.fontSize = fontSize + 'px';
            localStorage.setItem('fontSize', fontSize);
        }
    });

    diminuirFonteBtn.addEventListener('click', function() {
        if (fontSize > minFontSize) {
            fontSize--;
            html.style.fontSize = fontSize + 'px';
            localStorage.setItem('fontSize', fontSize);
        }
    });

    // 4. Carregar preferências salvas ao entrar no site
    function carregarPreferencias() {
        // Carrega o modo de contraste
        if (localStorage.getItem('highContrast') === 'enabled') {
            body.classList.add('high-contrast');
        }
        // Carrega o tamanho da fonte
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            fontSize = parseInt(savedFontSize, 10);
            html.style.fontSize = fontSize + 'px';
        }
    }

    carregarPreferencias();


    // --- ANIMAÇÃO SCROLLREVEAL ---
    // Verifica se a biblioteca ScrollReveal está disponível
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1500,
            delay: 200,
            reset: false // A animação ocorre apenas uma vez
        });

        // Aplica a animação nas seções principais
        sr.reveal('#historia .esquerda-conteudo');
        sr.reveal('#historia .img-inicio', { delay: 400 });
        sr.reveal('#titulos', { delay: 200 });
        sr.reveal('#galeria .col-md-4', { interval: 200 });
        sr.reveal('#contato .formulario', { delay: 300 });
    }

});