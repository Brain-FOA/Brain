// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function openEditFeedbackModal(id, titulo, conteudo) {
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const titleInput = document.getElementById('feedbackTitle');
    const contentInput = document.getElementById('feedbackContent');

    titleInput.value = titulo;
    contentInput.value = conteudo;
    document.getElementById('editFeedbackId').value = id;

    // Atualizar os contadores de palavras
    updateWordCount(titleInput, 'titleCount');
    updateWordCount(contentInput, 'contentCount');

    openModal('feedbackModal');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Word counting functionality
function updateWordCount(element, counterId) {
    const text = element.value;
    const wordCount = text.length;
    document.getElementById(counterId).textContent = wordCount;
}

// Handle feedback form submission
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        const titleInput = document.getElementById('feedbackTitle');
        const contentInput = document.getElementById('feedbackContent');

        // Add event listeners for word counting
        titleInput.addEventListener('input', () => updateWordCount(titleInput, 'titleCount'));
        contentInput.addEventListener('input', () => updateWordCount(contentInput, 'contentCount'));
    }
}); 