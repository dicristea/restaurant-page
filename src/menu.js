import salad from './assets/spicy-bamboo-salad.jpg';
import soup from './assets/hot-sour-soup.jpeg';
import shoots from './assets/simmered-bamboo-shoots.jpg';


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
    const footer = document.createElement('footer');


    body.classList.add('body');


    footer.textContent = 'ddtea ⚜ 2022';

    
    for(let i = 0; i < 4; i++) {
        menuWrap = document.createElement('div');
        menuWrap.classList.add('menu-wrap');
        body.appendChild(menuWrap);
    }

    content.appendChild(body);
    content.appendChild(footer);

    return content;
};


export default loadMenu;