// const allProductsUrl = 'https://raw.githubusercontent.com/robinmind786/b6b629-big-commerce-beautify-grocery-api/main/grocery-products.json';
// const allProductsUrl = 'https://raw.githubusercontent.com/robinmind786/b6b629-big-commerce-beautify-grocery-api/main/grocery-products2.json';
const allProductsUrl = 'https://raw.githubusercontent.com/robinmind786/b6b629-big-commerce-beautify-grocery-api/main/grocery-products3.json';


const getElement = (selection) => {
	const element = document.querySelector(selection);
	if(element) return element;
	throw new new Error(
		`Please check "${selection}" selector, no such element exist`
	);
};

const getStorageItem = (item) => {
	let storageItem = localStorage.getItem(item);
	if(storageItem) {
		storageItem = JSON.parse(localStorage.getItem(item));
	} else {
		storageItem = [];
	}
	return storageItem;
};


const setStorageItem = (name, item) => {
	localStorage.setItem(name, JSON.stringify(item));
};


export {
	getElement,
	allProductsUrl,
	setStorageItem,
	getStorageItem

};