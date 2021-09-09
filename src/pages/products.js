// Global import
import '../ui/focus.js';


// Filter Import
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// Specific import
import { getElement } from '../utils.js';
import { store, setupStore } from '../store.js'; 
import display from '../displayProducts.js';

const loading = getElement('.loader');

display(store, getElement('#allProducts'));

setupSearch(store);
setupCompanies(store);
setupPrice(store);

loading.style.display = 'none';




window.addEventListener('DOMContentLoaded', function(){
	const saleText = document.querySelectorAll('#saleText')
	const sLen = saleText.length;
	var i;
	for(i = 0; i < sLen; i++) {
		const saleTextParent = saleText[i].parentElement;
		if(saleText[i].innerHTML === '') {
			saleTextParent.style.display = 'none'
		} else {
			saleTextParent.style.display = 'block'
		}
	}
});