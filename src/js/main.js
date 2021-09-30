import menuCardTempl from '/templates/menu-cards.hbs';
import menu from '/menu.json';

const menuListRef = document.querySelector('.menu')
const cardsMenu = createCardsMenu(menu)

menuListRef.insertAdjacentHTML('beforeend', cardsMenu)

function createCardsMenu(menu) {
    return menuCardTempl(menu);
}

console.log(cardsMenu)