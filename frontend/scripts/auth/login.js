const form = document.getElementById('loginForm')

async function login(form) {
        //enviar dados para API
        const req = await fetch('http://localhost:3000/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: form.email.value,
                senha: form.password.value,
            })
        })

        const response = await req.json()

        if(!req.ok) {
            if(response.error) return modal.show('error', 'erro!', response.message);
        }

        if(response.token) {
            localStorage.setItem('token', response.token)
        }

        window.location.href = "index.html"
}

form.onsubmit = (e) => {
    e.preventDefault()
    login(form)
}
