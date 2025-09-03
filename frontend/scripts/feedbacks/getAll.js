const feedbackList = document.querySelector('.feedbacks-list');

async function loadFeedbacks() {
    const req = await fetch('http://localhost:3000/feedbacks/viewAll', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    });

    const response = await req.json();

    if (!req.ok) {
        return modal.show('error', 'Erro', response.message || 'Erro ao carregar feedbacks');
    }

    const feedbacks = response.data;

    // Limpa a lista atual
    feedbackList.innerHTML = '';

    if (feedbacks.length === 0) {
        feedbackList.innerHTML = '<p>Sem feedbacks cadastrados.</p>';
        return;
    }

    feedbacks.forEach(feedback => {
        const card = document.createElement('div');
        card.classList.add('feedback-card');

        const dataFormatada = new Date(feedback.createdAt).toLocaleDateString('pt-BR');

        card.innerHTML = `
            <div class="feedback-header">
                <div class="feedback-info">
                    <h3>${feedback.titulo}</h3>
                </div>
                <div class="feedback-actions">
                    <div class="feedback-email">
                        <span class="material-icons">email</span>
                        <span>${feedback.usuario.email}</span>
                    </div>
                    <button class="delete-feedback-btn" onclick="deleteFeedbackAlert(${feedback.id})" title="Deletar feedback">
                        <span class="material-icons">delete</span>
                    </button>
                    <span class="feedback-date">${dataFormatada}</span>
                </div>
            </div>
            <div class="feedback-content">
                <p>${feedback.conteudo}</p>
            </div>
        `;

        feedbackList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadFeedbacks();
});
