document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleAcessibilidade');
    const body = document.body;

    // Verifica se o modo de alto contraste estava ativo na última visita
    if (localStorage.getItem('highContrastMode') === 'enabled') {
        body.classList.add('high-contrast');
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('high-contrast');

        // Salva a preferência do usuário no localStorage
        if (body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrastMode', 'enabled');
        } else {
            localStorage.setItem('highContrastMode', 'disabled');
        }
    });
});