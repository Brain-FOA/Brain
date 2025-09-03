const form = document.getElementById('registerForm')

async function register(form) {
        //enviar dados para API
        const req = await fetch('http://localhost:3000/auth/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: form.name.value,
                email: form.email.value,
                senha: form.password.value,
                confirmaSenha: form.confirmPassword.value
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
    register(form)
}
