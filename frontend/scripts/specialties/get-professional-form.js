const token = localStorage.getItem('token');
const specialtiesList = document.querySelector('#specialty');

async function loadSpecialtiesForm() {

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

    specialtiesList.innerHTML = '';

    if (!specialties || specialties.length === 0) {
        specialtiesList.innerHTML = '<option value="">Sem especialidades cadastradas</option>';
        return;
    }

    specialtiesList.innerHTML = '<option value="">Selecione sua especialidade</option>';

    specialties.forEach(specialty => {
        const option = document.createElement('option');
        option.value = specialty.id;    
        option.textContent = specialty.nome;
        specialtiesList.appendChild(option);
    });
}

loadSpecialtiesForm();

