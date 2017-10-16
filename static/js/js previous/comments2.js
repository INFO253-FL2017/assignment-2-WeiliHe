
var counttotal=[0,0,0,0,0];
var j;
var NA=[], na=[], ME=[], me=[];
var Count=[];
var key = document.querySelector("title").innerHTML;
var n;
localStorage.Count=localStorage.Count||JSON.stringify(counttotal);
Count=JSON.parse(localStorage.Count);
if(!localStorage.Name){
    NA=["","","","",""];
}
else{
    NA=JSON.parse(localStorage.Name);
}
if(!localStorage.Message){
    ME=["","","","",""];
}
else{
    ME=JSON.parse(localStorage.Message);
}

if(key=="Blog 1"){
    n=1;
}   
else if(key=="Blog 2"){
    n=2;
}
else if(key=="Blog 3"){
    n=3;
}
else if(key=="Blog 4"){
    n=4;
}
else if(key=="Blog 5"){
    n=5;
}
if(NA[n-1]&&ME[n-1]){
    na=NA[n-1];
    me=ME[n-1];
}







//why I need to give it an value here.
function store(){
	//alert("2");
	var commentsform =document.getElementById("commentsform");
	var name = commentsform.elements.namedItem("name").value;
	var message = commentsform.elements.namedItem("message").value;
	//alert(name);
	//it seems that I can not just use n=document.getElementById("Blog1").value;
    //alert(name);
    //var n = number;


    alert(NA[n-1]);

    //alert(number);

    /*alert(n);
    if(JSON.parse(localStorage.Name)){
    var k = JSON.parse(localStorage.Name);
    }
    alert(k);

    if(k[n-1].length){
    	j=k[n-1].length;
    	alert(j);
    }
    else{
    	j=0;
    }
    alert(j);*/

	//var m = Number(n);

	//alert(n);
	var returncout=JSON.parse(localStorage.Count);
	//alert(returncout);
	if(returncout){
	counttotal=returncout;
    }

	//alert(counttotal[n-1]);
    j=counttotal[n-1];
    alert(j);
    //alert(name);
    if(name!=""&&message!=""){
    	na.push(name);
        me.push(message);
        //alert(na[j]);
    NA[n-1]=na;
    ME[n-1]=me;
    alert(NA);
    //alert(ME[n-1]);   
    localStorage.Name=JSON.stringify(NA);
    //alert(localStorage.Name);
    localStorage.Message=JSON.stringify(ME);
    //alert(localStorage.Message);
        //alert(na[j]);
    	//j++;
    	counttotal[n-1]++;
    	//alert(counttotal[n-1]);
    }
    else{
    	alert("Please fill in the blanks");
    }
    localStorage.Count=JSON.stringify(counttotal);
    var add = '<tr id="row'+ j+1 +'" >'+ '<td style="width:30%">' + name + ":" + '</td>'+ '<td>'+ message + '</td>' +'</tr>';
    document.getElementById("comments").innerHTML += add;

    event.preventDefault();
}
//alert("2");
//why I can not use onload="display(2)";

/*function display(){
	//alert(number2);
	var m = number2;
    var na_Output=[], me_Output=[];
	var NA_Output = JSON.parse(localStorage.Name||'[]');
	alert(NA_Output);

	var ME_Output = JSON.parse(localStorage.Message||'[]');
	//alert(ME_Output);
	alert(NA_Output[m-1]);
	na_Output = NA_Output[m-1];
	
	me_Output = ME_Output[m-1];
	

	for(var i=0;i<na_Output.length;i++){
    var add = '<div id="item'+ i+1 +'">'+ "Name: " + na_Output[i] + "        "+ "Message: " + me_Output[i] + '</div>';
    document.getElementById("comments").innerHTML += add;
}
}*/
/*function display(){
for(var i=0;i<na.length;i++){
    var add = '<div id="item'+ i+1 +'">'+ "Name: " + na[i] + "        "+ "Message: " + me[i] + '</div>';
    document.getElementById("comments").innerHTML += add;
}

}*/
//###########################################################
function display(){
for(var i=0;i<na.length;i++){
var add = '<tr id="row'+ i+1 +'">'+ '<td style="width:30%">' + na[i] + ":" + '</td>'+ '<td>'+ me[i] +  '</td>' +'</tr>';
    document.getElementById("comments").innerHTML += add;
}
}




//var add = '<div id="item'+ i +'">'+ localStorage.getItem(i) + '</div>';

	//alert(name);
	//count each time you submit.

	/*if(localStorage.clickcount){
localStorage.clickcount=Number(localStorage.clickcount)+1;
	}
	else{
		localStorage.clickcount=1;
	}
	var i = Number(localStorage.clickcount);*/

	// you can just use i as the key, without ""
	// if you want to judge whether the user type in sth or not, you have to use:
	
	//if((name!="")&&(message!="")){
	//localStorage.setItem(i, name + ": " + message);

    
    //by setting '<div>', you can add new div inside so that you can change
    //your line
   
    //var add = '<div id="item'+ i +'">'+ localStorage.getItem(i) + '</div>'

    //alert(localStorage.getItem(i));s
    //document.getElementById("comments").innerHTML += add;
    //}
    //var addcomments = document.getElementById("comments");
	//addcomments.innerHTML += localStorage.getItem(i);
    //you can always use event.preventDefault, it's a default sentence.
	//event.preventDefault();