const initialData = [
    // 1.0 GOVERNANÇA E PLANEJAMENTO
    { id: 1, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Consultoria estratégica", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },
    { id: 2, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Consultoria para o projeto de arquitetura acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 0.0, qty: 0 },
    { id: 3, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Diagnóstico e planejamento", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },
    { id: 4, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Definição do orçamento e da Cota Acessibilidade", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },
    { id: 5, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Coordenação geral", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },
    { id: 6, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Planejamento de execução da arquitetura", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 0.0, qty: 0 },
    { id: 7, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Definição de fornecedores", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },

    // 2.0 TREINAMENTO E CAPACITAÇÃO
    { id: 8, category: "2.0 TREINAMENTO E CAPACITAÇÃO", name: "Capacitação de gestores", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },
    { id: 9, category: "2.0 TREINAMENTO E CAPACITAÇÃO", name: "Treinamento da equipe operacional", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 0 },

    // 3.0 COMUNICAÇÃO E DIVULGAÇÃO
    { id: 10, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Designer gráfico", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 180.0, qty: 0 },
    { id: 11, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Material acessível e em Braille (criação)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 12, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Material acessível e em Braille (produção)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 13, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Site acessível (criação e produção)", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 260.0, qty: 0 },
    { id: 14, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Certificação digital para sites", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 350.0, qty: 0 },
    { id: 15, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Aplicativo acessível (criação e produção)", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 320.0, qty: 0 },
    { id: 16, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Linguagem simples", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 17, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Copyright", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 250.0, qty: 0 },
    { id: 18, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Campanha online e redes sociais (criação)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 180.0, qty: 0 },
    { id: 19, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Impulsionamentos", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Verba", unit_price: 500.0, qty: 0 },
    { id: 20, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Assessoria de imprensa", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 21, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Produção de vídeos acessíveis", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 280.0, qty: 0 },
    { id: 22, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "E-mail marketing", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 180.0, qty: 0 },
    { id: 23, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Plataforma de inscrições acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 24, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Busca ativa de públicos-alvo", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 180.0, qty: 0 },

    // 4.0 INFRAESTRUTURA FÍSICA
    { id: 25, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Cenografia e ambientação (criação)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 250.0, qty: 0 },
    { id: 26, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Cenografia e ambientação (produção)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 180.0, qty: 0 },
    { id: 27, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Rampa", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 2500.0, qty: 0 },
    { id: 28, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Plataforma elevatória", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 4500.0, qty: 0 },
    { id: 29, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Piso tátil", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro linear", unit_price: 180.0, qty: 0 },
    { id: 30, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Mapa tátil", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 2800.0, qty: 0 },
    { id: 31, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Central de Acessibilidade", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 0.0, qty: 0 },
    { id: 32, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Banheiro acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Metro²", unit_price: 1500.0, qty: 0 },
    { id: 33, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Área reservada", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro²", unit_price: 350.0, qty: 0 },
    { id: 34, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Sala de Descompressão", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 0.0, qty: 0 },
    { id: 35, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Tecnologia assistiva", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 0.0, qty: 0 },
    { id: 36, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Sinalização", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Metro²", unit_price: 250.0, qty: 0 },

    // 5.0 TRANSPORTE E MOBILIDADE
    { id: 37, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Transporte acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 1600.0, qty: 0 },
    { id: 38, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Rota acessível", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 900.0, qty: 0 },
    { id: 39, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Pontos de recarga de bateria (celular e cadeira)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 0.0, qty: 0 },
    { id: 40, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Kit Livre", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 0.0, qty: 0 },
    { id: 41, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Estacionamento prioritário", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 350.0, qty: 0 },

    // 6.0 ATENDIMENTO E HOSPITALIDADE
    { id: 42, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Recepcinista inclusiva", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 550.0, qty: 0 },
    { id: 43, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Equipe de apoio em inclusão", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Pessoa", unit_price: 0.0, qty: 0 },
    { id: 44, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Assistente de acessibilidade", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 750.0, qty: 0 },
    { id: 45, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Central de Acessibilidade", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro²", unit_price: 80.0, qty: 0 },
    { id: 46, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Empréstimo/aluguel de cadeira de rodas", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 120.0, qty: 0 },
    { id: 47, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Empréstimo de abafadores de som", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 180.0, qty: 0 },
    { id: 48, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Sala Sensorial / Espaço de descompressão", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Evento", unit_price: 18000.0, qty: 0 },
    { id: 49, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Oficina de concertos", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Oficina", unit_price: 6000.0, qty: 0 },
    { id: 50, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Aplicativo de atendimento em Libras", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 600.0, qty: 0 },
    { id: 51, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Aplicativo de descrição de imagens", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 500.0, qty: 0 },

    // 7.0 CONTEÚDO E EXPERIÊNCIA
    { id: 52, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Indicação de palestrantes e debatedores", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 280.0, qty: 0 },
    { id: 53, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Contratação de palestrantes e debatedores", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 320.0, qty: 0 },
    { id: 54, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Show inclusivo", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Show", unit_price: 30000.0, qty: 0 },
    { id: 55, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Ativação inclusiva", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 250.0, qty: 0 },
    { id: 56, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Aplicativo de acessibilidade comunicacional", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 250.0, qty: 0 },
    { id: 57, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Conexão de internet", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 3500.0, qty: 0 },
    { id: 58, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Captação e transmissão online", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 12000.0, qty: 0 },
    { id: 59, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Intérprete de Libras", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 1500.0, qty: 0 },
    { id: 60, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Espaço para sentir o som", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Espaço", unit_price: 0.0, qty: 0 },
    { id: 61, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Audiodescrição", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 1600.0, qty: 0 },
    { id: 62, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Legendagem", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 1300.0, qty: 0 },
    { id: 63, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Guia-intérprete", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 2000.0, qty: 0 },
    { id: 64, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Showcase de acessibilidade e tecnologias assistivas", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 320.0, qty: 0 },

    // 8.0 OPERAÇÃO E SEGURANÇA
    { id: 65, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Locação de espaço", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 25000.0, qty: 0 },
    { id: 66, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Produtor de acessibilidade", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 1200.0, qty: 0 },
    { id: 67, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Brigadista", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 380.0, qty: 0 },
    { id: 68, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Plano de evacuação", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 300.0, qty: 0 },
    { id: 69, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Ambulatório", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 4000.0, qty: 0 },
    { id: 70, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Ambulância", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 3500.0, qty: 0 },
    { id: 71, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Comunicação de emergência", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 280.0, qty: 0 },
    { id: 72, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Segurança", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 380.0, qty: 0 },
    { id: 73, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Limpeza", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 250.0, qty: 0 },
    { id: 74, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Troféus", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 280.0, qty: 0 },
    { id: 75, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Certificado de participação", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 12.0, qty: 0 },
    { id: 76, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Alimentação", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 120.0, qty: 0 },
    { id: 77, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Coffee Break", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 90.0, qty: 0 },
    { id: 78, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Brindes e kits promocionais", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 120.0, qty: 0 },
    { id: 79, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Captação e edição de vídeo", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 3000.0, qty: 0 },
    { id: 80, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Fotógrafo", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 1800.0, qty: 0 },

    // 9.0 AVALIAÇÃO E LEGADO
    { id: 81, category: "9.0 AVALIAÇÃO E LEGADO", name: "Auditoria", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 420.0, qty: 0 },
    { id: 82, category: "9.0 AVALIAÇÃO E LEGADO", name: "Indicadores de acessibilidade", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 280.0, qty: 0 },
    { id: 83, category: "9.0 AVALIAÇÃO E LEGADO", name: "Pesquisa quantitativa", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 0.0, qty: 0 },
    { id: 84, category: "9.0 AVALIAÇÃO E LEGADO", name: "Pesquisa qualitativa", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 220.0, qty: 0 },
    { id: 85, category: "9.0 AVALIAÇÃO E LEGADO", name: "Relatório final", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 300.0, qty: 0 },

    // 10.0 MONETIZAÇÃO E PATROCÍNIO
    { id: 86, category: "10.0 MONETIZAÇÃO E PATROCÍNIO", name: "Consultor de captação de patrocínio", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 450.0, qty: 0 },
    { id: 87, category: "10.0 MONETIZAÇÃO E PATROCÍNIO", name: "Reunião de apresentação do projeto", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 280.0, qty: 0 }
];


// Clonagem inicial dos dados com garantia de tipos
let servicesData = JSON.parse(JSON.stringify(initialData)).map(item => {
    return {
        ...item,
        selected: item.qty > 0 || item.selected || false,
        qty: Number(item.qty) || 0,
        unit_price: Number(item.unit_price) || 0
    };
});

let activeFilter = 'all';
let searchQuery = '';

// Utilitário de Formatação Monetária
const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    calculateTotals();
    setupEventListeners();
});

function setupEventListeners() {
    // Filtros por Badge/Chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            renderServices();
        });
    });

    // Filtro por Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderServices();
        });
    }

    // Recálculo ao alterar inputs financeiros gerais
    ['comissao-input', 'outras-despesas-input', 'impostos-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculateTotals);
    });

    // Botão Limpar / Reset
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Restaura valores originais do initialData
            servicesData = JSON.parse(JSON.stringify(initialData)).map(item => ({
                ...item,
                selected: false,
                qty: 0,
                unit_price: Number(item.unit_price) || 0
            }));
            renderServices();
            calculateTotals();
        });
    }
}

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = '';

    // Filtragem dos serviços por categoria/busca
    const filteredData = servicesData.filter(item => {
        const matchesFilter = activeFilter === 'all' || item.badge === activeFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    const categories = [...new Set(filteredData.map(item => item.category))];

    if (categories.length === 0) {
        container.innerHTML = '<div class="card"><p style="text-align:center; color: var(--text-secondary);">Nenhum serviço encontrado.</p></div>';
        return;
    }

    categories.forEach(category => {
        const catCard = document.createElement('div');
        catCard.className = 'card';

        const catHeader = document.createElement('div');
        catHeader.className = 'category-header';
        catHeader.innerHTML = `<strong>${category}</strong>`;
        catCard.appendChild(catHeader);

        const itemsInCat = filteredData.filter(item => item.category === category);

        itemsInCat.forEach(item => {
            const row = document.createElement('div');
            row.className = 'item-row';
            
            const qtyDisplayValue = item.qty > 0 ? item.qty : '';

            row.innerHTML = `
                <div class="item-check">
                    <input type="checkbox" id="chk-${item.id}" ${item.selected ? 'checked' : ''}>
                </div>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    ${item.description ? `<div class="item-desc">${item.description}</div>` : ''}
                </div>
                <div>
                    <span class="badge badge-${item.badge_class}">${item.badge}</span>
                </div>
                <div class="item-price-wrapper">
                    <span class="price-prefix">R$</span>
                    <input type="number" 
                           class="unit-price-input" 
                           id="price-${item.id}" 
                           value="${item.unit_price}" 
                           step="0.01" 
                           min="0">
                    <span class="unit-label">/ ${item.unit}</span>
                </div>
                <div>
                    <input type="number" 
                           class="qty-input" 
                           id="qty-${item.id}" 
                           value="${qtyDisplayValue}" 
                           placeholder="0" 
                           min="0"
                           step="1">
                </div>
                <div class="item-subtotal" id="subtotal-${item.id}">
                    ${formatCurrency(item.selected ? item.unit_price * item.qty : 0)}
                </div>
            `;

            const checkbox = row.querySelector(`#chk-${item.id}`);
            const qtyInput = row.querySelector(`#qty-${item.id}`);
            const priceInput = row.querySelector(`#price-${item.id}`);

            checkbox.addEventListener('change', (e) => toggleItem(item.id, e.target.checked));
            qtyInput.addEventListener('input', (e) => updateQty(item.id, e.target.value));
            priceInput.addEventListener('input', (e) => updateUnitPrice(item.id, e.target.value));

            catCard.appendChild(row);
        });

        container.appendChild(catCard);
    });
}

function toggleItem(id, isChecked) {
    const item = servicesData.find(i => i.id === id);
    if (item) {
        item.selected = isChecked;
        if (isChecked && item.qty === 0) item.qty = 1;
        if (!isChecked) item.qty = 0;

        const qtyInput = document.getElementById(`qty-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);
        
        if (qtyInput) qtyInput.value = item.qty > 0 ? item.qty : '';
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * item.qty : 0);

        calculateTotals();
    }
}

function updateQty(id, qtyValue) {
    const qty = Math.max(0, parseFloat(qtyValue) || 0);
    const item = servicesData.find(i => i.id === id);
    
    if (item) {
        item.qty = qty;
        item.selected = qty > 0;

        const chkInput = document.getElementById(`chk-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);

        if (chkInput) chkInput.checked = item.selected;
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * qty : 0);

        calculateTotals();
    }
}

// Nova função para atualizar o valor monetário da hora/unidade dinamicamente
function updateUnitPrice(id, priceValue) {
    const unitPrice = Math.max(0, parseFloat(priceValue) || 0);
    const item = servicesData.find(i => i.id === id);

    if (item) {
        item.unit_price = unitPrice;

        const subtotalEl = document.getElementById(`subtotal-${id}`);
        if (subtotalEl) {
            subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * item.qty : 0);
        }

        calculateTotals();
    }
}

function calculateTotals() {
    let essenciais = 0, recomendados = 0, premium = 0;
    let pontosObtidos = 0;
    let pontosTotais = 0;

    servicesData.forEach(item => {
        const subtotal = item.unit_price * item.qty;

        if (item.selected && item.qty > 0) {
            const badgeUpper = (item.badge || '').toUpperCase();
            if (badgeUpper === 'ESSENCIAL') essenciais += subtotal;
            else if (badgeUpper === 'RECOMENDADO') recomendados += subtotal;
            else if (badgeUpper === 'PREMIUM') premium += subtotal;
        }

        const badgeUpper = (item.badge || '').toUpperCase();
        let peso = 0;

        if (badgeUpper === 'ESSENCIAL') peso = 1;
        else if (badgeUpper === 'RECOMENDADO') peso = 2;
        else if (badgeUpper === 'PREMIUM') peso = 3;

        if (peso > 0) {
            pontosTotais += peso;
            if (item.selected && item.qty > 0) {
                pontosObtidos += peso;
            }
        }
    });

    const subtotalGeral = essenciais + recomendados + premium;

    const comissaoPct = parseFloat(document.getElementById('comissao-input')?.value) || 0;
    const outrasDespesas = parseFloat(document.getElementById('outras-despesas-input')?.value) || 0;
    const impostosPct = parseFloat(document.getElementById('impostos-input')?.value) || 0;

    const valorComissao = subtotalGeral * (comissaoPct / 100);
    const valorImpostos = subtotalGeral * (impostosPct / 100);
    const valorFinal = subtotalGeral + valorComissao + outrasDespesas + valorImpostos;

    const setElementText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setElementText('total-essenciais', formatCurrency(essenciais));
    setElementText('total-recomendados', formatCurrency(recomendados));
    setElementText('total-premium', formatCurrency(premium));
    setElementText('subtotal-geral', formatCurrency(subtotalGeral));

    setElementText('comissao-valor', formatCurrency(valorComissao));
    setElementText('outras-despesas-valor', formatCurrency(outrasDespesas));
    setElementText('impostos-valor', formatCurrency(valorImpostos));

    setElementText('valor-final', formatCurrency(valorFinal));

    const percentualAcessibilidade = pontosTotais > 0
        ? Math.round((pontosObtidos / pontosTotais) * 100)
        : 0;

    setElementText('accessibility-percentage', `${percentualAcessibilidade}%`);
}