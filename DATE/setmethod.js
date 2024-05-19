const d = new Date();
const d1 = new Date("2024-04-15 10:50:54");
d.setMinutes(d.getMinutes() - 90);//set the minutes of a date
console.log(d);
d.setMonth(12);//sets the month of a date.
d1.setMonth(11);
console.log(d);
console.log(d1);
console.log("----------------------------------");
d.setSeconds(21);//set the seconds of a date
console.log(d);
console.log("----------------------------------");