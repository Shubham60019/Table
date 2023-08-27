let center=document.createElement('center')
console.log(center);
// document.body.append(center)


let table=document.createElement('table');
console.log(table);

center.append(table)

table.style.border="2px solid red";
table.style.width="500px"
table.style.height="500px"


let tr1=document.createElement('tr');
let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');
td1.style.border="1px solid black";
td2.style.border="1px solid black";
td3.style.border="1px solid black";

// document.body.append(table)
table.append(tr1)
tr1.append(td1)
tr1.append(td2)
tr1.append(td3)

td1.innerText="1";
td2.innerText="2";
td3.innerText="3";

let tr2=document.createElement('tr');
let td4=document.createElement('td');
let td5=document.createElement('td');
let td6=document.createElement('td');
td4.style.border="1px solid black";
td5.style.border="1px solid black";
td6.style.border="1px solid black";

document.body.append(table)
table.append(tr2)
tr2.append(td4)
tr2.append(td5)
tr2.append(td6)

td4.innerText="4";
td5.innerText="5";
td6.innerText="6";

let tr3=document.createElement('tr');
let td7=document.createElement('td');
let td8=document.createElement('td');
let td9=document.createElement('td');
td7.style.border="1px solid black";
td8.style.border="1px solid black";
td9.style.border="1px solid black";

document.body.append(table)
table.append(tr3)
tr3.append(td7)
tr3.append(td8)
tr3.append(td9)

td7.innerText="7";
td8.innerText="8";
td9.innerText="9";