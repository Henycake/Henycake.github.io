



const y=["alice","kuku","bubu","alice","alice","kelly","kuku","alice"];
const redu=y.reduce(function(allNames,name){
    if(name in allNames){
        allNames[name]++;
    }else {
        allNames[name]=1;
    }
    return allNames;

},{});
 console.log("the output"+" "+JSON.stringify(redu));


