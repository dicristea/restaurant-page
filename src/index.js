import './style.css';
import makeHeader from './page-load';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadHome from './home';

initialLoad();


function addNavEvents() {
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');


    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    aboutButton.addEventListener('click', loadAbout);
}

function initialLoad() {
    makeHeader();
    loadHome(); 
    addNavEvents();
};