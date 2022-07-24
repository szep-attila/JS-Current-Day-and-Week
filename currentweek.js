currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
     
var weekNumber = Math.ceil(startDate / 86400000000);

// Display the calculated result      
document.write("Week number of 52 is:   " + weekNumber);
