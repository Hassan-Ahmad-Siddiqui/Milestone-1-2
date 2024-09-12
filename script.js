var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skills) {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    }
});
// const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
// const showButton = document.getElementById('show-skills') as HTMLButtonElement;
// const skills = document.getElementById('skills') as HTMLElement;
// toggleButton?.addEventListener('click', () => {
//     if (skills) {
//         skills.style.display = 'none';
//     }
// });
// showButton?.addEventListener('click', () => {
//     if (skills) {
//         skills.style.display = 'block';
//     }
// });
