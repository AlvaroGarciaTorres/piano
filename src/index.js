import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function trialComponent() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn); //añade al div el botón

    return element;
}

function component(){
    const element = document.createElement('div');
    element.classList.add('piano');

    const list = document.createElement('ul');
    list.classList.add('set');
    element.appendChild(list);

    const key1 = document.createElement('li');
    key1.classList.add('white', 'b');
    list.appendChild(key1);

    const key2 = document.createElement('li');
    key2.classList.add('black', 'as');
    list.appendChild(key2);

    let key3 = document.createElement('li');
    key3.classList.add('white', 'a');
    list.appendChild(key3);

    let key4 = document.createElement('li');
    key4.classList.add('black', 'gs');
    list.appendChild(key4);

    let key5 = document.createElement('li');
    key5.classList.add('white', 'g');
    list.appendChild(key5);

    let key6 = document.createElement('li');
    key6.classList.add('black', 'fs');
    list.appendChild(key6);

    let key7 = document.createElement('li');
    key7.classList.add('white', 'f');
    list.appendChild(key7);

    let key8 = document.createElement('li');
    key8.classList.add('white', 'e');
    list.appendChild(key8);

    let key9 = document.createElement('li');
    key9.classList.add('black', 'ds');
    list.appendChild(key9);

    let key10 = document.createElement('li');
    key10.classList.add('white', 'd');
    list.appendChild(key10);

    let key11 = document.createElement('li');
    key11.classList.add('black', 'cs');
    list.appendChild(key11);

    let key12 = document.createElement('li');
    key12.classList.add('white', 'c');
    list.appendChild(key12);

    return element;
}

document.body.appendChild(component());