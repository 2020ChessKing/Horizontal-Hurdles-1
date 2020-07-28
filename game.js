class Game
{
    constructor()
    {

    }

    getState()
    {
     var pc = database.ref('Gamestate');
     pc.on("value", (data)=>{
         Gamestate = data.val();

     });

    }

    updateState(count)
    {
      database.ref('/').update({
         Gamestate : count,
      })
    }
    
    async start()
    {
        if(Gamestate === 0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}