var _=require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var col1 = document.querySelector("#color1");
var col2 = document.querySelector("#color2");
var css = document.querySelector("h3");
var body = document.getElementsByTagName("body")[0];

function setGradientStyle (){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", setGradientStyle);

// color2.addEventListener("input", setGradientStyle);

