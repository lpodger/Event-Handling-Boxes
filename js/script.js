//s//script.js//

function button1() {
	'use strict';
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("absolute", "show");
    blueIn.classList.remove("absolute3", "float-left", "absolute2");
	var green = document.getElementById("green");
	green.classList.remove("green2");
	var red = document.getElementById("red");
    red.classList.remove("float-left", "margins");
}

function button2() {
	'use strict';
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("float-left", "show");
	blueIn.classList.remove("absolute", "margins", "absolute3", "absolute2");
	var red = document.getElementById("red");
    red.classList.remove("float-left", "margins");
	var green = document.getElementById("green");
	green.classList.remove("green2");
}

function button3() {
	'use strict';
	var red = document.getElementById("red");
    red.classList.add("float-left");
	red.classList.remove("margins");
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("float-left", "show");
	blueIn.classList.remove("absolute", "margins", "absolute3", "absolute2");
	var green = document.getElementById("green");
	green.classList.remove("green2");	
}

function button4() {
	'use strict';
	var red = document.getElementById("red");
	red.classList.add("float-left", "margins");
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("show"); 
	blueIn.classList.remove("absolute", "float-left", "absolute3", "absolute2");
	var green = document.getElementById("green");
	green.classList.remove("green2");
}

function button5() {
	'use strict';
	var red = document.getElementById("red");
	red.classList.add("float-right");
	red.classList.remove("margins", "float-right");
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("absolute2", "show");
	blueIn.classList.remove("margins", "float-right", "absolute3");
	var green = document.getElementById("green");
	green.classList.remove("green2");
}

function button6() {
	'use strict';
	var blueIn = document.getElementById("blueIn");
	blueIn.classList.add("absolute3", "show");
	var green = document.getElementById("green");
	green.classList.add("green2");
	var red = document.getElementById("red");
	red.classList.add("float-left");
}

function init() {
	'use strict';
document.getElementById("btn1").addEventListener("click", button1);
document.getElementById("btn2").addEventListener("click", button2);
document.getElementById("btn3").addEventListener("click", button3);
document.getElementById("btn4").addEventListener("click", button4);
document.getElementById("btn5").addEventListener("click", button5);
document.getElementById("btn6").addEventListener("click", button6);
}

window.onload = init;
