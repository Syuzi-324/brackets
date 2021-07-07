class Stack {
	constructor () {}

	arr = [];

	pop(){
		if(arr.length != 0){

			console.log(arr.pop);
		} else {
			console.log('Stack is already empty!');
		}
	}
	push(elem) {
		this.arr.push(elem);

	}	


}

let stack = new Stack();

module.exports = stack;