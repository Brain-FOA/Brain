const form = document.getElementById('professinal-register')

async function register_professinal(form) {
    // enviar dados para API

    const req = await fetch('http://localhost:3000/professionals/register',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // dados pessoais
            nome: form.name.value,
            email: form.email.value,
            senha: form.password.value,
            confirmaSenha: form.confirmPassword.value,

            // dados profissionais
            telefone: form.phone.value,
            crp: form.crp.value,
            especialidadeId: Number(form.specialty.value), 
            descricao: form.description.value,
            cpf: form.cpf.value,

            // endereço
            cep: form.cep.value,
            cidade: form.city.value,
            bairro: form.address.value,
            numero: form.number.value
        })
    })

    const response = await req.json()

    if(!req.ok) {
        if(response.error) return modal.show('error', 'erro!', response.message);
    }

    if(response.token) {
        localStorage.setItem('token', response.token)
        return window.location.href = "index.html"
    }
}

form.onsubmit = (e) => {
    e.preventDefault()
    register_professinal(form)
}
