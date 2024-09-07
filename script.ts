// Get the skills section by its ID
const skillsSection = document.getElementById('skills');

// Add an event listener to the skills section
if (skillsSection) {
    skillsSection.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
    });
}