console.log("ParseFloat()");// parses a value as a string and returns the first number.
console.log(Number.parseFloat("40.00"));
console.log(Number.parseFloat(" 40 "));
console.log(Number.parseFloat("40 years") + "<br>" + Number.parseFloat("34 45 66") + "<br>" + Number.parseFloat("He was 40"));
console.log("ParseInt()");// parses a value as a string and returns the first integer.
console.log(Number.parseInt("40", 10));
console.log(Number.parseInt("010"));
console.log(Number.parseInt("20", 8));
console.log(Number.parseInt("0x10"));
console.log(Number.parseInt("30", 16));
console.log(Number.parseInt("10") + "<br>" +
Number.parseInt("10.00") + "<br>" +
Number.parseInt("10.33") + "<br>" +
Number.parseInt("34 45 66") + "<br>" +
Number.parseInt("He was 40"));