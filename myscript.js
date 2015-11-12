var angle = 0, img = document.getElementById('img');
imgor = 0;
imgo = "http://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg";
var urls = ["http://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/220px-Circle_-_black_simple.svg.png",
            "http://etc.usf.edu/clipart/40600/40694/pb_tri_40694_lg.gif"];
var turn = function(){
        if (angle ===  0) {
            console.log("1right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
        else if (angle ===  90) {
            console.log("2right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
        else if (angle ===  180) {
            console.log("3right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        } 
        else { 
            console.log("4right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
};
var turnleft = function(){
        if (angle ===  0) {
            console.log("1left");
            angle = (angle+270)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
        else if (angle ===  270) {
            console.log("2left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
        else if (angle ===  180) {
            console.log("3left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        } 
        else { 
            console.log("4left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
};
var guess = function(){
        if (angle ===  0) {
            alert("Good guess!");
        }
        else {
            alert("Wrong guess dum dum!")
        }
};
var nextimg = function(){
    var image = document.getElementById('img');
        if (imgor ===  0) {
            console.log("nextimg1");
            imgor = (imgor+1);
            image.src = "http://etc.usf.edu/clipart/40600/40694/pb_tri_40694_lg.gif";
            angle = (angle+270)%360;
            img.style.transform += "rotate(270deg)";
        }
        else if (imgor ===  1) {
            console.log("nextimg2");
            imgor = (imgor+1);
            image.src = "https://i.ytimg.com/vi/ReF6iQ7M5_A/maxresdefault.jpg";
            img.style.transform += "rotate(180deg)";
            angle = (angle+180)%360;
        }
        else{
            image.src = "http://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg";
            imgor = 0;
        }
};