class Modal {
    constructor() {
        this.modalHTML = `
        <div class="modal-messages-overlay">
            <div class="modal-messages">
                <div class="modal-messages-header">
                <span class="material-icons modal-messages-icon"></span>
                <h3 class="modal-messages-title"></h3>
                </div>
                <div class="modal-messages-content"></div>
                <div class="modal-messages-footer">
                <button class="modal-messages-button modal-messages-button-primary">OK</button>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', this.modalHTML);
        this.modal = document.querySelector('.modal-messages-overlay');
        this.setupEventListeners();
    }

    setupEventListeners() {
        const closeButton = this.modal.querySelector('.modal-messages-button');
        closeButton.addEventListener('click', () => this.hide());

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });
    }

    show(type, title, message, onConfirm = null) {
        const modalIcon = this.modal.querySelector('.modal-messages-icon');
        const modalTitle = this.modal.querySelector('.modal-messages-title');
        const modalContent = this.modal.querySelector('.modal-messages-content');
        const modalElement = this.modal.querySelector('.modal-messages');
        const confirmButton = this.modal.querySelector('.modal-messages-button');

        confirmButton.removeAttribute('id');

        if (this._confirmListener) {
            confirmButton.removeEventListener('click', this._confirmListener);
            this._confirmListener = null;
        }

        switch(type) {
            case 'success':
                modalIcon.textContent = 'check_circle';
                break;
            case 'error':
                modalIcon.textContent = 'error';
                break;
            case 'warning':
                modalIcon.textContent = 'warning';
                confirmButton.id = 'btnModalConfirm';

                if (onConfirm) {
                    this._confirmListener = onConfirm;
                    confirmButton.addEventListener('click', this._confirmListener);
                }
                break;
            case 'info':
                modalIcon.textContent = 'info';
                break;
        }

        modalTitle.textContent = title;
        modalContent.textContent = message;
        modalElement.className = 'modal-messages modal-messages-' + type;
        this.modal.classList.add('active');
    }

    hide() {
        this.modal.classList.remove('active');
    }
}

const modal = new Modal();
