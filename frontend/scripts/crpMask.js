document.addEventListener('DOMContentLoaded', function() {
    const crpInput = document.getElementById('crp');

    crpInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 2) {
                value = value;
            } else if (value.length <= 7) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            } else {
                value = value.substring(0, 2) + '/' + value.substring(2, 7);
            }
        }
        
        e.target.value = value;
    });

    // Validação do formato do CRP
    crpInput.addEventListener('blur', function(e) {
        const value = e.target.value;
        const crpRegex = /^\d{2}\/\d{5}$/;
    });
}); 