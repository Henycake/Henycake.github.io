window.onload = function(){
  // alert("What is going on?");
  let i = 0;
    let intervalID = null;
    let intervalTime = 250;
    let textvalue = null;
    let selectedAnimation = null;

    let btnSartElem = document.getElementById("start");
    btnSartElem.onclick = start;

    let btnStopElem = document.getElementById("stop");
    btnStopElem.onclick = end;


    let selanimElem = document.getElementById("animation");
    selanimElem.onchange = animation;

    let selsizeElem = document.getElementById("fontsize");
    selsizeElem.onchange = changeSize;

    let chkTurboElem = document.getElementById("turbo");
    chkTurboElem.onchange = turboAnimate;

    let textareaElem = document.getElementById("text-area");

    function controlDisplay(control) {

  
        if (control === 0) {
            btnSartElem.disabled = true;
            selanimElem.disabled = true;
            btnStopElem.disabled = false;
        } else {
            btnSartElem.disabled = false;
            btnStopElem.disabled = true;
            selanimElem.disabled = false;
        }
    }

  
    function display() {
        textareaElem.value = textvalue[i];
        i = i + 1;

        if (i === textvalue.length) {
            i = 0;
        }
    }


    function start() {
        controlDisplay(0);
        textvalue = textareaElem.value.split("=====");
        if (intervalID === null) {
            intervalID = setInterval(display, intervalTime);
        }
  
    }
    
    function end() {

        if (intervalID !== null) {
            controlDisplay(1);

            clearInterval(intervalID);
            intervalID = null;
        }
        i = 0;
        selectedAnimation = selanimElem.value;
        textareaElem.value = ANIMATIONS[selectedAnimation];

    }

    function animation() {
   
        textareaElem.value = ANIMATIONS[this.value];

    }

    function changeSize() {
        textareaElem.style.fontSize = this.value;
    }

    function turboAnimate() {

        if (intervalID !== null) {
            
            if (this.checked) {
                clearInterval(intervalID);
                intervalTime = 50;
                intervalID = setInterval(display, intervalTime);

            } else {
                clearInterval(intervalID);
                intervalTime = 250;
                intervalID = setInterval(display, intervalTime);
            }
        }
    }
}