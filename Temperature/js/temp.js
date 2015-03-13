// Date & Time

var hot
var cold
var temp = 0;
var weatherLady = document.querySelector("#weatherLady");
var button = document.getElementById("button");

button.addEventListener('click', onClick);

function onClick() {
generateTemp();
}

function onClick2() {
generateTemp();
	
}

generateTemp(); 



function generateTemp () {
	temp = Math.floor(Math.random() * 100) + 1; //1-100
	//weatherLady.innerHTML = temp.toString();
	if (temp <= 55) {
		weatherLady.innerHTML = "The temperature is " + temp + " degrees. It's cold, eat soup.";
		//console.log("It's cold.");
	} else if (temp > 55 && temp <= 70) {
	 	weatherLady.innerHTML = "The temperature is " + temp + " degrees. Eat a burrito.";
		//console.log("The temperature is " + temp + " degrees.");
	} else if (temp > 70 &&  temp <= 85) {
	 	weatherLady.innerHTML = "The temperature is " + temp + " degrees. Fire up the barbeque and call your friends!";
		//console.log("The temperature is " + temp + " degrees.");
	} else { weatherLady.innerHTML = "The temperature is " + temp + " degrees. Eat a popsicle!";
	//console.log("The temperature is " + temp + " degrees.");
	}
}