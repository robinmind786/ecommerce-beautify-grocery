// Global import
import './src/ui/focus.js';

// Specific import
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import { store, setupStore } from './src/store.js';
import display from './src/displayProducts.js';


const init = async () => {
	const products = await fetchProducts();
	if(products) {
		setupStore(products);
		const featured = store.filter((product) => product.featured === true);
		display(featured, getElement('#featured'));
		const newpro = store.filter((product) => product.newpro === true);
		display(newpro, getElement('#newProduct'));
	}
}

window.addEventListener('DOMContentLoaded', init);



