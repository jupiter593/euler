
var euler1 = function () {

var input = document.getElementById("input1").value;
sum = 0; 
 for(var i = 0; i < input; i = i + 1){
	if( i % 3 == 0 || i % 5 === 0 ){

		sum = sum + i;

	} //end if

} //end for loop





	document.getElementById("Answer1").innerHTML = sum;
 };

 
//sketch.innerHTML = sum;
//$(".sketch").append(sum.toString());

