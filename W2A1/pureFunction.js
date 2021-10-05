
    const numbers=[2,4,2,3,10];
    function sum(numbers){
        // let total=(accumlator,numb)=> accumlator+numb;
        // let totals=numbers.reduce(total); 
        //   return totals;
        let total=numbers.reduce(function(accumlator,number){
            return accumlator+number;
        });
        return total
    }
// console.log("The sum of the array "+" "+sum(numbers));
function multiply(numbers){
    let multi=numbers.reduce(function(accumlator,number){
        return accumlator*number;
    });
    return multi;
}
// console.log("The multiply value of the array"+" "+multiply(numbers));

    function reverse(s) {
        return s.split('').reverse().join('');
      }
      let str="Henock"
// console.log("The reverse of the word"+" "+reverse(str));
// Write a function filterLongWords() that takes an array of words 
// and an integer i and returns the array of words that are longer than i.

function filterLongWords(word,i){
   let words=word.filter(str=>str.length>i);
   return words;

}
let word=["ababaaa","dakardddddd","eelapa","darkesst","are"];
// console.log("Filtered"+" "+filterLongWords(word,9));
window.onload=function(){
    mocha.run();
}