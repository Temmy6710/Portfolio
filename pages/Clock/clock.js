function Time() {
    // Creating object of the Date class
    var date = new Date();
    
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    // Get current month
    var month = months[date.getMonth()];
    // Get current year
    var year = date.getFullYear();
    // Get current date
    var dat = date.getDate();
    // Get current day
    var day = days[date.getDay()];
    
    // Variable to store AM / PM
    var period = "";
    
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
        if (hour > 12) {
        hour = hour - 12;
        }
    }
    
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText =hour + " : " + minute + " : " + second + " " + period;
    document.getElementById("date").innerText =  day +", " +dat+ " "+ month  + " " + year +" \n"

    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}
    
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
    return "0" + t;
    }else {
    return t;
    }
}
Time();

function analogclock(){
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hr_rotation = 30 * hr + min /2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
     
    seconds.style.transform = `rotate(${sec_rotation}deg)`;
    minutes.style.transform = `rotate(${min_rotation}deg)`;
    hours.style.transform = `rotate(${hr_rotation}deg)`;
    setInterval(analogclock,1000);
}

analogclock()