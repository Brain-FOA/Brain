const professionalsContainer = document.querySelector(".professionals-section .container");

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        )
        return JSON.parse(jsonPayload)
    } catch (e) {
        console.error('Token inválido:', e)
        return null
    }
}

const payload = token ? parseJwt(token) : null

async function getAcceptedProfessionals(url = "http://localhost:3000/professionals/accepted?page=1") {
    try {
        const req = await fetch(url, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // se a rota exigir token
            }
        });

        const res = await req.json();

        // Se a página for inválida ou não houver profissionais
        if (!req.ok || !res.data || res.data.length === 0) {
            professionalsContainer.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 200px; font-size: 1.34em; padding: 8em 2em">
                    <p>Nenhum profissional encontrado.</p>
                </div>
            ` ;
            // Limpa a paginação também
            const nav = document.getElementById("pagination");
            if (nav) nav.innerHTML = "";
            return;
        }

        renderAcceptedProfessionals(res.data);
        renderAcceptedPagination(res.pagination);

    } catch (err) {
        console.error(err);
        
        const nav = document.getElementById("pagination");
        if (nav) nav.innerHTML = "";
    }
}

function renderAcceptedProfessionals(professionals) {
    professionalsContainer.innerHTML = "";

    if (!professionals || professionals.length === 0) {
        professionalsContainer.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
                <p>Nenhum profissional encontrado.</p>
            </div>
        `;
        return;
    }

    professionals.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("professional-card");

        if(payload.acesso === 'admin') {
            card.innerHTML = `
            <div class="card-header">
                <div class="professional-image">
                    <img src="${p.usuario.foto || 'assets/images/noimg.png'}" alt="Foto do profissional">
                </div>
                <div class="professional-info">
                    <h2>${p.usuario.nome} <span class="verified-badge"><span class="material-icons">verified</span></span></h2>
                    <p class="specialty">${p.especialidade?.nome || 'Não informada'}</p>
                    <p class="crp">CRP: ${p.crp}</p>
                    <p class="cep">CEP: ${p.usuario.endereco?.cep || "Não informado"}</p>
                    <p class="location">${p.usuario.endereco?.cidade || "Cidade não informada"}</p>
                    <div class="buttons-container">
                    <button class="btn-view-more"
                        onclick="openContactModal(
                            '${p.usuario.nome}',
                            '${p.usuario.email}',
                            '${p.telefone || ''}',
                            '${p.usuario.endereco?.bairro || ''} (${p.usuario.endereco?.cidade || ''}), ${p.usuario.endereco?.numero || ''}'
                        )">
                        Ver mais
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="delete-feedback-btn" onclick="deleteProfessionalAlert('${p.usuario.id}')">
                        <span class="material-icons">delete</span>
                    </button>
                </div>
                </div>
            </div>
            <div class="card-description">
                <h3 class="about-title">Sobre mim</h3>
                <p class="description">${p.descricao || 'Descrição não informada.'}</p>
            </div>
        `;
        } else {
            card.innerHTML = `
                <div class="card-header">
                    <div class="professional-image">
                        <img src="${p.usuario.foto || 'assets/images/noimg.png'}" alt="Foto do profissional">
                    </div>
                    <div class="professional-info">
                        <h2>${p.usuario.nome} <span class="verified-badge"><span class="material-icons">verified</span></span></h2>
                        <p class="specialty">${p.especialidade?.nome || 'Não informada'}</p>
                        <p class="crp">CRP: ${p.crp}</p>
                        <p class="cep">CEP: ${p.usuario.endereco?.cep || "Não informado"}</p>
                        <p class="location">${p.usuario.endereco?.cidade || "Cidade não informada"}</p>
                        <div class="buttons-container">
                        <button class="btn-view-more"
                            onclick="openContactModal(
                                '${p.usuario.nome}',
                                '${p.usuario.email}',
                                '${p.telefone || ''}',
                                '${p.usuario.endereco?.bairro || ''} (${p.usuario.endereco?.cidade || ''}), ${p.usuario.endereco?.numero || ''}'
                            )">
                            Ver mais
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    </div>
                </div>
                <div class="card-description">
                    <h3 class="about-title">Sobre mim</h3>
                    <p class="description">${p.descricao || 'Descrição não informada.'}</p>
                </div>
            `;
        }


        professionalsContainer.appendChild(card);
    });
}

function deleteProfessionalAlert(id) {
    modal.show(
        'warning', 
        'Atenção!', 
        'Tem certeza que deseja excluir este profissional? Essa ação não poderá ser desfeita!', 
        () => {
            deleteProfessional(id);
        }
    );
}

async function deleteProfessional(id) {
    try {
        const req = await fetch(`http://localhost:3000/professionals/reject/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await req.json();

        if (!req.ok) {
            modal.show('error', 'Erro!', res.message || "Erro ao excluir profissional.");
            return;
        }

        let confirm = false 

        

        modal.show('success', 'Sucesso!', "Profissional excluído com sucesso!");
        getAcceptedProfessionals();

    } catch (err) {
        console.error("Erro ao excluir:", err);
        modal.show('error', 'Erro!', "Erro inesperado ao excluir profissional.");
    }
}



function renderAcceptedPagination(pagination) {
    let nav = document.getElementById("pagination");
    if (!nav) {
        nav = document.createElement("div");
        nav.id = "pagination";
        nav.classList.add("pagination");
        professionalsContainer.after(nav);
    }

    nav.innerHTML = "";

    const totalPages = pagination.totalPages || 1;
    const currentPage = pagination.page || 1;
    const baseUrl = "http://localhost:3000/professionals/accepted?page=";

    // Se houver apenas 1 página, esconde o container de paginação
    if (totalPages <= 1) {
        nav.style.display = "none";
        return;
    } else {
        nav.style.display = "flex"; // exibe se houver mais de 1 página
    }

    // botão anterior
    if (currentPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "⬅";
        prevBtn.onclick = () => {
            getAcceptedProfessionals(`${baseUrl}${currentPage - 1}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(prevBtn);
    }

    // botões de número de página
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        if (i === currentPage) pageBtn.classList.add("active-page");
        pageBtn.onclick = () => {
            getAcceptedProfessionals(`${baseUrl}${i}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(pageBtn);
    }

    // botão próximo
    if (currentPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "➡";
        nextBtn.onclick = () => {
            getAcceptedProfessionals(`${baseUrl}${currentPage + 1}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(nextBtn);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    getAcceptedProfessionals();
});
