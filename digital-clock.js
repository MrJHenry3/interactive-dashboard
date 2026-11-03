const displayTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let session = "AM";

    if(hours>12) {
        session = "PM"
    }


    // Convert 24-hour time to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add zeros to single digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    const timeStr =  hours + ":" + minutes + ":" + seconds + " " + session;
    const dateStr = date.toLocaleDateString();

    document.getElementById("clock-face").innerHTML = timeStr
    document.getElementById("calendar-date").innerHTML = dateStr


};

setInterval(displayTime, 1000);

displayTime(); 