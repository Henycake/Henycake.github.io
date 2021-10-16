let flying=false;
let quaking=false;
let xPos=0;
let yPos=0;

function takeOff(){
flying=true;
}
function land(){
flying=false;
}
function startQuaking(){
quaking=true;
}
function stopQuaking(){
quaking=false;
}
function moveTo(x, y) {
    xPos = x;
    yPos = y;
    let msg = "Duck is "
    if (flying) {
        msg += `flying to ${x},${y} `;
    } else {
        msg += `swimming to ${x},${y} `;
    }
    if (quacking) {
        msg += "while quacking";
    }
    console.log(msg);
}

module.exports={
takeOff:takeOff,
land:land,
startQuaking:startQuaking,
stopQuaking:stopQuaking,
moveTo:moveTo,
}