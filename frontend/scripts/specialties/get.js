const token = localStorage.getItem('token')
const specialtiesList = document.querySelector('.specialties-list');

async function loadSpecialties() {

    const req = await fetch('http://localhost:3000/specialties/view', {
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
        }
    });

    if (!req.ok) {
        const error = await req.json();
        return modal.show('error', 'Erro', error.message || 'Erro ao carregar especialidades');
    }

    const response = await req.json();
    const specialties = response.data;

    // Limpa a lista atual
    specialtiesList.innerHTML = '';

    if(response.data.length <= 0) {
        specialtiesList.innerHTML = 'sem especialidades cadastradas'
    }

    specialties.forEach(specialty => {
        const card = document.createElement('div');
        card.classList.add('specialty-card');

        card.innerHTML = `
        <div class="specialty-info">
            <h3>${specialty.nome}</h3>
        </div>
        <div class="specialty-actions">
            <button class="edit-btn" onclick="openEditModal(${specialty.id}, '${specialty.nome}')">
            <span class="material-icons">edit</span>
            </button>
            <button class="delete-btn" onclick="deleteAccountAlert(${specialty.id})">
            <span class="material-icons">delete</span>
            </button>
        </div>
        `;

        specialtiesList.appendChild(card);
    });
}

loadSpecialties();


