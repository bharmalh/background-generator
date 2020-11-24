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

