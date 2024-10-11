// Function to save changes to localStorage
function saveChanges() {
    var _a, _b, _c, _d;
    var personalInfo = (_a = document.getElementById('personal-info')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var education = (_b = document.getElementById('education')) === null || _b === void 0 ? void 0 : _b.innerHTML;
    var skills = (_c = document.getElementById('skills')) === null || _c === void 0 ? void 0 : _c.innerHTML;
    var workExperience = (_d = document.getElementById('work-experience')) === null || _d === void 0 ? void 0 : _d.innerHTML;
    localStorage.setItem('personalInfo', personalInfo || '');
    localStorage.setItem('education', education || '');
    localStorage.setItem('skills', skills || '');
    localStorage.setItem('workExperience', workExperience || '');
}
// Function to load saved changes from localStorage
function loadSavedChanges() {
    var personalInfo = localStorage.getItem('personalInfo');
    var education = localStorage.getItem('education');
    var skills = localStorage.getItem('skills');
    var workExperience = localStorage.getItem('workExperience');
    if (personalInfo) {
        document.getElementById('personal-info').innerHTML = personalInfo;
    }
    if (education) {
        document.getElementById('education').innerHTML = education;
    }
    if (skills) {
        document.getElementById('skills').innerHTML = skills;
    }
    if (workExperience) {
        document.getElementById('work-experience').innerHTML = workExperience;
    }
}
// Get the button and section to toggle
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add event listener to the button
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
// Load saved changes on page load
window.addEventListener('load', loadSavedChanges);
// Save changes every time the user modifies the content
document.querySelectorAll('.section').forEach(function (section) {
    section.addEventListener('input', saveChanges);
});