document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        
        <!-- Coluna 1: Sobre mim -->
        <div class="footer-about">
          <h4 class="footer-title">The Eddu</h4>
          <p>Apaixonado por Cybersecurity, Pentest e automação. Compartilhando conhecimento através de projetos, eBooks e artigos.</p>
        </div>
        
        <!-- Coluna 2: Links -->
        <div class="footer-links">
          <h4 class="footer-title">Navegação</h4>
          <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/projects.html">Projetos</a></li>
            <li><a href="../pages/qualifications.html">Qualificações</a></li>
            <li><a href="../pages/publications.html">Publicações</a></li>
            <li><a href="../pages/experiences.html">Experiências</a></li>
          </ul>
        </div>
        
        <!-- Coluna 3: Networking -->
        <div class="footer-social">
          <h4 class="footer-title">Networking</h4>
          <div class="social-icons">
            <a href="https://github.com/TheEddu" aria-label="GitHub"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/eduardo-s-b39896205/" aria-label="LinkedIn"><i class="fab fa-linkedin fa-2x"></i></a>
            <a href="https://tryhackme.com/p/TheEddu" aria-label="TryHackMe"><i class="fas fa-shield-alt fa-2x"></i></a>
          </div>
        </div>
        
        <!-- Coluna 4: Contato -->
        <div class="footer-contact">
          <h4 class="footer-title">Contato</h4>
          <p>Disponível para oportunidades em TI</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${currentYear} The Eddu. Feito com dedicação e disciplina.</p>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById('main-footer');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});