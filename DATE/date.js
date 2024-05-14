function addZero(i) {
    return String(i).padStart(2, '0');
}

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;
console.log(time);