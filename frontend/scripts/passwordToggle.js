document.addEventListener('DOMContentLoaded', function() {
    // Script para o toggle de senha
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        const input = toggle.parentElement.querySelector('input');
        const icon = toggle.querySelector('.material-icons');

        toggle.addEventListener('click', () => {
            // Alterna entre password e text
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            // Alterna o ícone
            icon.textContent = type === 'password' ? 'visibility_off' : 'visibility';
        });
    });
}); 