const d = new Date();
const d1 = new Date("2024-04-15 10:50:54");
console.log(d.getDate());//returns the day of the month
console.log(d1.getDate());
console.log("-----------------------------------------");
console.log(d.getDay());//returns the day of the week sunday = 0 ....
console.log(d1.getDay());
console.log("-----------------------------------------");
console.log(d.getFullYear());//returns the full year of a date
console.log(d1.getFullYear());
console.log("-----------------------------------------");
console.log(d.getHours());//returns the hour of a date
console.log(d1.getHours());
console.log("-----------------------------------------");
console.log(d.getMilliseconds());//returns the millsec of a date
console.log(d1.getMilliseconds());
console.log("-----------------------------------------");
console.log(d.getMinutes());//returns the minutes of a date of a particular hour
console.log(d1.getMinutes());
console.log("-----------------------------------------");
console.log(d.getTime());//returns the num of millisec since 1970
console.log("-----------------------------------------");
console.log(d.getTimezoneOffset());//returns the difference between UTC and local time
console.log("-----------------------------------------");
console.log(d.getSeconds());
