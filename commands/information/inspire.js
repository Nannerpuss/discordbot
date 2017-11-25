const commando = require('discord.js-commando');

class ArmorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'inspire',
            group: 'chargen',
            memberName: 'inspire',
            description: 'Helps with the creation of a background for your character.'
        });
    }

    async run(message, args) {
        
        message.channel.send('Six questions to help determine your characters background\n\n1. Are you a hero? Why or why not? Villain? Coward? Someone that people fear?\n2. Who are you parents?\n3. Why are you an adventurer? Are you in it for the glory? Did you have no where else to go? Perhaps you seek revenge?\n4. What are your immediate goals? -Game of Thrones characters all have the same boring long term goal, to sit on the throne, but the part of the story everyone loves is the small stuff. Who is going to betray who? Which minor house is pledging its allegiance to what kingdom? The short term goals are the cogs in the machine that make the story turn.\n5. Are you religious? This is the difference between Stannis Baratheon and Renley Baratheon.\n6. Is your character merciful? This is a very hard question. If showing this goblin mercy after besting him in combat means an innocent traveler will lose their life later on is mercy truly merciful? Perhaps the goblin can not survive on his own and he will perish anyway. Can your character willingly take the life of a defenseless combatant in cold blood who has surrendered himself and is now unarmed?');

        }
    }

module.exports = ArmorCommand;