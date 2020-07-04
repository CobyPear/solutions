
setInterval(function updateClock() {

    // sets the current time
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    
    // if currentMinutes is less than 10, display a 0 before current min, else just the currentmin
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    
    let timeOfday = (currentHours < 12) ? "am" : "pm";
    currentHours = (currentHours > 12) ? currentHours - 12: currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfday;
    
    document.getElementById("clock").innerHTML = currentTimeString;
    
}, 1000);


document.addEventListener("onload", setInterval);