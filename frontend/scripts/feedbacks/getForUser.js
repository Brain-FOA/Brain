const feedbackList = document.querySelector('.feedback-list');

async function loadFeedbacks() {
    const req = await fetch('http://localhost:3000/feedbacks/viewUser', {
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

        // Atenção: Escape aspas simples no conteúdo e título
        const tituloEscaped = feedback.titulo.replace(/'/g, "\\'");
        const conteudoEscaped = feedback.conteudo.replace(/'/g, "\\'");

        card.innerHTML = `
            <div class="feedback-header">
                <h3>${feedback.titulo}</h3>
                <div class="feedback-actions">
                    <button class="edit-feedback-btn" onclick="openEditFeedbackModal(${feedback.id}, '${tituloEscaped}', '${conteudoEscaped}')">
                        <span class="material-icons">edit</span>
                    </button>
                    <button class="delete-feedback-btn" onclick="deleteFeedbackAlert(${feedback.id})">
                        <span class="material-icons">delete</span>
                    </button>
                    <span class="feedback-date">${dataFormatada}</span>
                </div>
            </div>
            <p class="feedback-content">${feedback.conteudo}</p>
        `;

        feedbackList.appendChild(card);
    });

}

loadFeedbacks();
