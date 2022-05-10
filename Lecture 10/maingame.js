var canvas=document.getElementById('game');
var context=canvas.getContext('2d');

class player{
    constructor(position_x,position_y,radius,color){
        this.position_x=position_x;
        this.position_y=position_y;
        this.radius=radius;
        this.color=color;
    }
    draw() 
    {
        context.beginPath();
        context.arc(this.position_x,this.position_y,this.radius,0,Math.PI*2);
        context.fillstyle=this.color;
        context.fill();
        context.cloasepath()
    }
}

var char_player=new player(100,100,20,"skyblue");
char_player.draw();

var bullets=[];

canvas.addEventListener("click"),new function(ev)
{
    let clickpos_x=ev.clientX-context.canvas.offsetLeft;
    let clickpos_y=ev.clientY-context.canvas.offsetTop;

    new bullets=new bullet(clickpos_x,clickpos_y,5,5,"pink");
    bullets.draw();
}