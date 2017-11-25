const commando = require('discord.js-commando');

class ShuffleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shuffle',
            group: 'tarot',
            memberName: 'shuffle',
            description: 'Shuffles the deck of tarot cards'
        });
    }

    async run(message, args) {
        var shuffle = Math.floor(Math.random() * 10);

        switch (shuffle) {
            case 0:
                message.channel.send("shuffles the tarot deck in an impressive fashion!");  

                break;

            case 1:
                message.channel.send("fumbles around with the deck dropping a few cards on the ground.");

                break;
            
            case 2:
                message.channel.send("begins shuffling the deck but messes up during the bridge and sends cards flying everywhere!");

                break;

            case 3:
                message.channel.send("shuffles the deck of tarot cards.");

                break;

            case 4:
                message.channel.send("somehow manages to shuffle the entire deck using just one hand.");

                break;

            case 5:    
                message.channel.send("shuffles the deck of tarot cards.");

                break;
                
            case 6:
                message.channel.send("pulls a few cards out of his sleeve and puts them back in the deck then properly shuffles.");
        
                break;

            case 7:
                message.channel.send("mumbles 'You're not the boss of me' as he reluctantly shuffles the deck.");

                break;

            case 8:
                message.channel.send("splits the deck in thirds, stacks them back randomly, and then shuffles the deck.");

                break;

            case 9:
                message.channel.send("pulls a rabbit out of his sleeve instead what the...");

                break;

        }
    }
}

module.exports = ShuffleCommand;