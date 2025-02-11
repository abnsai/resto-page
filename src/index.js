import './styles.css';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutPage from './about.js';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

function clearContent() {
  content.innerHTML = '';
}

function loadHomePage() {
  clearContent();
  createHomePage();
}

function loadMenuPage() {
  clearContent();
  createMenuPage();
}

function loadAboutPage() {
  clearContent();
  createAboutPage();
}

homeBtn.addEventListener('click', loadHomePage);
menuBtn.addEventListener('click', loadMenuPage);
aboutBtn.addEventListener('click', loadAboutPage);

loadHomePage();
