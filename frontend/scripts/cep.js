document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    const searchButton = document.getElementById('searchButton');
    const cityName = document.getElementById('cityName');

    // Função para formatar o CEP
    function formatCEP(cep) {
        return cep.replace(/\D/g, '')
                 .replace(/(\d{5})(\d)/, '$1-$2')
                 .replace(/(-\d{3})\d+?$/, '$1');
    }

    // Função para buscar o CEP
    async function searchCEP(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                throw new Error('CEP não encontrado');
            }

            return data;
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            return null;
        }
    }

    // Evento de input para formatar o CEP
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value;
        e.target.value = formatCEP(value);
    });

    // Evento de clique no botão de busca
    searchButton.addEventListener('click', async function() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            alert('Por favor, digite um CEP válido');
            cityName.textContent = '...';
            return;
        }

        const data = await searchCEP(cep);
        
        if (data) {
            cityName.textContent = `${data.localidade} - ${data.uf}`;
        } else {
            alert('CEP não encontrado. Por favor, verifique e tente novamente.');
            cityName.textContent = '...';
        }
    });

    // Evento de tecla Enter no input
    cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}); 