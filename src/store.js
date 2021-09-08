import { setStorageItem, getStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
	store = products.map((product) => {
		const {
			id,
			fields: {
				sale, stock, brand, name, reviews, wasprice, presentprice, sku, releasedate, size, featured, newproduct, holidayproducts, productimg: img
			}
		} = product;
		const image = img[0].thumbnails.large.url;
		return {id, sale, stock, brand, name, reviews, wasprice, presentprice, sku, releasedate, size, featured, newproduct, holidayproducts, image}
	});
	setStorageItem('store', store);
};


export {
	store,
	setupStore
}