import menuCard from './templates/menu-items.hbs';
import foodItems from './menu.json';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(foodItems);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(foodItems) {
  return menuCard(foodItems);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};

refs.themeSwitcher.addEventListener('change', onThemeChange);

function onThemeChange(evt) {
  localStorage.setItem('theme', 'Theme.LIGHT');

  if (evt.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    return refs.body.classList.add(Theme.DARK);
  }
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}
