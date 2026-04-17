document.addEventListener('DOMContentLoaded', function () {
  initProjectFilter();
});

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
