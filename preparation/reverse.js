function reversestring(str){
    return str.split('').reverse().join('');
}
const org = "sandya katta";
const reversed = reversestring(org);
console.log(reversed)