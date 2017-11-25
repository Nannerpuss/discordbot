const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls an X sided die'
        });
    }

    async run(message, args) {
        
        if(!isNaN(parseInt(args))){
            var dice = parseInt(args);
        }else{
            console.log("Invalid Input");
            message.channel.send('This command requires you to define a valid number of sides for your dice');
            return;
        }
        
        var roll = Math.floor(Math.random() * dice) +1;
        message.reply("You rolled a " + roll);
                    
    }
}

module.exports = DiceRollCommand;