import MainImg from './assets/sparkle-chef.jpeg';


const loadHome = function() {
    const content = document.getElementById('content');

    const titleWrap = document.createElement('div');
    titleWrap.classList.add('titleWrap');

    const title = document.createElement('div');
    title.classList.add('title');

    const name = document.createElement('h1');
    name.textContent = "The Panda's Bamboo";

    const subtitle = document.createElement('button');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'The tender husks and fragrant buds have just emerged from the forest, and the price... is as heavy as gold. - Li Shangyin';

    title.appendChild(name);
    title.appendChild(subtitle);
    titleWrap.appendChild(title);
    content.appendChild(titleWrap);

};


export default home;