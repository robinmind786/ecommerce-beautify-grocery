// Global import
import './src/ui/focus.js';

// Specific import
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import { store, setupStore } from './src/store.js'; 
import display from './src/displayProducts.js';



const init = async function() {
	const products = await fetchProducts();
	if(products) {
		setupStore(products);
		const featured = store.filter((product) => product.featured === true);
		display(featured, getElement('#featured'));

		const newpro = store.filter((product) => product.newproduct === true);
		display(newpro, getElement('#newpro'));

		const holidays = store.filter((product) => product.holidayproducts === true);
		display(holidays, getElement('#holidays'));

	}

	// FixBug Sale Showing
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


	
};
window.addEventListener('DOMContentLoaded', init);
