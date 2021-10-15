var math = {
    add: function (a1,a2) {
        return  a1 + a2 ; 
       
    },
    subtract:function (s1, s2) { 
        return s1-s2;
        // console.log('Minus: ' + minus+'\n');
        // return minus;
    },
    divide:function (d1, d2) {
    // var div = d1 / d2 
        // console.log('Devide: ' + div+'\n');
        return d1/d2;
    },
    multiply:function(m1, m2){
        // var mul = m1 * m2
        // console.log('Multiplication: ' + mul+'\n');
        return m1*m2;
    },
    pi:function(){
      
        return Math.PI;
    }
};
module.exports = math;