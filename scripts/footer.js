document.addEventListener('DOMContentLoaded', function () {
  const footer = `
    <footer class="bg-[#c2b280] text-[#3e2f1c] py-8 mt-12 border-t border-[#8c7853]">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <!-- Social Links Column -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Conecte-se comigo</h3>
        <ul class="space-y-2">
          <li>
            <a class="flex items-center justify-center md:justify-start text-blue-700 hover:text-blue-900 transition-colors duration-300" target="_blank" href="https://github.com/TheEddu">
              <i class="fab fa-github mr-2"></i> GitHub
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center md:justify-start text-blue-700 hover:text-blue-900 transition-colors duration-300" target="_blank" href="https://www.linkedin.com/in/eduardo-s-b39896205/">
              <i class="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center md:justify-start text-blue-700 hover:text-blue-900 transition-colors duration-300" target="_blank" href="https://tryhackme.com/p/TheEddu">
              <i class="fas fa-shield-alt mr-2"></i> TryHackMe
            </a>
          </li>
        </ul>
      </div>
      <!-- About/Project Column -->
      <div>
      <h3 class="text-lg font-semibold mb-4">Sobre o Portfólio</h3>
      <p class="text-sm">Este é o meu portfólio pessoal, showcasing meus projetos e habilidades.</p>
      </div>
      <!-- Image -->
      <div>
        <img src="${location.pathname.includes('/pages/') ? '../images/logo.png' : 'images/logo.png'}" class="rounded-full h-24 h-24" alt="logo">
      </div>
    </div>
    <!-- Bottom Copyright -->
    <div class="mt-8 text-center text-sm border-t border-[#8c7853] pt-4">
      <p>© 2025 Meu Portfólio. Desenvolvido por TheEddu.</p>
    </div>
  </div>
</footer>
  `;
  const footerContainer = document.getElementById('main-footer');
  if (footerContainer) footerContainer.innerHTML = footer;
});

