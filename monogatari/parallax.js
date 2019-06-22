let parallax_weights = [];

const parallax = document.querySelector('#parallax');
const parallax_divs = parallax.getElementsByTagName('div');

window.addEventListener('scroll', () => {

    for(let i = 0; i < parallax_divs.length; i++) {
        const translation_style = 'translateY(-' + (window.pageYOffset * parallax_weights[i]) + 'px)';
        parallax_divs[i].style.transform = translation_style;

        // const marginTop = '-' + (window.pageYOffset * parallax_weights[i]) + 'px';
        // parallax_divs[i].style.marginTop = marginTop;

        // parallax.style.overflow = 'hidden';
    }
}, false);