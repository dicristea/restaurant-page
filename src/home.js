import LocIcon from './assets/location.png';
import HoursIcon from './assets/appointment.png';

function loadHome() {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.classList.add('body');

    const titleWrap = document.createElement('div');
    titleWrap.classList.add('title-wrap');

    const title = document.createElement('div');
    title.classList.add('title');

    const name = document.createElement('h1');
    name.textContent = "The Panda's Bamboo";

    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'The tender husks and fragrant buds have just emerged from the forest, and the price... is as heavy as gold. - Li Shangyin'; 
    title.appendChild(name);
    title.appendChild(subtitle);
    titleWrap.appendChild(title);
    
    
    
    const infoWrap = document.createElement('div');
    infoWrap.classList.add('info-wrap');
    
    const card = document.createElement('div');
    card.classList.add('card');

    const map = document.createElement('div');
    map.classList.add('map');

    const locationIconDiv = document.createElement('div');
    locationIconDiv.classList.add('location-icon');

    const locIcon = document.createElement('img');
    locIcon.src = LocIcon;

    locationIconDiv.appendChild(locIcon);    
    
    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = 'Bamboo Forest, Saratoga'
    


    card.appendChild(map);

    const hoursIconDiv = document.createElement('div');
    hoursIconDiv.classList.add('hours-icon');

    const hoursIcon = document.createElement('img');
    hoursIcon.src = HoursIcon;

    hoursIconDiv.appendChild(hoursIcon);
    card.appendChild(hoursIconDiv);
    
    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Monday and Thursdays, 4 p.m. to 10 p.m.';
    
    card.appendChild(hours);
    infoWrap.appendChild(card);
    
    const footer = document.createElement('footer');
    footer.textContent = 'ddtea ⚜ 2022';

    
    body.appendChild(titleWrap);
    body.appendChild(infoWrap);
    content.appendChild(body);
    content.appendChild(footer);

    return content;
};


export default loadHome;