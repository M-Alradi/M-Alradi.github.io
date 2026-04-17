document.addEventListener('DOMContentLoaded', function () {
  initExperienceTabs();
});

function initExperienceTabs() {
  const btns = document.querySelectorAll('.exp-timeline-btn');
  const panels = document.querySelectorAll('.exp-panel');

  if (!btns.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-target');

      btns.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}
