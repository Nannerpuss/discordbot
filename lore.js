const commando = require('discord.js-commando');

class LoreCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lore',
            group: 'information',
            memberName: 'lore',
            description: 'Sends you a PM with links to all the lore documents.'
        });
    }
    async run(message, args) {
    message.author.send(`Pantheon and Gods - https://docs.google.com/document/d/1jwgoL17jOiGB-i0p7_RJjUYPHUC5k9_UGQgi4JF5uEM/edit?usp=sharing\n\nNoble Houses of Lanovar(WIP) - https://docs.google.com/document/d/1KLeL6PgvRQTYuZOGPPpT1CYodkxWtsSsEH4f_cJpttc/edit?usp=sharing\n\nCalendar of Echilore - https://fantasy-calendar.com/calendar.php?action=view&id=d3bd576720e8edff8ae6e0578a90c8a7\n\nLaws of Lanovar - https://docs.google.com/document/d/1Qqh8M_KZvJz0iG5AGAowkkytXJLHQxTysUwIa5DS4FE/edit?usp=sharing`);
    }
}

module.exports = LoreCommand;