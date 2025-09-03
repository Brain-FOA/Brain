const form = document.querySelector('.specialty-form')

async function register(form) {
        const req = await fetch('http://localhost:3000/specialties/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                nome: form.specialtyName.value,
            })
        })

        const response = await req.json()

        if(!req.ok) {
            if(response.error) return modal.show('error', 'erro!', response.message);
        }

        modal.show('success', 'sucesso!', response.message);
        form.specialtyName.value = ''

        loadSpecialties();

        return
}

form.onsubmit = (e) => {
    e.preventDefault()
    register(form)
}
