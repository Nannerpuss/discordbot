const commando = require('discord.js-commando');

class WtfScottCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'wtfscott',
            group: 'util',
            memberName: 'wtfscott',
            description: 'debug command'
        });
    }

    async run(message, args) {

        
        console.log(message);
        console.log(args);
            
    }
}

module.exports = WtfScottCommand;