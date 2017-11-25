const commando = require('discord.js-commando');

class ChargenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chargen',
            group: 'chargen',
            memberName: 'chargen',
            description: 'Rolls 4d6 and drops the lowest'
        });
    }

    async run(message, args) {

        function RollStats(){
            var rolls = [];
        
            for(var i = 1; i <= 4; i++){
                rolls.push(Math.floor((Math.random() * 6) + 1));
            }
        
            rolls.sort(function(a, b){return b-a});
        
            var thrownroll = rolls[3];
            rolls.pop();
        
            var total=0;
            for(var b in rolls) { total += rolls[b]; }
        
            return {rolls: rolls, total: total, thrownroll: thrownroll};
         }
        
        var str = RollStats();
        var dex = RollStats();
        var con = RollStats();
        var int = RollStats();
        var wis = RollStats();
        var cha = RollStats();
        var totes = str['total'] + dex['total'] + con['total'] + int['total'] + wis['total'] + cha['total'];

        message.channel.send(`Generating Stats for ${message.author}\nStrength: ${str['rolls']},~~${str['thrownroll']}~~\nTotal: ${str['total']}\n\nDexterity: ${dex['rolls']},~~${dex['thrownroll']}~~\n Total: ${dex['total']}\n\nConstitution: ${con['rolls']},~~${con['thrownroll']}~~\n Total: ${con['total']}\n\nIntelligence: ${int['rolls']},~~${int['thrownroll']}~~\n Total: ${int['total']}\n\nWisdom: ${wis['rolls']},~~${wis['thrownroll']}~~\n Total: ${wis['total']}\n\nCharisma: ${cha['rolls']},~~${cha['thrownroll']}~~\n Total: ${cha['total']}\n\nTotal Points: ${totes}`);

    }

}

module.exports = ChargenCommand;