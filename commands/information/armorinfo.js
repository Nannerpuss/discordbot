const commando = require('discord.js-commando');

class ArmorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'armor',
            group: 'information',
            memberName: 'armor',
            description: 'Displays information about generic armor types'
        });
    }

    async run(message, args) {
        
        message.reply('Armor Information\n\n__**Light Armor**__\nPadded Armor* AC:11 + Dex, Weight: 8 lbs, Value: 5GP\nLeather Armor AC:11 + Dex, Weight: 10lbs, Value: 10GP\nStudded Leather Armor AC:12 + Dex, Weight: 12lbs, Value: 45GP\n\n__**Medium Armor**__\nHide Armor AC:12 + Dex(2), Weight: 12lbs, Value: 10GP\nChain Shirt AC:13 + Dex(2), Weight: 20lbs, Value: 50GP\nScale Mail* AC:14+Dex(2), Weight: 45lbs, Value: 50GP\nBreastplate AC:14+Dex(2) Weight: 20lbs, Value: 400GP\nHalf Plate* AC:15+Dex(2), Weight: 40lbs, Value: 750GP\n\n__**Heavy Armor**__\nRing Mail* AC:14, Weight: 40lbs, Value: 30GP\nChain Mail* AC:16, Req. 13 Str, Weight: 55lbs, Value: 75GP\nSplint Mail* AC:17, Req. 15 Str, Weight: 60lbs, Value: 200GP\nPlate Mail* AC:18, Req 15 Str, Weight: 65lbs, Value: 1500GP\n\n__**Shields**__\nSmall AC:1\nMedium AC:2\nLarge AC:3*\nTower Shield AC:4* Req. 16 Str, Two handed(1d4+Str), -10 movement\n\n* = Disadvantage on stealth checks');

        }
    }

module.exports = ArmorCommand;