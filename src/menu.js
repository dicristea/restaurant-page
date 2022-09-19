import salad from './assets/spicy-bamboo-salad.jpg';
import soup from './assets/hot-sour-soup.jpeg';
import shoots from '.assets/simmered-bamboo-shoots.jpg';

function loadMenu() {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.classList.add('body');



    const menuWrap = document.createElement 
    

    
    const footer = document.createElement('footer');
    footer.textContent = 'ddtea ⚜ 2022';

    
    body.appendChild(menuWrap);
    content.appendChild(body);
    content.appendChild(footer);

    return content;
};


export default loadMenu;