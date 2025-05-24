document.addEventListener('DOMContentLoaded', function () {
  const footer = `
    <footer class="bg-[#c2b280] text-center text-sm text-[#3e2f1c] py-6 mt-12 border-t border-[#8c7853]">
      <p>Acesse meu </p>
      <a class="text-blue-700" target="_blank" href="https://github.com/TheEddu">GitHub</a>
      <br>
      <a class="text-blue-700" target="_blank" href="https://www.linkedin.com/in/eduardo-s-b39896205/">Linkedin</a>
      <br>
      <a class="text-blue-700" target="_blank" href="https://tryhackme.com/p/TheEddu">TryHackMe</a>
      <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  `;
  const footerContainer = document.getElementById('main-footer');
  if (footerContainer) footerContainer.innerHTML = footer;
});
