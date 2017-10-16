function check(){
	var blankcompleted = true;
	//this is set to verify whether all the blanks have been filled.
	var Topmessage = document.getElementById("topmessage");
	Topmessage.innerHTML ="";
	//clear the topmessage
	//alert(2);
	
	var f = document.querySelectorAll("form .input");
	// can not use form.input?
    //alert(f);
	for(var i=0; i<f.length; i++){
		// select the element with "input" in the form.
		if(!f[i].value){
			
			Topmessage.innerHTML += '<li>' + f[i].id +" "+ "needs to be filled."+'</li>';
			//here I use a "<br>" to start a new line
			blankcompleted = false;
			event.preventDefault();
		}
	}
	/*if(blankcompleted){
		Topmessage.innerHTML = "Hi " + f[0].value + ", " +  "your message has been sent.";
	}*/
	//alert(blankcompleted);
    //document.getElementById("status").value=blankcompleted;
	//alert(document.getElementById("status").value);
	//event.preventDefault();

}