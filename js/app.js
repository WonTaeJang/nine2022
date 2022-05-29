import {ControlTop20} from './controller/controlTop20.js'

window.addEventListener('load', ()=>{
    console.log('top20 test start!');
    let listHot = document.querySelector('ul.listHot');

    new ControlTop20(listHot);
})