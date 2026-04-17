document.addEventListener('DOMContentLoaded', function () {
  loadProjects();
});

function loadProjects() {
  const featuredContainer = document.getElementById('featured-projects');
  const allContainer = document.getElementById('all-projects');

  fetch('../data/projects.json')
    .then(response => response.json())
    .then(projects => {

      projects.forEach(function (project) {

        const category = normalizeCategory(project.category);

        // Always render in All Projects
        const smallCard = createSmallCard(project, category);
        allContainer.appendChild(smallCard);

        // Render in Featured if marked
        if (project.featured) {
          const featuredCard = createFeaturedCard(project, category);
          featuredContainer.appendChild(featuredCard);
        }

      });

      // Initialize filter AFTER rendering
      initProjectFilter();
    })
    .catch(error => console.error('Error loading projects:', error));
}

function createFeaturedCard(project, category) {
  const card = document.createElement('div');
  card.className = 'project-card-featured';
  card.setAttribute('data-category', category);

  card.innerHTML = `
    <div class="project-card-cat">${project.subcategory}</div>
    <div class="project-card-title">${project.title}</div>
    <div class="project-card-desc">${project.description}</div>
    <div class="project-card-tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="project-card-footer">
      <a href="${project.link}" target="_blank" rel="noopener" class="project-card-link">
        View on GitHub
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  `;

  return card;
}

function createSmallCard(project, category) {
  const card = document.createElement('div');
  card.className = 'project-card-small';
  card.setAttribute('data-category', category);

  card.innerHTML = `
    <div class="project-card-cat">${project.subcategory}</div>
    <div class="project-card-title">${project.title}</div>
    <div class="project-card-desc">${project.description}</div>
    <div class="project-card-tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="project-card-footer">
      <a href="${project.link}" target="_blank" rel="noopener" class="project-card-link">
        GitHub
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  `;

  return card;
}

function normalizeCategory(category) {
  if (category === 'Personal Projects') return 'personal';
  if (category === 'Foundations') return 'foundations';
  return 'all';
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allCards = document.querySelectorAll('[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      allCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('project-hidden');
        } else {
          card.classList.add('project-hidden');
        }
      });
    });
  });
}