// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // HERO
    const heroContent = document.getElementById('hero-content');
    heroContent.innerHTML = `
        <div class="hero-image">
            <img src="${heroData.image}" alt="${heroData.name}">
        </div>
        <h1>${heroData.name}</h1>
        <p>${heroData.role}</p>
        <div class="cta-buttons">
            ${heroData.cta.map(c => `<a href="${c.href}" class="btn btn-${c.type}">${c.text}</a>`).join('')}
        </div>
    `;

    // ABOUT
    document.getElementById('about-description').textContent = aboutData.description;
    const aboutStats = document.getElementById('about-stats');
    aboutData.stats.forEach(stat => {
        const div = document.createElement('div');
        div.classList.add('stat-card');
        div.innerHTML = `<div class="stat-number">${stat.number}</div><p>${stat.label}</p>`;
        aboutStats.appendChild(div);
    });

    // EXPERIENCE
    const expContainer = document.getElementById('experience-container');
    experienceData.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('experience-item');
        div.innerHTML = `
            <div class="experience-header">
                <h3 class="job-title">${exp.title}</h3>
                <div class="company-name">${exp.company}</div>
                <div class="job-period">${exp.period}</div>
            </div>
            <ul class="job-responsibilities">
                ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        `;
        expContainer.appendChild(div);
    });

    // SKILLS
    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('skills-category');
        div.innerHTML = `
            <h3 class="category-title">${category.category}</h3>
            <div class="skills-list">
                ${category.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(div);
    });

    // CONTACT
    document.getElementById('contact-description').textContent = contactData.description;
    const contactInfo = document.getElementById('contact-info');
    contactData.info.forEach(c => {
        const div = document.createElement('div');
        div.classList.add('contact-item');
        div.innerHTML = `
            <div class="contact-label">${c.label}</div>
            <a href="${c.href}">${c.value}</a>
        `;
        contactInfo.appendChild(div);
    });

    // PROJECTS
    const projectsGrid = document.getElementById('projects-grid');
    Object.keys(projectsData).forEach(key => {
        const project = projectsData[key];
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.logo || ''}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.subtitle}</p>
                <div class="project-roles">
                    ${project.role.map(r => `<span class="project-role">${r}</span>`).join('')}
                </div>
            </div>
            <div class="project-footer">
                <a href="project-details.html?project=${key}" class="btn btn-primary">View</a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
});
