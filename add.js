//Logic for game #990000,  #2db300,  #007a99,  #993d00,  #b30047,  #602040, #009973,  #00b359
var orderCheck = [];//Used to track buttons pressed
var orderClick = [];//Used to generate "answer key"
var level = 1; //dictates how many answers in answer key
var score = level - 1; //cosmetic
var num;
function gameLogic(){//game rules
    generateOrder();
    //$('#consoletext').html('Current Score: '+score);
}
function arraysEqual(orderCheck, orderClick) {
    if(orderCheck.length !== orderClick.length)
        return false;
    for(var i = orderClick.length; i--;) {
        if(orderClick[i] !== orderCheck[i])
            return false;
    }
    console.log('You have succeded');
    victory();
    gameLogic();
}
function victory(){
    //all of the following should only happen if victory!
    //use function victory(){}
    level++;
    score++;
    $('#consoletext').html('Current Score: '+score);
    //cleanup/reset
    orderClick = [];
    orderCheck = [];
    //Pass up for next level and stuff
    return level, score, orderClick, orderCheck;
    //
}
function checkIf(){
    //Makes sure you aren't just pressing random shit
    if (orderClick.length - 1 >= level){
        alert('Restart Game! You lose.');
    } else{
        console.log('Have not exceeded limit');
    }
//final checker to override all- every command in above array should go in here

arraysEqual(orderClick, orderCheck);



}
function generateOrder(){
    //generates order
    for (var f = 0; f < level; f++){
        num = Math.floor(Math.random() * (8) + 1);
        orderCheck.push(num);
        console.log(num);
    }
    //shows order to user
    for (var g = 0; g < orderCheck.length; g++){
            switch(orderCheck[g]){
                case 1:
                    $('#1').css('background-color', '#990000');
                    setTimeout(function(){
                        $('#1').css('background-color', '#ff0000');
                    }, 1500);
                    break;
                case 2:
                    $('#2').css('background-color', '#2db300');
                    setTimeout(function(){
                        $('#2').css('background-color', '#53ff1a');
                    }, 1500);
                    break;
                case 3:
                    $('#3').css('background-color', '#007a99');
                    setTimeout(function(){
                        $('#3').css('background-color', '#00b8e6');
                    }, 1500);
                    break;
                case 4:
                    $('#4').css('background-color', '#993d00');
                    setTimeout(function(){
                        $('#4').css('background-color', '#ff6600');
                    }, 1500);
                    break;
                case 5:
                    $('#5').css('background-color', '#b30047');
                    setTimeout(function(){
                        $('#5').css('background-color', '#f00660');
                    }, 1500);
                    break;
                case 6:
                    $('#6').css('background-color', '#602040');
                    setTimeout(function(){
                        $('#6').css('background-color', '#993366');
                    }, 1500);
                    break;
                case 7:
                    $('#7').css('background-color', '#009973');
                    setTimeout(function(){
                        $('#7').css('background-color', '#00cc99');
                    }, 1500);
                    break;
                case 8:
                    $('#8').css('background-color', '#00b359');
                    setTimeout(function(){
                        $('#8').css('background-color', '#99ffcc');
                    }, 1500);
                    break;
            }
            setTimeout(1500);
    }
}

$(document).ready(function(){
    $('#start').on('click', function(){//makes sure dom is ready
        $('#start').hide();
        for (var i = 1; i < 9; i++){//generates event listeners for buttons 1-8 to detect presses
            let counter = i;
            document.getElementById(counter).addEventListener("click", function(){
                orderClick.push(counter);///when clicked push the id of button to tracker
                console.log(orderClick);//Print tracker in console
                console.log(orderCheck);//Print answerkey in console
                checkIf();//Check if you won
            });
        }
        gameLogic();//This will generate a pattern to follow and adjust score and level based on whether user passes level, should also change tone of buttons in order of press
    });
});
