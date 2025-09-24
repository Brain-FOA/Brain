document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.querySelector('.user-btn');
    const userModal = document.querySelector('.user-modal');

    // Toggle modal on button click
    userBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        userModal.classList.toggle('active');
    });

    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (!userModal.contains(e.target) && !userBtn.contains(e.target)) {
            userModal.classList.remove('active');
        }
    });

    // Prevent modal from closing when clicking inside it
    userModal.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 


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

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('.register-btn')
    const userModal = document.querySelector('.user-modal')
    const userContainer = document.querySelector('.user-container')
    const userBtn = document.querySelector('.user-btn')
    const userName = document.querySelector('.username')
    const adminLink = document.querySelector('.modal-option[href="admin.html"]')
    const token = localStorage.getItem('token')
    const payload = token ? parseJwt(token) : null

    if(payload) {
        registerBtn.style.display = 'none'
        userBtn.style.display = 'flex'
        userModal.style.display = 'inline-block'
        userContainer.style.display = 'inline-block'
        userName.innerHTML = `Olá, ${payload.name}`

        if (payload.acesso === 'professional') {
            adminLink.style.display = 'flex'
            userName.innerHTML = `Olá, ${payload.name}<span class="material-symbols-outlined small-icon">health_metrics</span>`
        }
         // Se for admin, mostra o link de administração
        if (payload.acesso === 'admin') {
            adminLink.style.display = 'flex'
        } else {
            adminLink.style.display = 'none'
        }
    } else {
        registerBtn.style.display = 'inline-block'
        userModal.style.display = 'none'
        userBtn.style.display = 'none'
        userContainer.style.display = 'none'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('.modal-option.logout')

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault()  // Evita o comportamento padrão do link

        localStorage.removeItem('token')  // Remove o token

        window.location.href = 'login.html'  // Redireciona para login
    })
})