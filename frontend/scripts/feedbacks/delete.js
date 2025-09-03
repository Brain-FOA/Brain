async function deleteFeedback(id) {
    try {
        const req = await fetch(`http://localhost:3000/feedbacks/delete/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        });

        const response = await req.json();

        if(!req.ok) {
        return modal.show('error', 'Erro!', response.message || 'Falha ao deletar');
        }

        modal.show('success', 'Sucesso!', response.message || 'Especialidade deletada');
        loadFeedbacks();

    } catch (error) {
        modal.show('error', 'Erro!', error.message || 'Erro desconhecido');
    }
}

async function deleteFeedbackAlert(id) {
    modal.show('warning', 'Alerta!', 'Você tem certeza disso? essa ação não poderá ser desfeita!', () => deleteFeedback(id));
}

