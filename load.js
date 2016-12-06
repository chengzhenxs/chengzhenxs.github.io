function loadContent(name) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			document.getElementById("content").innerHTML = request.responseText;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}
	request.open("GET", name + ".html?t=" + Math.random(), true);
	request.send();
}

