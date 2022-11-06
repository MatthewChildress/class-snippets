/* toggles dark mode based on adding/removing class names.
The ternary operator adds or removes class names depending on current status.
Toggling truthy status will enable dark mode and have the button text show light mode option.
Toggling falsy does the opposite. Use of base CSS variables allows the toggling of each mode */

export const darkMode = () => {
    let page = document.body;
    let toggle = document.querySelector('#themeToggle');

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('darkMode');
        page.classList.contains("darkMode") ? toggle.textContent = 'Toggle Light' : toggle.textContent = 'Toggle Dark';
    })
}