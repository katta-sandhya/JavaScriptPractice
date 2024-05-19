const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["january", "feburary", "march", "april", "may", "june", "july", "august", "sepetember", "october", "november", "december"];
const d = new Date();
console.log(d.getDay());
console.log(d.getMonth());//returns the month of a date starting from jan = 0...
console.log(weekday[d.getDay()]);
console.log(month[d.getMonth()]);
console.log("--------------------------------------------------------");


const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Compute years
const d1 = Date.parse("March 21, 2012");
let years = Math.round(d1 / year);
console.log(years);