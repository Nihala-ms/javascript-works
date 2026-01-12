var Person={                          //1
    name:"Jhonsmith",
    age:21,
    city:"New york"

};
console.log(Person.age);              //2
console.log(Person["city"]);          //3
Person.email="jhonsmith@gmail.com";
console.log(Person);                  //4
Person.age="23";                      //5
delete Person.age;                    //6
console.log("phone" in Person);       //7
for(let key in Person)                //8
{
    console.log(key,Person[key]);
    
}
var count=Object.keys(Person).length;
console.log(count);                    //9
var keys=Object.keys(Person);          //10
var values=Object.values(Person);      //11
var entries=Object.entries(Person);    //12

var Employee={};                       //13
Employee.name="Mary";
Employee.age=27;
console.log(Employee);

var a={x:10};                          //14
var b={x:10};
var equal=JSON.stringify(a)==JSON.stringify(b);
console.log(equal);

var student={                          //15
    csestudent:{name:"Varun",age:23}
};

console.log(Object.keys(Person));       //16
console.log(Object.values(Person));     //17
for(let [key,value] of Object.entries(Person))  //18
{
console.log(key,value);

}
var copy=Object.assign({},Person);      //19
console.log(copy);
var obj1={a:1};                          //20
var obj2={b:2};
var merge=Object.assign({},obj1,obj2);        
console.log(merge);
var merged={...obj1,...obj2};           //21
console.log(merged);
Object.freeze(Person);                  //22
console.log(Object.isFrozen(Person));   //23
Object.seal(Person);                    //24
console.log(Object.isSealed(Person));   //25
//freeze(): cannot add, delete, or modify properties.            //26
//seal(): cannot add/delete, but you can modify existing properties.
var object={                            //27
    display()
    {
        console.log("hello...");
        
    }
}
object.display();
var obj2={                             //28
    name:"Jhon",
    display(){
        console.log(this.name);
        
    }
}
obj2.display();
var operation={                        //29
    a:a,
    b:b,
    add(){
        console.log("a+b");
        
    },
    sub(){
        console.log("a-b");
        
    }

}
var json = JSON.stringify(Person);     //30
var num={a:16,b:24,c:"hi",d:a};         //31
let sum=0;
for(let key in num)
{
    if(typeof num[key]==="Number")sum+=num[key];   
}
for (let key in obj1) {                   //32
  if (obj1[key] == null) delete obj1[key];
}
var clone={...Person};                    //33
console.log(Object.keys(Person).length==0);  //34
var scorenumbers={a:34,b:23,c:12,d:56};      //35
var sortedscore=Object.fromEntries(Object.entries(scorenumbers).sort((a,b)=>a[1]-b[1]));
console.log(sortedscore);
let maxkey=0;                                  //36
let maxvalue=0;
for(let key in scorenumbers)
{
    if(scorenumbers[key]>maxvalue)
    {
        maxvalue=scorenumbers[key];
        maxkey=key;
    }
}
console.log(`${maxkey}:${maxvalue}`);
var arr=Object.entries(Person);             //37
var objj=Object.fromEntries(arr);
var str="javascript";                       //38
var count={};
for(let s of str){
    count[s]=(count[s] || 0)+1;
}
console.log(count);
var students={                            //39
    name:"jhons",
    marks:{m1:32,m2:43,m3:45},
    total(){
        console.log(this.marks.m1+this.marks.m2+this.marks.m3);
        
    },
    avg(){
        console.log(this.total()/3);
        
    }
};
students.total();
students.avg();
var {name,city}=Person;                  //40
var {city:place}=Person;                 //41
for (let key in Person) {                //42
  if (typeof Person[key] === "string") console.log(Person[key]);
}
function getNumbers(obj) {               //43
  const res = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") res[key] = obj[key];
  }
  return res;
}
function flatten(obj, parent="", res={}) {           //44
  for (let key in obj) {
    let newKey = parent ? parent + "." + key : key;
    if (typeof obj[key] === "object") flatten(obj[key], newKey, res);
    else res[newKey] = obj[key];
  }
  return res;
}
function commonProps(a,b){             //45
  const result = {};
  for (let key in a){
    if (b.hasOwnProperty(key)) result[key] = [a[key], b[key]];
  }
  return result;
}
































