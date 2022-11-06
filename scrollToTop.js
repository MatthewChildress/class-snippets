const scrollBtn = document.getElementById('scrollBtn');

export const showScrollButton = () => {
    (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';

}

export const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}