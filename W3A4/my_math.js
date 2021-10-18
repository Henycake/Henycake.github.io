// const math = {
//     add: function (a1,a2) {
//         return  a1 + a2 ; 
       
//     },
//     subtract:function (s1, s2) { 
//         return s1-s2;
//         // console.log('Minus: ' + minus+'\n');
//         // return minus;
//     },
//     divide:function (d1, d2) {
//     // var div = d1 / d2 
//         // console.log('Devide: ' + div+'\n');
//         return d1/d2;
//     },
//     multiply:function(m1, m2){
//         // var mul = m1 * m2
//         // console.log('Multiplication: ' + mul+'\n');
//         return m1*m2;
//     },
//     pi:function(){
      
//         return Math.PI;
//     }
// };
// module.exports={
//     add:(x,y)=>x+y,
//     subtract:(x,y)=>x-y,
//     multiply:(x,y)=>x*y,
//     divide:(x,y)=>x/y,
//     PI:21/7
// }

// module.exports=math;
module.exports.add=function(a,b) {return a+b;}
module.exports.subtract=function(a,b){return a-b;}
module.exports.multiply=function(a,b){return a*b;}
module.exports.divide=function(a,b){return a/b;}
// module.exports.pi=function(){return Math.pi();}
