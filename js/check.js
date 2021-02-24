function checkvalue() {
	var name = document.getElementById("fname").value;
	var message = document.getElementById("message").value;

	if (message == "") {
		window.alert("Please Enter your Message!");
	}
	else{window.alert("Think you for your message ," + name + "!")  }
}
