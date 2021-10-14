

// (function () {
//     "use strict";
// var win = true;

// $('document').ready(function () {
//     $("#start").click(
//         function () {
//             $("#status").text("Good Luck.");
//             //$("div .boundary").removeClass("youlose");
//             startGame();

//         });
// });

// function startGame() {
//     win = true;
   
//     $(".boundary").mouseover(
//         function () {
//             loose();
//         });

//     $("#end").mouseover(                               //we can make it on click
//         function () {
//             if (win) {
//                 $("#status").text("You WIN! : Click S to Play Again");
//                 endGame();
//             }
//         });

//     $(!"#maze").mousemove(
//         function () {
//             loose();
//         });
//     $("#end").mouseout(
//         function () {
//            // loose();
//            $("#status").text(" Click S to Play Again");
//         });       

// }

// function loose() {
//     win = false;

//     // $("#boundary1").addClass("youlose");                  
//    $("div .boundary").addClass("youlose");
//     $("#status").text("You LOSE! : Click 'S' to Retry ");
// }

// function endGame() {
//     //$("div .boundary").removeClass("youlose");
//     $('.boundary').unbind('hover');
//     $("#maze").unbind('mouseleave');
// }
// })();



$(function(){
	let isWin = true;
	let isStart = false;
	$('.boundary').mouseover(function(){
		if(isStart){
			$('.boundary').addClass("youlose");
			isWin = false;
		}		
	});

	$('#end').mouseover(function(){
		if(isStart){
			if(isWin){
				$('#status').text("You win! :");
			}else{
				$('#status').text("You lost. ");
                evt.stopPropagation();
			}
			isStart = false;
		}
		
	});
	
	
	$('#start').on('click', function(){
		if(!isStart){
			isWin = true;
			$('.boundary').removeClass('youlose');
			isStart = true;
			$('#status').text('Started!');
		}		
	});

	$("body, div#maze, div#maze div").mouseover(function(evt){		
		if(isStart){
			if(this.className != 'boundary' && this.id != 'maze' && this.nodeName != 'DIV'){
				//cheating
				isStart = false;
				$('#status').text("You lost. :");
				$('.boundary').addClass('youlose');
			}
		}		
		evt.stopPropagation();

	})
});