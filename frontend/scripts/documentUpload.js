document.addEventListener('DOMContentLoaded', function() {
    // Função para lidar com o upload de documentos
    function handleDocumentUpload(input, uploadArea) {
        const removeButton = uploadArea.querySelector('.remove-doc');
        const icon = uploadArea.querySelector('.material-icons');
        const text = uploadArea.querySelector('p');
        const isPhotoUpload = uploadArea.id === 'photoUpload';

        input.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                if (isPhotoUpload) {
                    // Preview da foto
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        uploadArea.classList.add('has-image');
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        uploadArea.appendChild(img);
                    }
                    reader.readAsDataURL(this.files[0]);
                } else {
                    // Mostrar nome do arquivo para documentos
                    text.textContent = this.files[0].name;
                }
                removeButton.style.display = 'flex';
                icon.style.display = 'none';
            }
        });

        removeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            input.value = '';
            if (isPhotoUpload) {
                uploadArea.classList.remove('has-image');
                const img = uploadArea.querySelector('img');
                if (img) img.remove();
            }
            text.textContent = isPhotoUpload ? 'Clique ou arraste uma foto' : 'Clique ou arraste um documento';
            removeButton.style.display = 'none';
            icon.style.display = 'block';
        });
    }

    // Inicializar para cada área de upload
    const uploadAreas = document.querySelectorAll('.document-upload');
    uploadAreas.forEach(area => {
        const input = area.querySelector('input[type="file"]');
        handleDocumentUpload(input, area);
    });
}); 