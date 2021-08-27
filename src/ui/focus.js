// Display Currency
import { getElement } from '../utils.js';

const curr = getElement('#currency');
const currMenu = getElement('#currMenu');

curr.addEventListener('click', function(){
	currMenu.classList.toggle('currMenu')
});

// Sidenav 
// const burger = getElement('.burger');
