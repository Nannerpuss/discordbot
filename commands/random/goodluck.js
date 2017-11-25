const commando = require('discord.js-commando');

class GoodLuckCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'goodluck',
            group: 'random',
            memberName: 'goodluck',
            description: 'Starts an hourglass'
        });
    }

    async run(message, args) {

        if(!isNaN(parseInt(args))){
            var duration = parseInt(args);
        }else{
            console.log("Invalid Input");
            message.channel.send('Numbers only newbie');
            return;
        }

        var timestamp = Math.round(+new Date()/1000);
        var endstamp = timestamp  + duration;
         
        var timeremaining = duration;
         
        var alertsleft = [false, false, false, false, false];
         
        function PostPercentImage(remaining){
            switch(remaining){
                case 0:
                    if(!alertsleft[3]){  
                        console.log("0%");
                        message.channel.send("@dndplayers https://imgur.com/AH9jEm0");
                        message.channel.send(":poop::poop: OUT OF TIME :poop::poop:")
                         alertsleft[3] = true;
                    }
                break;        
                case 100:
                    if(!alertsleft[4]){  
                        console.log("100%");
                        message.channel.send("@dndplayers https://imgur.com/4i3gPFC");
                         alertsleft[4] = true; 
                    }
                break;  
            }
            if(!alertsleft[0]){  
                if(remaining.toFixed(2) >= 0.23 && remaining.toFixed(2) <= 0.27){
                    console.log("25%");
                    message.channel.send("@dndplayers https://imgur.com/OXVzhFB");
                      
                    alertsleft[0] = true;
                }
            }    
            if(!alertsleft[1]){  
                if(remaining.toFixed(2) >= 0.48 && remaining.toFixed(2) <= 0.52){
                    console.log("50%"); 
                    message.channel.send("@dndplayers https://imgur.com/2KGYaz2"); 
                    alertsleft[1] = true;
                }
            }    
            if(!alertsleft[2]){  
                if(remaining.toFixed(2) >= 0.73 && remaining.toFixed(2) <= 0.77){
                    console.log("75%");
                    message.channel.send("@dndplayers https://imgur.com/EgByDdr");
                    alertsleft[2] = true;
                }
            }
        }
         
        PostPercentImage(100);
        var timerloop = setInterval(function(){  
             
            if(timeremaining > 0){
                PostPercentImage(timeremaining / duration);    
            }
            if(timestamp  >= endstamp){
                PostPercentImage(0);
                clearInterval(timerloop);
            }
           
            timestamp = Math.round(+new Date()/1000);
            timeremaining = endstamp - timestamp;
           
        }, 1000);
                    
    }
}

module.exports = GoodLuckCommand;