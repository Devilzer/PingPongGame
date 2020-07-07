var wallHeight=document.getElementById("scores");
wallHeight.style.height=window.innerHeight+"px";

var score1 =0;
var score2 =0;
var playground = document.getElementById("pingPong");
var height = playground.innerHeight;

//getting paddle dom obj
var topPaddle = document.getElementById("topPaddle");
var bottomPaddle=document.getElementById("buttomPaddle");

var ball = document.getElementById("ball");
ball.style.left = ball.offsetLeft+"px";
ball.style.top = ball.offsetTop+"px";
var st =parseInt(ball.style.top);
var sl=parseInt(ball.style.left);
var topPositionOfBall = parseInt(ball.style.top);
var leftPositionOfBall =parseInt(ball.style.left);
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;

//random speed
topSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
leftSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
    topSpeedOfBall = -topSpeedOfBall;
}
if (Math.floor(Math.random() * 2) == 0) {
    leftSpeedOfBall = -leftSpeedOfBall;
}




window.setInterval(function update()
{   topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;

    //left and right wall ball deflect
    if(leftPositionOfBall<=321 || leftPositionOfBall>=window.innerWidth-30)
    {
        leftSpeedOfBall = -leftSpeedOfBall;
    }
    //paddle deflect
    else if(topPositionOfBall<=10)
    {
        if(leftPositionOfBall>=topPaddle.offsetLeft && leftPositionOfBall<=topPaddle.offsetLeft+175)
        {topSpeedOfBall= -topSpeedOfBall;
        }
        else{
            score2++;
            $("#p2 p").html(score2);
            topPositionOfBall =st;
            leftPositionOfBall=sl;
            topSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
            leftSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
            // random ball direction
            if (Math.floor(Math.random() * 2) == 0) {
                topSpeedOfBall = -topSpeedOfBall;
            }
            if (Math.floor(Math.random() * 2) == 0) {
                leftSpeedOfBall = -leftSpeedOfBall;
            }

        }
    }
    else if(topPositionOfBall>=632)
    {
        if(leftPositionOfBall>=bottomPaddle.offsetLeft && leftPositionOfBall<=bottomPaddle.offsetLeft+175)
        {
            topSpeedOfBall= -topSpeedOfBall;
        }
        else{
            score1++;
            $("#p1 p").html(score1);
            topPositionOfBall =st;
            leftPositionOfBall=sl;
            topSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
            leftSpeedOfBall = Math.floor(Math.random() * 76 + 25) / 30;
            // random ball direction
            if (Math.floor(Math.random() * 2) == 0) {
                topSpeedOfBall = -topSpeedOfBall;
            }
            if (Math.floor(Math.random() * 2) == 0) {
                leftSpeedOfBall = -leftSpeedOfBall;
            }

        }
    }

     ball.style.top = (topPositionOfBall) + "px";
     ball.style.left = (leftPositionOfBall) + "px";
}, 1000 / 60);













//initializing paddle location
topPaddle.style.marginLeft = topPaddle.offsetLeft + "px";
bottomPaddle.style.marginLeft = bottomPaddle.offsetLeft + "px";

window.addEventListener("keydown",function(event){
var keyPress = event.which;
var Tleft = parseInt(topPaddle.style.marginLeft);
var Bleft=parseInt(bottomPaddle.style.marginLeft);
console.log(window.innerHeight);
if(keyPress===68 && Tleft<=821)
{
    topPaddle.style.marginLeft =  setValue(Tleft+20);
}
else if(keyPress===65 && Tleft>=21)
{
    topPaddle.style.marginLeft =  setValue(Tleft-20);
}
else if(keyPress===37&& Bleft>=21)
{
    bottomPaddle.style.marginLeft =  setValue(Bleft-20);
}
else if(keyPress===39&& Bleft<=821)
{
    bottomPaddle.style.marginLeft =  setValue(Bleft+20);
}
});

function setValue(value) {
    return value + "px";
}