const readline= require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("what is your name ",name =>{
    console.log(`Welcome  ${name}`);

readline.question("what is your age ", age =>{
    `${age}`>16 ?
        console.log(`you are allowed to get a drivers license in Iowa`)
    :
        console.log(`you are not allowed to get a drivers license in Iowa`);
    
});
});