class Form
{
    constructor()
    {
     this.input = createInput("name");
     this.button = createButton("play");
     this.greeting = createElement('h3');
    }

    display()
    {
     this.input.position(100, 100);
     this.button.position(300, 100);

     this.button.mousePressed(()=>
     {
         this.input.hide();
         this.button.hide()
         Playercount += 1;
         player.index = Playercount;
         player.updateCount(Playercount);
         player.name = this.input.value();
         player.update();
         this.greeting.html("Welcome Player" + player.index);
         this.greeting.position(displayWidth/2, 20);
         console.log(player.index);
         console.log(Playercount);
     })
    }
}