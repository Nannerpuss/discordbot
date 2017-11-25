const commando = require('discord.js-commando');

class GemsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'gems',
            group: 'random',
            memberName: 'gems',
            description: 'Finds some gems'
        });
    }

    async run(message, args) {

        function RollGems(){
            var gemx = ['topaz', 'opal', 'diamond', 'sapphire', 'ruby', 'emerald'];
            
            
                for(var i = 1; i <= 3; i++){
                    gemx[Math.floor(gemx.length * Math.random())];
                }
                        
                var gemone = gemx[Math.floor(gemx.length * Math.random())];;
                var gemtwo = gemx[Math.floor(gemx.length * Math.random())];;
                var gemthree = gemx[Math.floor(gemx.length * Math.random())];;
    
                return {gemx: gemx, gemone: gemone, gemtwo: gemtwo, gemthree: gemthree};
        }

      //  if(!isNaN(parseInt(args))){
       //     var dice = parseInt(args);
      //  }else{
       //     console.log("Invalid Input");
       //     message.channel.send('This command requires you to define a valid number of sides for your dice');
       //     return;
       // }
        
       var gemloot = RollGems();
        message.channel.send(`:gem: You found a truly, truly outrageous ${gemloot['gemone']}, ${gemloot['gemtwo']}, and ${gemloot['gemthree']}:gem:`);
    }
}

module.exports = GemsCommand;