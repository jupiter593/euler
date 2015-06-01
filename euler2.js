

var euler2 = function (){
	

	var till = document.getElementById("input2").value;
	//var till = 4000000;

	var sum = 0;

	var start = 0;
	var last = 1;
	var save = last;


	
	while( last < till ){

		save = last ;
		last = last + start;
		start = save ;
		if( last % 2 === 0){

			sum = sum + last;
		}  //end if

		


	}//end while

	document.getElementById("Answer2").innerHTML = sum;




};
