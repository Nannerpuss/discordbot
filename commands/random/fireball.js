const commando = require('discord.js-commando');

class FireballCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fireball',
            group: 'random',
            memberName: 'fireball',
            description: 'Everyone loves fire right?'
        });
    }

    async run(message, args) {

        function Fireball(){
            var firedmg = [];
            
            
                for(var i = 1; i <= 7; i++){
                    firedmg.push(Math.floor((Math.random() * 6) + 1));
                }
            
                firedmg.sort(function(a, b){return b-a}).pop();
            
                var total=0;
                for(var b in firedmg) { total += firedmg[b]; }
    
                return {firedmg: firedmg, total: total};

            }
        
        var fireball = Fireball();

        message.reply(`You throw out a fireball and do ${fireball['total']} :fire: damage!`);
            
    }
}

module.exports = FireballCommand;