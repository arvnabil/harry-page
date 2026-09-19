/**
 * Dynamic Component Loader for Harry Kusumo (AVer Technology Hub)
 * Automatically fetches & renders components/header.html and components/footer.html
 */
document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('site-header', 'components/header.html'),
    loadComponent('site-footer', 'components/footer.html')
  ]);

  highlightActiveNavigation();
});

async function loadComponent(targetId, componentUrl) {
  const container = document.getElementById(targetId);
  if (!container) return;

  try {
    const response = await fetch(componentUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status} loading ${componentUrl}`);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`[ComponentLoader] Failed to load ${componentUrl}:`, error);
  }
}

function highlightActiveNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Highlight top level navigation links
  const navLinks = document.querySelectorAll('#site-header nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();

    if (linkPath === currentPath && !link.classList.contains('mega-menu')) {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
    }
  });
}
