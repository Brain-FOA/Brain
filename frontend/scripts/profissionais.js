function openContactModal(name, email, phone, address) {
    const modal = document.getElementById('contactModal');
    const modalName = document.getElementById('modalName');
    const modalEmail = document.getElementById('modalEmail');
    const modalPhone = document.getElementById('modalPhone');
    const modalAddress = document.getElementById('modalAddress');

    modalName.textContent = name;
    modalEmail.textContent = email;
    modalPhone.textContent = phone;
    modalAddress.textContent = address;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactModal();
    }
}

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchProfessionals();
    } else if (event.key === 'Escape') {
        closeContactModal();
    }
});

function searchProfessionals() {
    const searchInput = document.getElementById('searchInput');
    const selectedCity = document.getElementById('selectedCity');
    const cep = searchInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    if (cep.length === 8) {
        // Buscar cidade usando a API ViaCEP
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    selectedCity.innerHTML = `<i class="fas fa-map-marker-alt"></i><span>${data.localidade} - ${data.uf}</span>`;
                } else {
                    selectedCity.innerHTML = `<i class="fas fa-map-marker-alt"></i><span>CEP não encontrado</span>`;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
                selectedCity.innerHTML = `<i class="fas fa-map-marker-alt"></i><span>Erro ao buscar CEP</span>`;
            });
    } else {
        selectedCity.innerHTML = `<i class="fas fa-map-marker-alt"></i><span>Digite um cep válido</span>`;
    }
}

// Formatar o CEP enquanto digita
document.getElementById('searchInput').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    e.target.value = value;
});

// Adicionar funcionalidade de busca ao pressionar Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProfessionals();
    }
}); 