// // Creating the calendar event
// var calendar = new Calendar()
// calendar.setTime(['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'])

// var d = new Date();
// var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();

// document.getElementById("demo").innerHTML = d;

var d = (new Date()).toISOString().split('T')[0];
document.getElementById("demo").innerHTML = d;
