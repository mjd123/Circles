var circle = document.querySelector('#circle');
var newDiv = document.createElement("div")
var div = document.querySelector("div")
var content = document.querySelector('#content')
var clickCount = 0;

	circle.onclick= function () {

		newDiv.setAttribute('class', 'myclass');
		content.appendChild(newDiv);
		content.parentNode.insertBefore(newDiv, content);
		newDiv.innerHTML = "Alloquendo <p> conjunctam</p>";
		console.log("click");
		clickCount ++
	}

			if(clickCount < 2){
				newDiv.onclick = function() {

					newDiv.parentNode.removeChild(newDiv)
						console.log("removed")
								}
											}