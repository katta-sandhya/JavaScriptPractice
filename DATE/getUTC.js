const d = new Date();
const d1 = new Date("2024-04-15 10:50:54");
console.log(d.getUTCDate());//returns the day of the month (1 to 31) of a date object according to UTC.
console.log(d1.getUTCDate());
console.log("-------------------------------");
console.log(d.getUTCDay());//returns the day of the week of a date object according to UTC.
console.log(d1.getUTCDay());
console.log("-------------------------------");
console.log(d.getUTCFullYear());//returns the full year  of a date object according to UTC.
console.log(d1.getUTCFullYear());
console.log("-------------------------------");
console.log(d.getUTCHours());//returns the hours of a date object according to UTC.
console.log(d1.getUTCHours());
console.log("-------------------------------");
console.log(d.getUTCMilliseconds());//returns the milliseconds of a date object according to UTC.
console.log(d1.getUTCMilliseconds());
console.log("-------------------------------");
console.log(d.getUTCMinutes());//returns the min of a date of a particular hour according to UTC.
console.log(d1.getUTCMinutes());
console.log("-------------------------------");
console.log(d.getUTCMonth());//returns the day month  of a date object according to UTC.
console.log(d1.getUTCMonth());
console.log("-------------------------------");
console.log(d.getUTCSeconds());//returns the seconds (0 to 59) of a date according to UTC.
console.log(d1.getUTCSeconds());
console.log("-------------------------------");