// Função para filtrar por busca textual
function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(input)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    toggleNoResults(visibleCount);
}

// Função para filtrar por categoria
function filterCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    let visibleCount = 0;

    // Atualiza botão ativo
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Limpa busca textual ao mudar de categoria
    document.getElementById('searchInput').value = '';

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'todos' || cardCategory === category) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    toggleNoResults(visibleCount);
}

// Mostra/oculta mensagem de "nenhum produto encontrado"
function toggleNoResults(count) {
    const noResults = document.getElementById('noResults');
    if (count === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}