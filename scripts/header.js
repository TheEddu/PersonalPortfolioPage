document.addEventListener('DOMContentLoaded', function () {
  const isInPages = location.pathname.includes('/pages/');
  const basePath = isInPages ? '..' : '.';
  const logoSrc = isInPages ? '../images/logo.png' : './images/logo.png';

  const headerHTML = `
    <header class="main-header">
      <img src="${logoSrc}" alt="Logo" class="logo-img">
      <nav class="main-nav" aria-label="Navegação principal">
        <a href="${basePath}/index.html" class="${location.pathname.endsWith('index.html') || location.pathname === '/' ? 'active' : ''}">Home</a>
        <a href="${basePath}/pages/projects.html" class="${location.pathname.endsWith('projects.html') ? 'active' : ''}">Projetos</a>
        <a href="${basePath}/pages/qualifications.html" class="${location.pathname.endsWith('qualifications.html') ? 'active' : ''}">Qualificações</a>
        <a href="${basePath}/pages/publications.html" class="${location.pathname.endsWith('publications.html') ? 'active' : ''}">Publicações</a>
        <a href="${basePath}/pages/experiences.html" class="${location.pathname.endsWith('experiences.html') ? 'active' : ''}">Experiências</a>
      </nav>
    </header>
  `;

  const headerContainer = document.getElementById('main-header');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
});