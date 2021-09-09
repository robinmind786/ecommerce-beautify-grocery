import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // setup filter
  let maxPrice = store.map((product) => product.presentprice);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.presentprice / 100 <= value);
    display(newStore, getElement('#allProducts'));
    if (newStore.length < 1) {
      const products = getElement('#allProducts');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
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

export default setupPrice;
