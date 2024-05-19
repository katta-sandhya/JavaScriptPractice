const d = new Date();
const d1 = new Date("2024-04-15 10:50:54");
d.setDate(12);//sets the day of the month of a date.
d1.setDate(21);
console.log(d);
console.log(d1);
console.log("----------------------------------");
d.setHours(12);//sets the hours of a date.
d1.setHours(21);
console.log(d);
console.log(d1);
console.log("----------------------------------");
console.log(d.setMilliseconds(121));//sets the milliseconds of a date.
console.log(d1.setMilliseconds(21));
console.log("----------------------------------");
console.log(d.setMinutes(d.getMinutes() - 90));//set the minutes of a date
console.log("----------------------------------");
console.log(d.setMonth(12));//sets the month of a date.
console.log(d1.setMonth(11));
console.log("----------------------------------");
console.log(d.setSeconds(21));//set the seconds of a date
console.log("----------------------------------");




