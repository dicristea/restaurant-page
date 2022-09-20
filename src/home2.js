import LocIcon from './assets/location.png';
import HoursIcon from './assets/appointment.png';
import { addNavEvents } from './index';

function loadHome2() {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    const titleWrap = document.createElement('div');
    const title = document.createElement('div');
    const name = document.createElement('h1');
    const subtitle = document.createElement('p');
    const lineAccent = document.createElement('hr');  
    const infoWrap = document.createElement('div');
    const card = document.createElement('div');
    const map = document.createElement('div');
    const locIcon = document.createElement('img');
    const location = document.createElement('p');
    const hoursWrap = document.createElement('div');
    const hoursIcon = document.createElement('img');
    const hours = document.createElement('p');


    locIcon.src = LocIcon;
    hoursIcon.src = HoursIcon;


    body.classList.add('body');
    titleWrap.classList.add('title-wrap');
    title.classList.add('title');
    // subtitle.classList.add('subtitle');
    infoWrap.classList.add('info-wrap');
    card.classList.add('card');
    map.classList.add('map');
    location.classList.add('location');
    hoursWrap.classList.add('hours-wrap');
    hours.classList.add('hours');



    name.textContent = "Menu";
    // subtitle.textContent = 'The tender husks and fragrant buds have just emerged from the forest, and the price... is as heavy as gold. - Li Shangyin'; 
    location.textContent = 'Bamboo Forest, Saratoga'
    hours.textContent = 'Monday and Thursdays,  4 p.m. to 10 p.m.';

    title.appendChild(name);
    title.appendChild(subtitle);
    titleWrap.appendChild(title);
    map.appendChild(locIcon);
    map.appendChild(location);
    card.appendChild(map);
    hoursWrap.appendChild(hoursIcon);
    hoursWrap.appendChild(hours);
    card.appendChild(hoursWrap);
    infoWrap.appendChild(card);
    infoWrap.appendChild(lineAccent);
    
    
    body.appendChild(titleWrap);
    body.appendChild(infoWrap);
    content.appendChild(body);
    addNavEvents();

    return content;
};


export default loadHome2;