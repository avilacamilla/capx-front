import { fetchOrganizations, fetchTerritories, fetchTypes } from '../../src/services/data.service.js';

async function loadOrganizations() {
    try {
        const [organizations, territories, types] = await Promise.all([
            fetchOrganizations(),
            fetchTerritories(),
            fetchTypes()
        ]);

        const content = document.querySelector('.org-section');
        content.innerHTML = '';

        organizations.forEach(org => {
            const orgTerritory = org.territory.map(id => territories.find(t => t.id === id)?.name).join(', ') || 'N/A';
            const orgType = types.find(t => t.id === org.type)?.name || 'N/A';

            const orgCard = document.createElement('article');
            orgCard.className = 'organization-card';

            if (org.profileImage) {
                const img = document.createElement('img');
                img.src = org.profileImage;
                img.alt = `Imagem da organização ${org.name}`;
                img.className = 'org-image';
                orgCard.appendChild(img);
            } else {
                const img = document.createElement('img');
                img.src = '../../assets/images/default-placeholder.png';
                img.alt = `Imagem default para organização ${org.name}`;
                img.className = 'org-image';
                orgCard.appendChild(img);
            }

            const title = document.createElement('h2');
            title.className = 'org-title';
            title.textContent = org.name;
            orgCard.appendChild(title);

            const acronym = document.createElement('p');
            acronym.innerHTML = `<strong>Acrônimo:</strong> ${org.acronym}`;
            orgCard.appendChild(acronym);

            const type = document.createElement('p');
            type.innerHTML = `<strong>Tipo:</strong> ${orgType}`;
            orgCard.appendChild(type);

            const territory = document.createElement('p');
            territory.innerHTML = `<strong>Território:</strong> ${orgTerritory}`;
            orgCard.appendChild(territory);

            if (org.metaPage) {
                const metaLink = document.createElement('a');
                metaLink.href = org.metaPage;
                metaLink.textContent = 'Meta-Wikimedia';
                metaLink.target = '_blank';
                metaLink.className = 'org-link';
                orgCard.appendChild(metaLink);
            }

            if (org.homeProject) {
                const projectLink = document.createElement('a');
                projectLink.href = org.homeProject;
                projectLink.textContent = 'Projeto Principal';
                projectLink.target = '_blank';
                projectLink.className = 'org-link';
                orgCard.appendChild(projectLink);
            }

            content.appendChild(orgCard);
        });
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadOrganizations);