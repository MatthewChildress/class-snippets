// when called, loops through all elements with class name modifier .is-open
const activeSkills = () => {
    const currentTitle = document.querySelectorAll('.is-open');
    currentTitle.forEach((title) => {
        title.classList.remove('is-open');
    })
}

/* opens and closes skills lists based on adding/removing class names.
The ternary operator adds or removes class names depending on current status
truthy status will remove a class name falsy status will first call activeSkills() to remove the class name from
other elements that currently have then add the class name to the targeted element */
export const openSkills = () => {
const titles = document.querySelectorAll('.skillTitle');
titles.forEach((title) => {
    title.addEventListener('click', () => {


        title.classList.contains("is-open") ? title.classList.remove('is-open') : (activeSkills() , title.classList.add('is-open'));
    })
})
}

