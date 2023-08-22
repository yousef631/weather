var input =document.getElementById("in");
var btn = document.getElementById("bt");
var temp= document.getElementById("h");



async function checkweather(country){
    var check = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+country+"&appid=0fb824da6a2bcff1e819cb6668f370e2&units=metric");
    var data = await check.json();
    temp.innerHTML=data.main.temp +'c°'
}
btn.onclick =function(){
    checkweather(input.value)
}