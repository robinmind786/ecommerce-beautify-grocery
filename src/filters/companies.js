import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.brand))];
  const companiesDOM = getElement('.search-container');
  companiesDOM.innerHTML = companies
    .map((brand) => {
      return ` <li><button class="brand-btn">${brand}</button></li>`
    })
    .join('');
  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    console.log(element)
    if (element.classList.contains('brand-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.brand === e.target.textContent
        );
      }
      display(newStore, getElement('#allProducts'));
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

export default setupCompanies;