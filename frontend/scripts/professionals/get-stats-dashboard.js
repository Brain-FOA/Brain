async function loadDashboardStats() {
    try {
        const req = await fetch("http://localhost:3000/professionals/stats", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await req.json();

        if (req.ok && res.stats) {
            renderInfosDashboard(res.stats);
        }
    } catch (e) {
        console.error("Erro ao carregar estatísticas do dashboard:", e);
    }
}


function renderInfosDashboard(stats) {
    const totalEl = document.querySelector(".stat-card:nth-child(1) .stat-info p");
    const pendingEl = document.querySelector(".stat-card:nth-child(2) .stat-info p");
    const activeEl = document.querySelector(".stat-card:nth-child(3) .stat-info p");

    if (totalEl) totalEl.textContent = stats.totalProfessionals ?? 0;
    if (pendingEl) pendingEl.textContent = stats.pendingProfessionals ?? 0;
    if (activeEl) activeEl.textContent = stats.activeProfessionals ?? 0;
}

document.addEventListener("DOMContentLoaded", () => {
    loadDashboardStats();
});
