async function loadComponent(id, filePath) {
  const res = await fetch(filePath);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

function setActiveLink() {
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("nav-placeholder", "../components/nav.html");

  // run AFTER DOM injection
  setActiveLink();
});
