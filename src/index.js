import './style.css';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadHome from './home'; 
import {makeHeader, makeFooter, removeChildNodes} from './page-load';
import loadHome2 from './home2';

initialLoad();


export function addNavEvents() {
    const content = document.getElementById('content');
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');


    homeButton.addEventListener('click', function() {
        removeChildNodes(content);
        makeHeader();
        loadHome();
        makeFooter();
    });

    menuButton.addEventListener('click', function() {
        removeChildNodes(content);
        makeHeader();
        loadHome2();
        makeFooter();
    });
    aboutButton.addEventListener('click', loadAbout);
}

function initialLoad() {
    makeHeader();
    loadHome(); 
    addNavEvents();
    makeFooter();
};