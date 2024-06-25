function addZero(i) {
    return String(i).padStart(2, '0');
}
/*addZero() function takes a number i, converts it to a string, and then uses padStart(2, '0') 
to ensure that the resulting string has at least two characters, padding it with leading zeros if necessary. */
const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;
console.log(time);