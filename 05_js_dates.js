//  JS  Dates
// const d = new Date();
// console.log(d);

const input = "21-06-2025"
const [day, month, year] = input.split("-");
const d = new Date(`${year}-${month}-${day}`);
// console.log(d);


// JS Date Get Method 
const cal = new Date();
console.log(cal.getHours());

// JS Date Set Method 
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
const date = new Date("22 July 2025");
// Correct way to set a valid date (e.g., July 31)
date.setDate(31);
console.log(date);

// PR01 Create a function that returns the day of the week for any given date

function getDayOfWeek(date, format = 'long') {
    const dateObj = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date Provided')
   
    }
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return format === 'short' ? daysShort[dateObj.getDay()] : daysLong[dateObj.getDay()];


}
console.log(getDayOfWeek('2025-07-22', 'short'));
console.log(getDayOfWeek('2025-07-22'));









