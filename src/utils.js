const getElement = (selection) => {
	const element = document.querySelector(selection);
	if(element) return element;
	throw new new Error(
		`Please check "${selection}" selector, no such element exist`
	);
};

export {
	getElement,
}