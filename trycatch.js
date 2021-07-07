

class Bracket {
	constructor() {}

arr = [];

checkBrackets (string) {
	let a = '(';
	let b = '{';
	let c = '[';
	let A = ')';
	let B = '}';
	let C = ']';

	let arr = [];

	for(let i = 0; i < string.length; i++) {

		if((arr[arr.length-1] == a && string[i] == A) || (arr[arr.length-1] == b && string[i] == B) || (arr[arr.length-1] == c && string[i] == C) ) {

					arr.pop();

					

		} else if(string[i] == a || string[i] == b || string[i] == c) {

					arr.push(string[i]);

				 }
			else {
				continue;
			}
				
		
			
		
	}
	return arr.length;
}

}

let bracket = new Bracket();



	try { if(bracket.checkBrackets('{{jhdbkhc((dbkj[kjdhn]dskjb{djhkbc}dkcbj()kbdcbk)}}') == 0){

		console.log(`Quantity of brackets are correct!`);

		}   else {

			console.log(`Quantity of brackets aren't correct!`);

			}
		
		
	 }
	catch(err) {

		console.log('some error has occured');

		console.log(err);
	}

	

