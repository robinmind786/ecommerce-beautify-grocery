import { getElement } from './utils.js';

const display = function(products, element) {
	  element.innerHTML = products
	    .map((product) => {
	      const { id, sale, image, presentprice, name } = product;
	      return `
	        <article class="item">
	          <div class="item-content">
	            <a href="">
	              <div class="product-img">
	                <img src="${image}">
	                <div class="product-img-overlay">
	                  <img src="/img/products/overlay/01.jpg">
	                </div>
	                <div class="sale">
	                  <p id="saleText">${sale}</p>
	                </div>
	              </div>
	            </a>
	            <div class="product-info">
	              <div class="product-title">
	                <a href="shop.html?${id}">${name}</a>
	              </div>
	              <div class="product-price">
	                <h3>$${presentprice / 100}</h3>
	              </div>
	              <div class="product-cart">
	                <a href="" class="cartBtn">Add to cart</a>
	              </div>
	              <div class="product-quick-view">
	                <a href="#"><i class="fa fa-search"></i>Quick view</a>
	              </div>
	            </div>
	          </div>
	        </article>
	      `;
	    }).join('');


};






export default display;

