// Vyberte obrázek v poslední zprávě a změnte jeho atribut src na obrázek img/zprava3-novy.jpg.
const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.maxWidth = '60rem';

const h1Elm = document.querySelector('h1');
h1Elm.classList.add('news__title');
h1Elm.textContent = 'Aktuální novinky';

const zpravaElm = document.getElementById('zprava1');
zpravaElm.classList.add('post--main');

const pictureIdElm = document.querySelector('#zprava3');
const pictureElm = pictureIdElm.querySelector('img');
pictureElm.src = 'img/zprava3-novy.jpg';
