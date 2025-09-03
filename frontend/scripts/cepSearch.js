document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    const searchButton = document.getElementById('searchCep');
    const cityInput = document.getElementById('city');
    const addressInput = document.getElementById('address');
    const numberInput = document.getElementById('number');

    // Máscara para o CEP
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        e.target.value = value;
    });

    // Função para buscar CEP
    async function searchCep() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            alert('Por favor, insira um CEP válido');
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado');
                return;
            }

            // Preenche o campo de cidade
            cityInput.value = data.localidade;
            cityInput.disabled = false;

            // Preenche o campo de bairro
            addressInput.value = data.bairro;
            addressInput.disabled = false;

            // Foca no campo de número
            numberInput.focus();

        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Tente novamente.');
        }
    }

    // Evento de clique no botão de busca
    searchButton.addEventListener('click', searchCep);

    // Evento de tecla Enter no campo de CEP
    cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchCep();
        }
    });
}); 