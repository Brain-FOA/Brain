const form = document.getElementById('feedbackForm')
const token = localStorage.getItem('token')

async function register(form) {
        //enviar dados para API
        const req = await fetch('http://localhost:3000/feedbacks/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                titulo: form.feedbackTitle.value,
                conteudo: form.feedbackContent.value
            })
        })

        const response = await req.json()

        if(!req.ok) {
            if(response.error) return modal.show('error', 'erro!', response.message);
        }

        if(!token) {
            return modal.show('error', 'erro!', 'faça login para realizar um feedback!');
        }

        modal.show('success', 'Sucesso!', response.message);
        const titleInput = document.getElementById('titleCount')
        const contentInput = document.getElementById('contentCount')

        titleInput.innerHTML = ''
        contentInput.innerHTML= ''

        titleInput.innerHTML = '0'
        contentInput.innerHTML= '0'
        form.reset();
}

form.onsubmit = (e) => {
    e.preventDefault()
    register(form)
}
