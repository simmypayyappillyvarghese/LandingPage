const menuButton=document.getElementsByClassName("menu_btn")[0];
const closeButton=document.getElementsByClassName('close_btn')[0];

const navMenu=document.getElementsByClassName('nav-menu')[0];

menuButton.addEventListener('click',()=>{

navMenu.classList.add('show');
});

closeButton.addEventListener('click',()=>{

    navMenu.classList.remove('show');
    });