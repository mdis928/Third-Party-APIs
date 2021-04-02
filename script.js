
var today = document.querySelector("#currentDay");
today.innerHTML = moment().format('dddd[,] MMMM Do YYYY');
var time = document.querySelector("#currentTime")
setInterval(function(){
    time.innerHTML=moment().format('LTS')
}, 1000);












