
const stack = require ('./classstack.js');


let stack1 = stack.arr;


class Bracket {
	constructor() {}

stack1 = [];

checkBrackets (string) {
	let a = '(';
	let b = '{';
	let c = '[';
	let A = ')';
	let B = '}';
	let C = ']';

	

	for(let i = 0; i < string.length; i++) {

		if((stack1[stack1.length-1] == a && string[i] == A) || (stack1[stack1.length-1] == b && string[i] == B) || (stack1[stack1.length-1] == c && string[i] == C) ) {

					stack1.pop();

					

		} else if(string[i] == a || string[i] == b || string[i] == c) {

					stack1.push(string[i]);

				 }
			else {
				continue;
			}
				
		
			
		
	}
	return stack1.length;
}

}


let bracket = new Bracket();



	try { if(bracket.checkBrackets('{{{{jhdbk}hc(dbkj[kjdhn]dskjb{djhkbc}dkcbj()kbdcbk)}}}') == 0){

		console.log(`Quantity of brackets are correct!`);

		}   else {

			console.log(`Quantity of brackets aren't correct!`);

			}
		
		
	 }
	catch(err) {

		console.log('some error has occured');

		console.log(err);
	}

	

