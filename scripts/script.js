document.addEventListener('DOMContentLoaded', function () {
    const profileData = {
        name: "The Eddu",
        description: 'Estudante autodidata e leitor assíduo',
        profile: './images/profile.jpg',
        websites: {
            'Meus Artigos': 'https://theeddu.github.io/Cyber-Blog/',
            'Relatórios de Labs': 'https://theeddu.github.io/PortfolioLabs/',
            'Conteúdo de Inglês': 'https://theeddu.github.io/UpgradingMind/'
        },
        socials: {
            Github: 'https://github.com/TheEddu',
            TryHackMe: 'https://tryhackme.com/p/TheEddu',
            Linkedin: 'https://www.linkedin.com/in/eduardo-s-b39896205/'
        },
        skills: ["Cybersecurity", "Linux", "Python", "Administração", "Excel", "Design", "Front-end", "Redes"]
    };

    const profileCard = document.getElementById('profileCard');

    function renderProfile() {
        profileCard.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'border border-[#c2b280] rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center';

        // Profile image
        if (profileData.profile) {
            const img = document.createElement('img');
            img.src = profileData.profile;
            img.alt = 'Profile Image';
            img.className = 'w-32 h-32 rounded-full border-4 border-[#c2b280] object-cover mb-4 shadow-md';
            card.appendChild(img);
        }

        // Name
        const name = document.createElement('h2');
        name.textContent = profileData.name || 'Não especificado';
        name.className = 'text-2xl font-bold text-white mb-1';
        card.appendChild(name);

        // Description
        const desc = document.createElement('p');
        desc.textContent = profileData.description || 'Não especificado';
        desc.className = 'text-white mb-2';
        card.appendChild(desc);

        // Websites
        const websitesDiv = document.createElement('div');
        websitesDiv.className = 'flex gap-4 mt-4 mb-2';
        for (const [key, url] of Object.entries(profileData.websites)) {
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.className = 'flex items-center gap-1 px-3 py-1 rounded-full bg-[#c2b280] text-[#3e2f1c] text-xs font-semibold shadow hover:bg-[#b3a06a] transition';
            
            let icon = '';
            if (key.toLowerCase().includes('port')) {
                icon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke="currentColor"/></svg>`;
            } else if (key.toLowerCase().includes('art')) {
                icon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>`;
            } else if (key.toLowerCase().includes('lab')) {
                icon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2v6l-2 2v2a8 8 0 1 0 16 0v-2l-2-2V2"/></svg>`;
            } else {
                icon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>`;
            }
            a.innerHTML = icon + `<span>${key}</span>`;
            a.title = key;
            websitesDiv.appendChild(a);
        }
        card.appendChild(websitesDiv);

        // Socials
        const socialsDiv = document.createElement('div');
        socialsDiv.className = 'flex gap-4 mt-4 mb-2';
        for (const [key, url] of Object.entries(profileData.socials)) {
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.className = 'hover:scale-110 transition-transform';
            // SVGs
            let icon = '';
            if (key === 'Github') {
                icon = `<svg class="w-6 h-6 text-[#3e2f1c]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>`;
            } else if (key === 'Linkedin') {
                icon = `<svg class="w-6 h-6 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/></svg>`;
            } else if (key === 'TryHackMe') {
                icon = `<svg class="w-6 h-6 text-[#d7263d]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#fff" font-family="Arial" dy=".3em">THM</text></svg>`;
            }
            a.innerHTML = icon;
            a.title = key;
            socialsDiv.appendChild(a);
        }
        card.appendChild(socialsDiv);

        // Skills
        const skillsDiv = document.createElement('div');
        skillsDiv.className = 'mt-4 flex flex-wrap gap-2 justify-center';
        profileData.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'bg-[#c2b280] text-[#3e2f1c] px-3 py-1 rounded-full text-xs font-semibold shadow';
            span.textContent = skill;
            skillsDiv.appendChild(span);
        });
        card.appendChild(skillsDiv);

        profileCard.appendChild(card);
    }

    renderProfile();
});