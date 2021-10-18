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

let darkMode = localStorage.getItem('Theme');
const refs = {
  body: document.querySelector('body'),
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};

const setDarkMode = () => {
  document.body.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
};

const setLightMode = () => {
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('Theme', Theme.LIGHT);
};

if (darkMode === Theme.DARK) {
  setDarkMode();
}

refs.themeSwitcher.addEventListener('change', () => {
  darkMode = localStorage.getItem('Theme');
  if (darkMode !== Theme.DARK) {
    setDarkMode();
  } else {
    setLightMode();
  }
});
