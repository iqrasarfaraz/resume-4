// Function to save changes to localStorage
function saveChanges() {
    const personalInfo = document.getElementById('personal-info')?.innerHTML;
    const education = document.getElementById('education')?.innerHTML;
    const skills = document.getElementById('skills')?.innerHTML;
    const workExperience = document.getElementById('work-experience')?.innerHTML;

    localStorage.setItem('personalInfo', personalInfo || '');
    localStorage.setItem('education', education || '');
    localStorage.setItem('skills', skills || '');
    localStorage.setItem('workExperience', workExperience || '');
}

// Function to load saved changes from localStorage
function loadSavedChanges() {
    const personalInfo = localStorage.getItem('personalInfo');
    const education = localStorage.getItem('education');
    const skills = localStorage.getItem('skills');
    const workExperience = localStorage.getItem('workExperience');

    if (personalInfo) {
        document.getElementById('personal-info')!.innerHTML = personalInfo;
    }
    if (education) {
        document.getElementById('education')!.innerHTML = education;
    }
    if (skills) {
        document.getElementById('skills')!.innerHTML = skills;
    }
    if (workExperience) {
        document.getElementById('work-experience')!.innerHTML = workExperience;
    }
}

// Get the button and section to toggle
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add event listener to the button
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
}

// Load saved changes on page load
window.addEventListener('load', loadSavedChanges);

// Save changes every time the user modifies the content
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('input', saveChanges);
});