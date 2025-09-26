const requestsList = document.querySelector(".requests-list");

// Carrega profissionais pendentes
async function getAwaitProfessionals(url = "http://localhost:3000/professionals/pending?page=1") {
    try {
        const req = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await req.json();

        if (!req.ok || !res.data || res.data.length === 0) {
            requestsList.innerHTML = `
                <div style="display:flex;justify-content:center;align-items:center;height:200px;font-size:1.2em">
                    <p>Nenhum profissional pendente no momento.</p>
                </div>
            `;
            
            const nav = document.getElementById("pagination");
            if (nav) nav.style.display = "none";
            return;
        }

        renderProfessionals(res.data);
        renderPagination(res.pagination);

    } catch (e) {
        console.error(e);
        requestsList.innerHTML = "<p>Erro ao carregar profissionais pendentes.</p>";
        const nav = document.getElementById("pagination");
        if (nav) nav.innerHTML = "";
    }
}

// Renderiza a lista de profissionais
function renderProfessionals(professionals) {
    requestsList.innerHTML = "";

    professionals.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("professional-card");

        card.innerHTML = `
            <div class="card-header">
                <div class="professional-image">
                    <img src="${p.usuario.foto || 'assets/images/noimg.png'}" alt="Foto do profissional">
                </div>
                <div class="professional-info">
                    <h2>${p.usuario.nome}</h2>
                    <p class="specialty">${p.especialidade?.nome || 'Não informada'}</p>
                    <p class="crp">CRP: ${p.crp}</p>
                    <p class="location">${p.usuario.endereco?.cidade || "Não informado"}</p>

                    <div class="request-actions">
                        <button class="action-btn reject-btn" onclick="rejectProfessional(${p.usuario.id})">
                            <span class="material-icons">close</span>
                            Rejeitar
                        </button>
                        <button class="action-btn approve-btn" onclick="approveProfessional(${p.usuario.id})">
                            <span class="material-icons">check</span>
                            Aprovar
                        </button>
                    </div>
                    <button class="view-more-btn" onclick='showProfessionalModal(${JSON.stringify(p)})'>
                        <span class="material-icons">visibility</span>
                        Ver mais
                    </button>
                </div>
            </div>
            <div class="card-description">
                <h3 class="about-title">Sobre mim</h3>
                <p class="description">${p.descricao || 'Descrição não informada.'}</p>
            </div>
        `;

        requestsList.appendChild(card);
    });
}

// Mostra modal com informações detalhadas
function showProfessionalModal(professional) {
    const modal = document.getElementById("professionalModal");

    modal.querySelector(".modal-body").innerHTML = `
        <div class="professional-modal-grid">
            <!-- Identidade -->
            <div class="professional-modal-section">
                <h4>Identidade</h4>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Nome</span><span class="valu<e">${professional.usuario.nome}</span></div>
                    <div class="info-item"><span class="label">CRP</span><span class="value">${professional.crp}</span></div>
                    <div class="info-item"><span class="label">Especialidade</span><span class="value">${professional.especialidade?.nome || 'Não informada'}</span></div>
                    <div class="info-item"><span class="label">Telefone</span><span class="value">${professional.telefone || 'Não informada'}</span></div>
                </div>
                </div>
            </div>

            <!-- Endereço -->
            <div class="professional-modal-section">
                <h4>Endereço</h4>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Número</span><span class="value">${professional.usuario.endereco?.numero || '-'}</span></div>
                    <div class="info-item"><span class="label">Bairro</span><span class="value">${professional.usuario.endereco?.bairro || '-'}</span></div>
                    <div class="info-item"><span class="label">Cidade</span><span class="value">${professional.usuario.endereco?.cidade || '-'}</span></div>
                    <div class="info-item"><span class="label">CEP</span><span class="value">${professional.usuario.endereco?.cep || '-'}</span></div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = "block"; // abre modal
}

// Fecha o modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Renderiza paginação
function renderPagination(pagination) {
    let nav = document.getElementById("pagination");
    if (!nav) {
        nav = document.createElement("div");
        nav.id = "pagination";
        nav.classList.add("pagination");
        requestsList.after(nav);
    }

    nav.innerHTML = "";

    const totalPages = pagination.totalPages || 1;
    const currentPage = pagination.page || 1;
    const baseUrl = "http://localhost:3000/professionals/pending?page=";

    if (totalPages <= 1) {
        nav.style.display = "none";
        return;
    } else {
        nav.style.display = "flex";
    }

    if (currentPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "⬅";
        prevBtn.onclick = () => {
            getAwaitProfessionals(`${baseUrl}${currentPage - 1}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        if (i === currentPage) pageBtn.classList.add("active-page");
        pageBtn.onclick = () => {
            getAwaitProfessionals(`${baseUrl}${i}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(pageBtn);
    }

    if (currentPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "➡";
        nextBtn.onclick = () => {
            getAwaitProfessionals(`${baseUrl}${currentPage + 1}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        nav.appendChild(nextBtn);
    }
}

// Aprovar profissional
async function approveProfessional(id) {
    try {
        const req = await fetch(`http://localhost:3000/professionals/accept/${id}`, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await req.json();
        if (req.ok) {
            modal.show("success", "Sucesso", res.message);
            getAwaitProfessionals();
            loadDashboardStats();
        } else {
            modal.show("error", "Erro", res.message);
        }
    } catch (e) {
        console.error(e);
        modal.show("error", "Erro", "Falha na requisição.");
    }
}

// Rejeitar profissional
async function rejectProfessional(id) {
    try {
        const req = await fetch(`http://localhost:3000/professionals/reject/${id}`, {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await req.json();
        if (req.ok) {
            modal.show("success", "Sucesso", res.message);
            getAwaitProfessionals();
            loadDashboardStats();
        } else {
            modal.show("error", "Erro", res.message);
        }
    } catch (e) {
        console.error(e);
        modal.show("error", "Erro", "Falha na requisição.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getAwaitProfessionals();
    loadDashboardStats(); 
});
