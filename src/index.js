import menuCard from './templates/menu-items.hbs';
import foodItems from './menu.json';
import './sass/main.scss';

console.log(menuCard);

const menuContainer = document.querySelector('.js-menu');

const cardsMarkup = createMenuCardsMarkup(foodItems);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(foodItems) {
  return foodItems.map(menuCard).join('');
}
