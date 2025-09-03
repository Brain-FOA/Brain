function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        )
        return JSON.parse(jsonPayload)
    } catch (e) {
        console.error('Token inválido:', e)
        return null
    }
}

function addUpdate() {
    const token = localStorage.getItem('token') 
    const payload = token ? parseJwt(token) : null
    const userName = document.querySelector('.username')

    const fileInput = document.getElementById('profile-image')
    const file = fileInput.files[0];

    userName.innerHTML = `Olá, ${payload.name}`
}

async function update(form) {
    const fileInput = document.getElementById('profile-image')
    const file = fileInput.files[0];

    const formData = new FormData();

    formData.append('nome', form.name.value);
    formData.append('email', form.email.value);
    formData.append('senha', form.currentPassword.value);
    formData.append('novaSenha', form.newPassword.value);
    formData.append('confirmaNovaSenha', form.confirmNewPassword.value);

    if(file) {
        formData.append('foto', file);
    } 


    sendData(formData);
}

async function sendData(formData) {
    const token = localStorage.getItem('token');

    const req = await fetch('http://localhost:3000/user/update', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    let responseText = await req.text();

    let response;
    try {
        response = JSON.parse(responseText);
    } catch (e) {
        console.error('Resposta inesperada (não veio JSON):', responseText);
        return modal.show('error', 'Erro!', 'Resposta inválida do servidor.');
    }
    
    if(!req.ok) {
        return modal.show('error', 'Erro!', response.message);
    }

    if(response.token) {
        localStorage.setItem('token', response.token);
    }

    modal.show('success', 'Sucesso!', response.message);
    addUpdate();
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.profile-form')

    form.onsubmit = (e) => {
        e.preventDefault();
        update(form);
    };
});