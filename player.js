class Player
{
    constructor()
    {
     this.name = null;
     this.index = null;
     this.distance = 0;
     this.rank = null;
    }

    getCount()
    {
        var pc = database.ref('Playercount')
        pc.on("value", (data)=>
        {
            Playercount = data.val();
        })
    }

    updateCount(count)
    {
      database.ref('/').update({
         Playercount : count,
      })
    }

    update()
    {
     var pi = "players/player" + this.index;
     database.ref(pi).update(
         {
             Name : this.name,
             Distance : this.distance,
         }

     )
    }

    
}