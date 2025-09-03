async function update(form, id) {
    const req = await fetch(`http://localhost:3000/specialties/update/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            nome: form.specialtyName.value,
        })
    });

    const response = await req.json();

    if (!req.ok) {
        if (response.error) return modal.show('error', 'Erro!', response.message);
    }

    modal.show('success', 'Sucesso!', response.message);
    loadSpecialties();
    closeModal('editSpecialtyModal');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.specialtyFormUpdate');

    form.onsubmit = (e) => {
        e.preventDefault();
        const id = document.querySelector('#editSpecialtyId').value;
        update(form, id);
    };
});