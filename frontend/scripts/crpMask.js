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

document.getElementById("phone").addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, ""); // só números

    // Limita a 11 dígitos (2 DDD + 9 número)
    valor = valor.slice(0, 11);

    if (valor.length === 0) {
        valor = "";
    } else if (valor.length <= 2) {
        // DDD incompleto → apenas abre parêntese
        valor = "(" + valor;
    } else if (valor.length <= 6) {
        // Até 6 dígitos → DDD + começo do número
        valor = valor.replace(/^(\d{2})(\d{0,4})$/, "($1) $2");
    } else if (valor.length <= 10) {
        // Fixo (8 dígitos)
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
        // Celular (9 dígitos)
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }

    e.target.value = valor;
});

document.getElementById("cpf").addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, ""); // só números

    // Limita a 11 dígitos
    valor = valor.slice(0, 11);

    if (valor.length > 9) {
        valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, "$1.$2.$3-$4");
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
    } else if (valor.length > 3) {
        valor = valor.replace(/^(\d{3})(\d{0,3}).*/, "$1.$2");
    }

    e.target.value = valor;
}); 