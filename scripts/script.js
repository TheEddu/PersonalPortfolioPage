document.addEventListener('DOMContentLoaded', function () {
  const profileData = {
    name: "The Eddu",
    description: 'Estudante autodidata e leitor assíduo',
    profile: './images/profile.jpg',
    websites: {
      'Meus Artigos': 'https://theeddu.github.io/Cyber-Blog/',
      'Meus Jogos': 'https://theeddu.github.io/TheEdduGames/'
    },
    socials: {
      Github: 'https://github.com/TheEddu',
      TryHackMe: 'https://tryhackme.com/p/TheEddu',
      Linkedin: 'https://www.linkedin.com/in/eduardo-s-b39896205/'
    },
    skills: ["Cybersecurity", "Linux", "Python", "Administração", "Excel", "Front-end", "Redes"]
  };

  const profileCard = document.getElementById('profileCard');

  function renderProfile() {
    if (!profileCard) return;

    profileCard.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'profile-card-inner';

    // Imagem de perfil
    if (profileData.profile) {
      const img = document.createElement('img');
      img.src = profileData.profile;
      img.alt = 'Foto de perfil';
      img.className = 'profile-img';
      card.appendChild(img);
    }

    // Nome
    const name = document.createElement('h2');
    name.textContent = profileData.name;
    name.className = 'profile-name';
    card.appendChild(name);

    // Descrição
    const desc = document.createElement('p');
    desc.textContent = profileData.description;
    desc.className = 'profile-desc';
    card.appendChild(desc);

    // Links de websites
    const websitesDiv = document.createElement('div');
    websitesDiv.className = 'profile-links';
    for (const [label, url] of Object.entries(profileData.websites)) {
      if (!url) continue;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'profile-link-btn';
      a.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <span>${label}</span>
      `;
      a.title = label;
      websitesDiv.appendChild(a);
    }
    if (websitesDiv.children.length > 0) card.appendChild(websitesDiv);

    // Networking
    const socialsDiv = document.createElement('div');
    socialsDiv.className = 'profile-socials';
    for (const [platform, url] of Object.entries(profileData.socials)) {
      if (!url) continue;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'profile-social-icon';

      let svg = '';
      if (platform === 'Github') {
        svg = `<svg fill="currentColor" class="w-8 h-8 text-[#3e2f1c]" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>`;
      } else if (platform === 'Linkedin') {
        svg = `<svg fill="currentColor" class="w-8 h-8 text-[#0077b5]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/></svg>`;
      } else if (platform === 'TryHackMe') {
        svg = `<svg fill="#d7263d" class="w-8 h-8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#d7263d"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#fff" font-family="Arial, sans-serif">THM</text></svg>`;
      }
      a.innerHTML = svg;
      a.title = platform;
      socialsDiv.appendChild(a);
    }
    if (socialsDiv.children.length > 0) card.appendChild(socialsDiv);

    // Habilidades
    const skillsDiv = document.createElement('div');
    skillsDiv.className = 'profile-skills';
    profileData.skills.forEach(skill => {
      const span = document.createElement('span');
      span.className = 'skill-tag';
      span.textContent = skill;
      skillsDiv.appendChild(span);
    });
    card.appendChild(skillsDiv);

    profileCard.appendChild(card);
  }

  renderProfile();
});