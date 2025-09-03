// Funções do Modal de Feedback
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Funções do Modal de Criar Post
function showCreatePostModal() {
    const modal = document.getElementById('createPostModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeCreatePostModal() {
    const modal = document.getElementById('createPostModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function updateWordCount(element, maxLength) {
    const count = element.value.length;
    const wordCountSpan = element.nextElementSibling;
    if (wordCountSpan) {
        wordCountSpan.textContent = `${count}/${maxLength}`;
        if (count > maxLength * 0.9) {
            wordCountSpan.classList.add('limit-reached');
        } else {
            wordCountSpan.classList.remove('limit-reached');
        }
    }
}

function createPost(event) {
    event.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const isAnonymous = document.getElementById('anonymousPost').checked;
    
    // Aqui você pode adicionar a lógica para enviar o post para o backend
    console.log('Título:', title);
    console.log('Conteúdo:', content);
    console.log('Anônimo:', isAnonymous);
    
    // Limpar o formulário e fechar o modal
    event.target.reset();
    closeCreatePostModal();
    
    // Mostrar mensagem de sucesso
    alert('Post criado com sucesso!');
}

// Funções do Modal de Comentários
function showCommentsModal(postId) {
    const modal = document.getElementById('commentsModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Aqui você pode adicionar a lógica para carregar os comentários do post
        console.log('Carregando comentários do post:', postId);
    }
}

function closeCommentsModal() {
    const modal = document.getElementById('commentsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Adicionar event listeners para os botões de comentários
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listener para os botões de comentários
    const commentButtons = document.querySelectorAll('.action-btn:has(.chat_bubble_outline)');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postCard = this.closest('.post-card');
            const postId = postCard.dataset.postId;
            showCommentsModal(postId);
        });
    });

    // Adicionar event listener para o botão de fechar do modal de comentários
    const closeCommentsBtn = document.querySelector('#commentsModal .close-btn');
    if (closeCommentsBtn) {
        closeCommentsBtn.addEventListener('click', closeCommentsModal);
    }

    // Adicionar event listener para o botão de publicar comentário
    const postCommentBtn = document.querySelector('.post-comment-btn');
    if (postCommentBtn) {
        postCommentBtn.addEventListener('click', function() {
            const commentText = document.getElementById('commentText').value;
            if (commentText.trim()) {
                // Aqui você pode adicionar a lógica para enviar o comentário para o backend
                console.log('Novo comentário:', commentText);
                
                // Limpar o campo de comentário
                document.getElementById('commentText').value = '';
                
                // Atualizar o contador de caracteres
                const wordCount = document.querySelector('.add-comment .word-count');
                if (wordCount) {
                    wordCount.textContent = '0/200';
                }
            }
        });
    }

    // Adicionar contador de caracteres para o campo de comentário
    const commentTextarea = document.getElementById('commentText');
    if (commentTextarea) {
        commentTextarea.addEventListener('input', function() {
            const count = this.value.length;
            const wordCount = document.querySelector('.add-comment .word-count');
            if (wordCount) {
                wordCount.textContent = `${count}/200`;
                if (count > 180) { // 90% do limite
                    wordCount.classList.add('limit-reached');
                } else {
                    wordCount.classList.remove('limit-reached');
                }
            }
        });
    }
});
