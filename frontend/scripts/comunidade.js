// Funções do Modal de Criação de Post
function showCreatePostModal() {
    const modal = document.getElementById('createPostModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCreatePostModal() {
    const modal = document.getElementById('createPostModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Funções do Modal de Comentários
function showCommentsModal(postId) {
    const modal = document.getElementById('commentsModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCommentsModal() {
    const modal = document.getElementById('commentsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Fechar modais ao clicar fora
    window.onclick = function(event) {
        const createPostModal = document.getElementById('createPostModal');
        const commentsModal = document.getElementById('commentsModal');
        
        if (event.target === createPostModal) {
            closeCreatePostModal();
        }
        if (event.target === commentsModal) {
            closeCommentsModal();
        }
    }
    
    // Configurar botões de comentário
    const commentButtons = document.querySelectorAll('.action-btn:nth-child(2)');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postCard = this.closest('.post-card');
            const postId = postCard.dataset.postId;
            showCommentsModal(postId);
        });
    });
    
    // Configurar textarea de comentário
    const commentTextarea = document.getElementById('commentText');
    if (commentTextarea) {
        commentTextarea.addEventListener('input', function() {
            const postCommentBtn = document.querySelector('.post-comment-btn');
            const wordCount = this.parentElement.querySelector('.word-count');
            const count = this.value.length;
            
            wordCount.textContent = `${count}/200`;
            postCommentBtn.disabled = !this.value.trim();
            
            if (count >= 200) {
                wordCount.classList.add('limit-reached');
            } else {
                wordCount.classList.remove('limit-reached');
            }
        });
    }
}); 