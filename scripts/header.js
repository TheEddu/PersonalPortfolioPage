document.addEventListener('DOMContentLoaded', function () {
  const header = `
    <header class="bg-[#c2b280] py-4 px-6 flex justify-between items-center sticky top-0 z-50 border-b border-[#8c7853] shadow-md">
      <img src="${location.pathname.includes('/pages/') ? '../images/logo.png' : 'images/logo.png'}" class="rounded-full h-24 h-24" alt="logo">
      <nav class="space-x-4">
        <a href="${location.pathname.includes('/pages/') ? '../index.html' : 'index.html'}" class="hover:text-[#5c432a]${location.pathname.endsWith('index.html') ? ' font-bold' : ''}">Home</a>
        <a href="${location.pathname.includes('/pages/') ? '../pages/projects.html' : './pages/projects.html'}" class="hover:text-[#5c432a]${location.pathname.endsWith('projects.html') ? ' font-bold' : ''}">Projetos</a>
        <a href="${location.pathname.includes('/pages/') ? '../pages/qualifications.html' : './pages/qualifications.html'}" class="hover:text-[#5c432a]${location.pathname.endsWith('qualifications.html') ? ' font-bold' : ''}">Qualificações</a>
        <a href="${location.pathname.includes('/pages/') ? '../pages/publications.html' : './pages/publications.html'}" class="hover:text-[#5c432a]${location.pathname.endsWith('publications.html') ? ' font-bold' : ''}">Publicações</a>
        <a href="${location.pathname.includes('/pages/') ? '../pages/experiences.html' : './pages/experiences.html'}" class="hover:text-[#5c432a]${location.pathname.endsWith('experiences.html') ? ' font-bold' : ''}">Experiências</a>
      </nav>
    </header>
  `;
  const headerContainer = document.getElementById('main-header');
  if (headerContainer) headerContainer.innerHTML = header;
});
