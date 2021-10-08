



// const y=["alice","kuku","bubu","alice","alice","kelly","kuku","alice"];
// const redu=y.reduce(function(allNames,name){
//     if(name in allNames){
//         allNames[name]++;
//     }else {
//         allNames[name]=1;
//     }
//     return allNames;



// },{});
//  console.log("the output"+" "+JSON.stringify(redu));
// for(var i=0;i<5;i++){
//     console.log("The value of i"+" "+i);
// } 
// function f() {
//     var a = 1;
//     var b = 20;
//     var c;
//     console.log("1st done"+" "+a + " " + b + " " + c);
//     function g() {
//      var b = 300;
//     var c = 4000;
//     console.log("3rd done"+" "+a + " " + b + " " + c);
//     a= a + b + c;
        
//     console.log("4th done"+" "+a + " " + b + " " + c);
//     }
//     console.log("2nd done"+" "+a + " " + b + " " + c);
//     g();
//     console.log("5th done"+" "+a + " " +b + " " + c);
//    }
//    f();

//    var x=10;
//    function main(){
//        console.log("x1 is:" +x);
//        x=20;
//        console.log("x2 is:" +x);
//        if(x>0){
//            var x=30;
//            console.log("x3 is:" +x);
//        }
//        console.log("x4 is:" + x);
//        var x= 40;
//        var f= function(x) {
//            console.log("x5 is: " +x);
//        };
//        f(50);
//        console.log("x6 is:" +x);

//    }
//    main();
//    console.log("x7 is:" + x);
// function init() { //function declaration
//     const names = "Mozilla";
//     function displayName() {
//     console.log(names);
//     }
    
//     displayName();
//    }
  
//    init();
//     console.log(names);
// function makeFunc() {
//     const names = "Mozilla"; //local to makeFunc
//     function displayName() {
//     console.log(names);
//     }
//     return displayName;
//    }
// //    console.log(names);
//    const myFunc = makeFunc();
//    myFunc();
// const x = 1;
// function f() {
//  let y = 2;
//  const sum = function() {
//  const z = 3;
//  console.log(x + y + z);
//  }
//   y = 10;
//  return sum;
// } //end of f
// const g = f();
// g();
// var helper=function(n){
//     return function (){return n;}
// }
// var funcs = [];
// for (var i = 0; i < 5; i++) {
//  funcs[i] = helper(i)
//  };

// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());


//  x=1;
// var a=5;
// var b=10;
// console.log(x);
// var c=function(a,b,c){
//     console.log(x);
//     console.log(a);
//     var f= function(a,b,c){
//         b=a;
//         console.log(b);
//         b=c;
//         var x=5;
//     }
//     f(a,b,c);
//     console.log(b);
//     var x=10;
// }
// c(8,9,10);
// console.log(b);
// console.log(x);


//  var x=2;
// //console.log(y);cannot access inside the functions
//  function xfunc(){
//      var y=5;
//      console.log("can access outer x"+" "+x);
//      //console.log("can I access j from "+" "+j);
//      function yfunc(){
//         console.log("can access outer from inner x"+" "+x);  
//         console.log("can access outer from inner y"+" "+y);
//          var j=4;
//      }
//      yfunc();
//  }
//  xfunc();

// var x=9;
// function myfunction(){
//     return x*x;
// }
// console.log(myfunction());
// x=5;
// console.log(myfunction());
// foo=1;
// function bar() {
//     console.log("The value of foo"+" "+ foo);
//     if(!foo){
//         var foo=10;
//     }
//     console.log(foo);
// }
// bar();

// console.log(this);//this is window object
// function foo(){console.log(this);}
// const bob ={
//     log:function(){console.log(this);}
// };

// bob.log();

// function sam(){
//     this.newvar="hello";
// }
// //console.log(newvar);//reference error
// sam();
// console.log(newvar);

// var a={
//     name:" ",
//     log: function(){
//         this.name="Hello";
//         console.log("this is name"+" "+this.name);
//         var French=function(newname){
//             this.name=newname;
//         };
//         French("Bonjour");
//         console.log(this.name);
//     }
// };
// a.log();

// const count=(function (){
//     let privateCounter=0;
//     const currentValue=function(){
//         return privateCounter;
//     };
//     // const addfunc=function(){
//     //     privateCounter+=1;
//     // };
//     function addfunc(){
//         privateCounter+=1;
//     }
//     const resetfunc=function(){
//         privateCounter=0;
//     };
//     return {
//         add:addfunc,
//         reset:resetfunc,
//         values:currentValue,//additional
//     };
// })();
// count.add();
// count.add();
// count.add();
// console.log(count.values());
// count.reset();
// console.log(count.values());


// var me = {
//     first: 'Josh',
//     last: 'Splinter',
//     getFullName: function() {
//       return this.first + ' ' + this.last;
//     }
//   };
//   const log=function(first,last){
//       console.log(first +' '+last);
//   }
  
//   var you = {
//     first: 'William',
//     last: 'Smith'
//   };
  
  
//   const func=log.bind();
// func('willian','smi');  
 
// var x = 5;
// console.log("let start");
// var y = test();
// console.log("begins");
// var b = { x: 4 };
// console.log("steps");
// var z = y.bind(b);
// console.log("where");
// z();
// function test() {
//     console.log("first");
//     console.log(this);
//     console.log(x);
//     //var x=88;
//     var z = function() {
//         var x = 3;
//         console.log("when");
//         console.log(this);
//         console.log("which x"+" "+this.x);
//     }
//     var x = 8;
//     console.log("where I am");
//     z();
//     console.log("very hard vrry hard very");
//     return z;
// }


// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true,
//     _proto_:animal
// };
// for(let prop in rabbit){
//     let isOwn=rabbit.hasOwnProperty(prop);
//     if (isOwn){
//         console.log(`Own:${prop}`);
//         console.log('this')
//     } else {
//         console.log(`inherited:${prop}`);
//     }
// }

// const square =(function (){
//     let width=0;
//     let intervalid=0;
//     function start(){
        
//         intervalid=setInterval(calArea,3000);
//     };
//     function stop(){
//         width=0;
//        clearInterval(intervalid);
//     };
//     function calArea(width){
//         width++;
//         console.log(width*width);
//     }
//     return {
//         start:start,
//         stop:stop,
//     };

// })();
// var starting= document.getElementById("startbtn");
// starting.onclick=square.start;
// var ending=document.getElementById("endbtn");
// ending.onclick=square.stop;

var x=8;
var y=4;
function a(n){
    var b=function(){
        console.log("how many");
        console.log(this);
        console.log("ship");
        return "xxx";
    };
    console.log("love");
    b();
    console.log("when");
    console.log(y);
    if(n>0){
        x--;
        n*=2;
    }
    var y=8;
    console.log("x:"+x+" Y:"+ y);
    return b;
}
console.log("Starting");
var f=a(x);
console.log("I know");
console.log(f.call({'z':50}));
