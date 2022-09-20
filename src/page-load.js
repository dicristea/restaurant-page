const content = document.getElementById('content');


export const makeHeader = function() {
    const header = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const about = document.createElement('button');
    
    
    header.classList.add('header');
    home.classList.add('home');
    menu.classList.add('menu');
    about.classList.add('about');
    
    
    home.textContent = 'home';
    menu.textContent = ('menu');
    about.textContent = 'about';

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(about);
    content.appendChild(header);

};

export const makeFooter = function() {
    const footer = document.createElement("footer");
    footer.textContent = 'ddtea ⚜ 2022';
    content.appendChild(footer);
};

export const removeChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};