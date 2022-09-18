import './style.css';
import './menu.js';
import './about.js';
import loadHome from './home.js';


const makeHeader = function() {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const home = document.createElement('button');
    home.classList.add('home');
    home.textContent = 'home';

    const menu = document.createElement('button');
    menu.classList.add('menu');
    menu.textContent = ('menu');

    const about = document.createElement('button');
    about.classList.add('about');
    about.textContent = 'about';

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(about);
    content.appendChild(header);

};

makeHeader();
loadHome();