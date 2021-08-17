var x = 1;
var y = 1;
var count = 0;
var tl = 60;

/*function tobegin(){
	alert("poo");
	
	var cont = document.getElementsByClassName("grid-container");
	cont[0].visibility = hidden;
} */

function unhide(){
	alert('begin button works');
	var conta = document.getElementsByClassName("grid-container");
	conta[0].style.visibility = 'visible';
	var bb = document.getElementsByClassName("begin");
	bb[0].style.visibility = 'hidden';

	setInterval(myTimer, 1000);
	myTimer();

	

	setInterval(TimeLimitIncrease,1000);
	TimeLimitIncrease();

}

function TimeLimitIncrease(){
	tl --;
	document.getElementById("timeLimitText").innerHTML = "Seconds Remaining: "+tl.toString();

}

function myTimer(){
	document.getElementById("myRange").stepUp(1);
}

function myFunction(){


	

	do {
		
		x = Math.floor(Math.random() * 5) + 1;

			if(x!=y){y=x; break;}


	} while(true); 

	if(x == 1){
		document.getElementById("one").src = "one.png";
	}

	else if(x ==2){
		document.getElementById("one").src = "two.png";
	}

	else if(x ==3){
		document.getElementById("one").src = "three.png";
	}

	else if(x ==4){
		document.getElementById("one").src = "four.png";
	}

	else if(x ==5){
		document.getElementById("one").src = "five.png";
	}


}

function backToBlackOne(){
	document.getElementById("aone").style.border = "2px solid #0E5471";
	document.getElementById("aone").disabled = false;
}

function backToBlackTwo(){
	document.getElementById("atwo").style.border = "2px solid #0E5471";
	document.getElementById("atwo").disabled = false;
}

function backToBlackThree(){
	document.getElementById("athree").style.border = "2px solid #0E5471";
	document.getElementById("athree").disabled = false;
}

function backToBlackFour(){
	document.getElementById("afour").style.border = "2px solid #0E5471";
	document.getElementById("afour").disabled = false;
}

function backToBlackFive(){
	document.getElementById("afive").style.border = "2px solid #0E5471";
	document.getElementById("afive").disabled = false;
}

function checkone(){
	if (x == 1) {
		//alert("Correct!");
		count = count + 1;
		myFunction();
	}
	//else {alert("Wrong!! Stupid!!");}
	
	else{
		document.getElementById("aone").style.border = "red solid";
		document.getElementById("aone").disabled = true;
		setTimeout(backToBlackOne,1000);
		setTimeout(myFunction,1000);
	}

	
}

function checktwo(){
	if (x == 2) {
		//alert("Correct!");
		count = count + 1;
		myFunction();
	}
	//else {alert("Wrong!! Stupid!!");}
	else{
		document.getElementById("atwo").style.border = "red solid";
		document.getElementById("atwo").disabled = true;
		setTimeout(backToBlackTwo,1000);
		setTimeout(myFunction,1000);
	}


}

function checkthree(){
	if (x == 3) {
		//alert("Correct!");
		count = count + 1;
		setTimeout(myFunction,1000);
	}
	//else {alert("Wrong!! Stupid!!");}
	else{
		document.getElementById("athree").style.border = "red solid";
		document.getElementById("athree").disabled = true;
		setTimeout(backToBlackThree,1000);
		setTimeout(myFunction,1000);
	}

	
}

function checkfour(){
	if (x == 4) {
		//alert("Correct!");
		count = count + 1;
		myFunction();
	}
	//else {alert("Wrong!! Stupid!!");}
	else{
		document.getElementById("afour").style.border = "red solid";
		document.getElementById("afour").disabled = true;
		setTimeout(backToBlackFour,1000);
		setTimeout(myFunction,1000);
	}

	
}

function checkfive(){
	if (x == 5) {
		//alert("Correct!");
		count = count + 1;
		myFunction();
	}
	//else {alert("Wrong!! Stupid
	else{
		document.getElementById("afive").style.border = "red solid";
		document.getElementById("afive").disabled = true;
		setTimeout(backToBlackFive,1000);
		setTimeout(myFunction,1000);
	}
}







