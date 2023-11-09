window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}



// navbar
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')
})

// animation
const words = ["gi Satmata R"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
            currentWord = words[i];
            if (isDeleting) {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
                j--;
                if (j == 0) {
                    isDeleting = false;
                    i++;
                    if (i == words.length) {
                        i = 0;
                    }
                }
            } else {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
                j++;
                if (j == currentWord.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 100);
        }

        type();