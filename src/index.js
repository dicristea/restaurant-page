import './style.css';
import makeHeader from './page-load';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadHome from './home';


makeHeader();
loadHome(); 

const content = document.getElementById('content');
const titleWrap = document.querySelector('title-wrap');
const infoWrap = document.querySelector('info-wrap');


const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', function() {
    content.removeChild(content.children[2]);
    content.removeChild(content.children[2]);
    loadHome();
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', function() {
    content.removeChild(content.children[2]);
    content.removeChild(content.children[2])
    loadMenu();
});

const aboutButton = document.querySelector('.about');
aboutButton.addEventListener('click', function() {
    content.removeChild(content.children[2]);
    content.removeChild(content.children[2])
    loadAbout();
});