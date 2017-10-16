
function display(){
	var commentsform =document.getElementById("commentsform");
	var name = commentsform.elements.namedItem("name").value;
	var message = commentsform.elements.namedItem("message").value;
	//alert(name);
	//count each time you submit.
	if(localStorage.clickcount){
localStorage.clickcount=Number(localStorage.clickcount)+1;
	}
	else{
		localStorage.clickcount=1;
	}
	var i = Number(localStorage.clickcount);
	// you can just use i as the key, without ""
	// if you want to judge whether the user type in sth or not, you have to use:
	
	//if((name!="")&&(message!="")){
	localStorage.setItem(i, name + ": " + message);

    
    //by setting '<div>', you can add new div inside so that you can change
    //your line
    var add = '<div id="item'+ i +'">'+ localStorage.getItem(i) + '</div>';
    //alert(localStorage.getItem(i));
    document.getElementById("comments").innerHTML += add;
    //}
    //var addcomments = document.getElementById("comments");
	//addcomments.innerHTML += localStorage.getItem(i);
    //you can always use event.preventDefault, it's a default sentence.
	event.preventDefault();
}	