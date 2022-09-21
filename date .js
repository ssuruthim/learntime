const d = new Date();
console.log(d .getFullYear());
console.log(d .getYear());

console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getTimezoneOffset());
console.log(Date.parse("March 21, 2012"));
console.log(Date.now());
console.log(d.getUTCDate());
console.log(d.getUTCDay());

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const v = new Date();
let day = weekday[v.getUTCDay()];
console.log(day);
Date.prototype.myMonth = function() {
    if (this.getMonth() == 0) {return "January"};
    if (this.getMonth() == 1) {return "February"};
    if (this.getMonth() == 2) {return "March"};
    if (this.getMonth() == 3) {return "April"};
    if (this.getMonth() == 4) {return "May"};
    if (this.getMonth() == 5) {return "June"};
    if (this.getMonth() == 6) {return "July"};
    if (this.getMonth() == 7) {return "August"};
    if (this.getMonth() == 8) {return "September"};
    if (this.getMonth() == 9) {return "October"};
    if (this.getMonth() == 10) {return "November"};
    if (this.getMonth() == 11) {return "December"};
  };
  
  const g = new Date();
  console.log(g.myMonth());
 
  const l = new Date();
l.setDate(5);
console.log(l);
const u = new Date();
u.setFullYear( 2023);
console.log(u);
const h = new Date();
h.setHours(15, 35, 1);
console.log(h);
const hour = new Date();
hour.setHours(15, 35, 1);
console.log(hour);
const string = new Date();
let string1 = d.toDateString();
console.log(string1);
const toDateString = new Date();
let local = toDateString.toLocaleDateString();
console.log(local);
let ms = Date.UTC(2020, 02, 30);
console.log(ms);
const p = new Date(2018, 05, 35, 10, 33, 30, 0);
console.log(p);