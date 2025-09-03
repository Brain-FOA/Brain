async function updateFeedback(form, id) {
    const req = await fetch(`http://localhost:3000/feedbacks/update/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            titulo: form.feedbackTitle.value,
            conteudo: form.feedbackContent.value
        })
    });

    const response = await req.json();

    if (!req.ok) {
        if (response.error) return modal.show('error', 'Erro!', response.message);
    }
    
    modal.show('success', 'Sucesso!', response.message);
    loadFeedbacks()
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form-update');

    form.onsubmit = (e) => {
        e.preventDefault();
        const id = document.querySelector('#editFeedbackId').value;
        updateFeedback(form, id);
    };
});