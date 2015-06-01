
var isPrime = function(num){

	var trial = 2;
	while( trial * trial  <= num ){
		if( num % trial === 0){
			return false;

		} //end if
		trial = trial + 1;
	} //end while

	return true; //all posible nums have been tried



};




var euler3 = function(){

	var input = document.getElementById("input3").value;
	var factor = 2;
	var answer = 1;
	var possibleAnswer = 1;

	while( factor * factor <= input ){
		if( input % factor === 0 ){
			if( isPrime(factor) ){
				possibleAnswer = input / factor ;
				if( possibleAnswer  >  factor && isPrime(possibleAnswer)  ){
					factor = possibleAnswer

				}

				answer = factor;				

			}//end inner if

		}

	factor = factor + 1;
	}//end while

	document.getElementById("Answer3").innerHTML = answer;

};
