import { getStorageItem, setStorageItem  } from './utils.js';

let store = getStorageItem('store');
const setupStore = (products) => {
	store = products.map((product) => {
		const {
			id,
			fields: {company, colors, featured, newpro, price, title, image:img},
		} = product;
		const image = img[0].thumbnails.large1.url;
		return {id, company, colors, featured, newpro, price, title, image}
	});
	setStorageItem('store', store);
};

export {
	store,
	setupStore,
}