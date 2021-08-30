const allProductsUrl = 'https://raw.githubusercontent.com/robinmind786/api_json_data/main/data.js';


const getElement = (selection) => {
	const element = document.querySelector(selection);
	if(element) return element;
	throw new new Error(
		`Please check "${selection}" selector, no such element exist`
	);
};

const getStorageItem = function(item) {
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
	getStorageItem,
	setStorageItem,

}