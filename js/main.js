
function toggleMenu() {
    const nav = document.querySelector('#head nav');
    const ul = nav.querySelector('ul');
    const register = nav.querySelector('.register');
    
    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'flex';
        register.style.display = 'flex';
        nav.style.height = 'auto';
        nav.style.padding = '1rem';
    } else {
        ul.style.display = 'none';
        register.style.display = 'none';
        nav.style.height = '3rem';
        nav.style.padding = '0.5rem';
    }
}
function toggleMenu() {
    const nav = document.querySelector('#head nav');
    const ul = nav.querySelector('ul');
    const register = nav.querySelector('.register');
    
    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'flex';
        register.style.display = 'flex';
        nav.style.height = 'auto';
        nav.style.padding = '1rem';
    } else {
        ul.style.display = 'none';
        register.style.display = 'none';
        nav.style.height = '3rem';
        nav.style.padding = '0.5rem';
    }

}