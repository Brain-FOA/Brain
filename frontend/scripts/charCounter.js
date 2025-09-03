document.addEventListener('DOMContentLoaded', function() {
    const descriptionTextarea = document.getElementById('description');
    const charCountSpan = document.getElementById('charCount');
    const maxLength = 400;

    descriptionTextarea.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCountSpan.textContent = currentLength;
        
        // Add warning class when approaching the limit
        if (currentLength > maxLength * 0.9) { // 90% of max length
            charCountSpan.classList.add('near-limit');
        } else {
            charCountSpan.classList.remove('near-limit');
        }
    });
}); 