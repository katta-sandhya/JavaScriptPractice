const d = new Date();
console.log(d.toDateString());//returns the date (not the time) of a date object as a string.
console.log(d.toISOString());//returns a date object as a string, using the ISO standard.
console.log(d.toLocaleDateString());//returns the date (not the time) of a date object as a string, using locale conventions.
console.log(d.toLocaleTimeString());//returns the time portion of a date object as a string, using locale conventions.
console.log(d.toLocaleString());//method returns a Date object as a string, using locale settings.
console.log(d.toTimeString());//returns the time portion of a date object as a string.
console.log(d.toUTCString());//returns a date object as a string, according to UTC.
console.log(d.valueOf());//returns the primitive value of a date object.