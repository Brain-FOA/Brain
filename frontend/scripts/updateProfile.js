// Função para carregar a imagem do perfil
function loadProfileImage() {
    const profileImage = localStorage.getItem('profileImage');
    const clearImageBtn = document.getElementById('clear-image');
    if (profileImage) {
        document.getElementById('profile-preview').src = profileImage;
        clearImageBtn.style.display = 'flex';
    } else {
        clearImageBtn.style.display = 'none';
    }
}

// Função para atualizar a imagem do perfil
function updateProfileImage(file) {
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            document.getElementById('profile-preview').src = imageData;
            localStorage.setItem('profileImage', imageData);
            document.getElementById('clear-image').style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
}

// Função para limpar a imagem
function clearProfileImage() {
    document.getElementById('profile-preview').src = 'assets/images/default-avatar.png';
    localStorage.removeItem('profileImage');
    document.getElementById('profile-image').value = '';
    document.getElementById('clear-image').style.display = 'none';
}

// Event listener para o input de imagem
document.getElementById('profile-image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        updateProfileImage(file);
    }
});

// Event listener para o botão de limpar imagem
document.getElementById('clear-image').addEventListener('click', clearProfileImage);

// Carregar imagem do perfil ao iniciar a página
document.addEventListener('DOMContentLoaded', loadProfileImage);
