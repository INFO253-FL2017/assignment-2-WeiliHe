function loadWea(){
	var weather = new XMLHttpRequest()

	//var weatherData = JSON.parse(weather.response);
	//alert(weatherData.name)
	weather.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var myObj = JSON.parse(weather.response);
        show(myObj);
    }
    };
	weather.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=Berkeley,us&units=metric&appid=79a2ca2b96ad4765684b75b255920cc1',true);
	weather.send();
}

	//var weatherData = JSON.parse(weather.response);
	//alert(weatherData);

function show(myObj){
	var weatherData = myObj;
	var city = weatherData.name;
	var temp = weatherData.main.temp;
	var wind = weatherData.wind.speed;
	var desc = weatherData.weather[0].description;
	document.getElementById("city").innerHTML = "<span>City: "+city+"</span>"+" ";
	document.getElementById("desc").innerHTML = "<span>Description: "+ "<img src='http://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png'>"+" "+desc+"</span>"+" ";
	document.getElementById("temp").innerHTML = "<span>Temperature: "+ temp + "&deg;C</span>"+" ";
	document.getElementById("wind").innerHTML = "<span>Temperature: "+ wind + "m/s</span>"+" ";

}