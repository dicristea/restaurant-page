import salad from './assets/spicy-bamboo-salad.jpg';
import soup from './assets/hot-sour-soup.jpeg';
import shoots from './assets/simmered-bamboo-shoots.jpg';
import { makeHeader, makeFooter } from './page-load';


class MenuItem {
    constructor (name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    
};


function loadMenu() {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    let menuWrap;


    body.classList.add('body');



    
    for(let i = 0; i < 4; i++) {
        menuWrap = document.createElement('div');
        menuWrap.classList.add('menu-wrap');
        body.appendChild(menuWrap);
    }

    makeHeader();
    content.appendChild(body);
    makeFooter();

    return content;
};


export default loadMenu;