

const menuBtn = document.getElementById('menu-button');

let menuItem1 = document.getElementById('menu-element-1');
let menuItem2 = document.getElementById('menu-element-2');
let menuItem3 = document.getElementById('menu-element-3');

let menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    console.log('Jou mopeder');
    menu.classList.toggle('test');

    menuItem1.classList.toggle('rotate-left');
    menuItem2.classList.toggle('rotate-right');
    menuItem3.classList.toggle('none')
    
})

