const display = (products, element) => {
	const displayProducts = products.map((product) => {
		const {id, title, image, price} = product;
		return `
        <div class="item">
          <div class="item-content">
            <a href="">
              <div class="product-img">
                <img src="${image}">
                <div class="product-img-overlay">
                  <img src="/img/products/overlay/01.jpg">
                </div>
              </div>
            </a>
            <div class="product-info">
              <div class="product-title">
                <a href="#">${title}</a>
              </div>
              <div class="product-price">
                <h3>$${price/100}</h3>
              </div>
              <div class="product-cart">
                <a href="" class="cartBtn">Add to cart</a>
              </div>
              <div class="product-quick-view">
                <a href="#"><i class="fas fa-search"></i>Quick view</a>
              </div>
            </div>
          </div>
        </div>
		`;
	}).join('');
	element.innerHTML = displayProducts;
};

export default display;