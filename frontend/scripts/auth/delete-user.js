const form = document.querySelector('.profile-form')
const btnDelete = document.getElementById('delete-btn')
const token = localStorage.getItem('token')
const userInputName = document.getElementById('name')
const userInputEmail = document.getElementById('email')
const btnConfirm = document.querySelector('#btnModalConfirm')

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

const payload = token ? parseJwt(token) : null
userInputName.value = payload.name
userInputEmail.value = payload.email

async function deleteUser(form) {
        //enviar dados para API
        const req = await fetch('http://localhost:3000/user/delete',{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                nome: form.name.value,
                email: form.email.value,
                senha: form.currentPassword.value,
            })
        })

        if(!req.ok) {
            const response = await req.json()
            if(response.error) return modal.show('error', 'erro!', response.message);
        }

        localStorage.removeItem('token')
        window.location.href = "register-choice.html"
}

async function deleteAccountAlert() {
    modal.show('warning', 'Alerta!', 'Você tem certeza disso? essa ação não poderá ser desfeita!', () => deleteUser(form));
}

btnDelete.addEventListener('click', deleteAccountAlert)