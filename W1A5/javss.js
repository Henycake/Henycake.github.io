

function max(a,b) {
    if (a>b) {
    return a;
} else {
    return b;
};
   
}
function myFunctionTest(expected,found){
    if(expected===found){
        return "test succeeded";
    } else {
        return "Test Failed. Expected" +expected +" Found" +found;
    };
   
} 
console.log("Expected output of  max(20,10) is 20 " + myFunctionTest(20,max(20,10)));
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

  function isVowel(a){
      if(a==='a' || a==='e'|| a==='i' ||a==='o' ||a==='u') {
          return true;
          }else{ 
              return false;
        };
      }

      function isVowelTest(expected,found){
          if(expected===found){
              return "test succeeded";

          }else {
              return "Test Failed"+ "Expected "+ expected + " Found"+found;
          }
      }
  console.log("Expected output of isVowel(i) is true "+ isVowelTest(true,isVowel('o')));

  // 4.Define a function sum() and a function multiply() that sums and multiplies 
//   (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
let numbers=[1,2,3,4];
function sums(arr){
    // let sum=0;
    // for(let i=0;i<arr.length;i++){
    //        sum+=arr[i];
    // }
    // return sum;
    const sum=numbers.reduce(function(accum,elem){
        return accum+elem;
    },0);
    return sum;
}

function sumArrayTest(expected,found){
    if(expected===found){
        return "Test succeeded";
    }else {
        return "Test failed"+"Expected "+ expected+" Found"+ found;
    };
    }
console.log("Expected of  sumArrayTest([1,2,3,4]is 10)"+ sumArrayTest(10,sums(numbers)));
// 5.Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// let stre="Henock";
function reverse(str){
    // let str2='';
    // for(let i=str.length;i>=0;i--){
    // str2+=str.charAt(i);
    // }
    // return str2;
    if(str===""){
        return "";
    }else {
        return reverse(str.substr(1))+str.charAt(0);
    }

}

function reverseTest(expected,found){
    if(expected===found){
        return " Test succeeded";
    }else {
        return "Test failed"+"Expected "+ expected+" Found  "+ found;
    };
    }
console.log("The expected output of reverse(henock)is kconeh" + reverseTest("kconeh",reverse("henock")));

// 6.Write a function findLongestWord() 
// that takes an array of words and returns the length of the longest one.
let arr= ["aaaaaa","bb","ccc"];
function findLongestWord(arr){
    // let longest=arr[0].length;
    // let maximumIndex=arr[0];
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i].length>longest){
    //         maximumIndex=arr[i];
    //         longest=arr[i].length;
    //     }
    // }
    // return longest;
    let sortedarray=arr.sort(function(a,b){
        return b.length-a.length;
    });
    return sortedarray[0].length;

}


function findLongestWordTest(expected,found){
    if(expected===found){
        return " Test succeeded";
    }else {
        return "Test failed"+"Expected "+ expected+" Found  "+ found;
    };
    }
console.log("The expected out put is arr[aaaaaa,bb,ccc]"+ findLongestWordTest(6,findLongestWord(arr)));

// 7.Write a function filterLongWords() that takes an array of words and an integer i and 
// returns the array of words that are longer than i.
function filterLongWords(arr,i){
let arr2=arr.filter(a=>a>i);
return arr2;
}
let arrs=[3,8,4,6,9,2];
// console.log(filterLongWords(arrs,5));

function filterLongWordsTest(expected,found){
    if (!Array.isArray(expected) || !Array.isArray(found)) {
        return "Test Failed";
      } else if (expected === found) {
        return "Test succeeded";
      } else if (expected.length !== found.length) {
        return "Test Failed";
      } else {
        for (let x = 0; x < expected.length; ++x) {
          if (expected[x] !== found[x]) return false;
        }
        return "Test succeeded";
      }
}
let exp=[8,6,9];
console.log("The filtered array greater than 5 are 8,6,9 "+ filterLongWordsTest(exp,filterLongWords(arrs,5)));
// 8.Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
// b) return array with all elements equal to 3; 
const c = a.filter(function(elem, i, array){
    return elem === 3;});
// c) return the product of all elements;
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
  });


       