const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
function getNumber(sum=0){
    readline.question("Enter the number",number =>{
        if(number.toLowerCase()==="stop"){
            console.log(`The sum of number is ${sum}`);
            readline.close();
        } else{
            getNumber(parseInt(number)+sum);
        }

    });
}
getNumber();
