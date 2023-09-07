const header = document.querySelector('#header');
const menu = document.querySelector('.menu-btns')
const mobile_nav = () => {
    header.classList.toggle('active');
}
menu.addEventListener('click',()=>mobile_nav());