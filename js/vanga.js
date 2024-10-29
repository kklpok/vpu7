'use strict'
function prorok() {
	let t = document.getElementById("zaput").value;
let ks = t.length;

console.log("t=" + ks);

let kp = (t.match(/\s/g) || []).length;

console.log("kp" + kp);

let kk=ks-kp;

console.log("kk=" + kk);

let kc=kk.toString().length;

console.log("kc=" + kc);

while(kc>1){
let tk=kk.toString();
let sum=0;
for (let i=0; i<tk.length; i++){
	sum += parseInt(tk[i]);

	console.log("sum=" + sum);
}
kk=sum;
kc=kk.toString().length;
}
let tv;
switch(kk){
case 0:tv="Ви в свойому розумі?";
	break;
case 1:tv="Напевно"
 break;
 case 2:tv="Ні";
 break;
 case 3:tv="Ваше припущення вірно";
break;
case 4:tv="Все може бути";
break;
case 5:tv="Так";
break;
case 6:tv="Не цього разу";
break;
case 7:tv="Так, але пізніше";
break;
case 8:tv="Навряд чи це можливо";
break;
case 9:tv="Обов'язково, але невідомо коли";
break;
}
tout.innerHTML = tv;
alert("tv"+tv);
}