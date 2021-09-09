import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
	const form = getElement('.input-form');
	const nameInput = getElement('.search-input');

	form.addEventListener('keyup', function() {
		const value = nameInput.value;
		if(value) {
		      const newStore = store.filter((product) => {
		        let { name } = product;
		        name = name.toLowerCase();
		        if (name.startsWith(value)) {
		          return product;
		        }
			});
			display(newStore, getElement('#allProducts'));
			if(newStore.length < 1) {
				const products = getElement('#allProducts');
				products.innerHTML = `<h3 class="filter-error">
			       sorry, no products matched your search
			       </h3>`;
			}
		} else {
			display(store, getElement('#allProducts'));
		}


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

};





export default setupSearch;