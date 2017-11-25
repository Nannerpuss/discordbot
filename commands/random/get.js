const commando = require('discord.js-commando');

class GetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'get',
            group: 'information',
            memberName: 'get',
            description: 'Looks up requested information'
        });
    }

    async run(message, args) {

        require('fs').readFile('spells.json', 'utf8', function (err, data) {
            if (err) 
               // error handling
        
            var obj = JSON.parse(data);
            message.channel.send(path.join(__dirname, "locale"))
        });

    }
}

module.exports = GetCommand;