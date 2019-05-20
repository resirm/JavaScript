// var carname=new String;
// var x=      new Number;
// var y=      new Boolean;
// var cars=   new Array;
// var person= new Object;

carname="hello world\n";

var r;
r=3;
r++;
++r;
process.stdout.write(carname);
console.log(r)

var s
s=4
s+='happy'
console.log(s)

t=5
console.log(t==='5')

var day=new Date().getDay();
switch (day)
{
case 0:
  x="Today it's Sunday";
  break;
case 1:
  x="Today it's Monday";
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
}
console.log(x)

var list={1:'a',2:'b',3:'c'}

for (let i = 1;  i < 4; ++i){
    console.log(list[i])
}
// console.log(i)