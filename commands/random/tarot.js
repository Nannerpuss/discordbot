const commando = require('discord.js-commando');

class TarotCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'draw',
            group: 'tarot',
            memberName: 'tarot',
            description: 'Pulls a tarot card'
        });
    }

    async run(message, args) {
        var tarot = Math.floor(Math.random() * 22);

            switch (tarot){
            case 0:
                message.channel.send("https://imgur.com/GL446Sr");
                message.reply("00 - Fool");
                message.channel.send("You want to be sure that your knights abstain from disgraceful behaviour. What do you warn them most about?\n 1. Obey the law\n 2. Don't make empty promises\n 3. Be kind to all you meet"); 
                break;

            case 1:
                message.channel.send("https://imgur.com/WzXuLtq");
                message.reply("01 - Magician");
                message.channel.send("You have been commanded by your king to create a magic potion. What kind of potion do you create\n 1. Immortality Potion\n 2. Wealth Potion\n 3. Poison");
                break;

            case 2:
                message.channel.send("https://imgur.com/YjWvC1Q");
                message.reply("02 - Priestess");
                message.channel.send("What above all other things do you think is the greatest crime against your fellow man?\n 1. To steal from someone\n 2. To deceive someone\n 3. To sacrifice someone");
                break;

            case 3:
                message.channel.send("https://imgur.com/XjDTV9E");
                message.reply("03 - Empress");
                message.channel.send("As a king wishing to rule the world, what personality trait do you feel you most lack?\n 1. Efficiency\n 2. Putting things in to actions\n 3. Expansionism");
                break;

            case 4:
                message.channel.send("https://imgur.com/tMccuhI");
                message.reply("04 - Emperor");
                message.channel.send("What do you think is the most important ability trait which must be found in a successful king?\n 1. Conquest\n 2. Action\n 3. Leadership");
                break;

            case 5:
                message.channel.send("https://imgur.com/1dWA6Ac");
                message.reply("05 - Hierophant");
                message.channel.send("It is difficult to rule those with ideas different from your own. What do you yourself look most for in a leader?\n1. Compassion\n2. Self-Respect\n3. A sense of justice");
                break;
            
            case 6:
                message.channel.send("https://imgur.com/JPn3UTy");
                message.reply("06 - Lovers");
                message.channel.send("It is almost impossible to find a perfect mate. Which of the following do you most look for in a partner?\n 1. Purity\n 2. Physical Beauty\n 3. Tenderness");
                break;
            
            case 7:
                message.channel.send("https://imgur.com/cDb0u8P");
                message.reply("07 - Chariot");
                message.channel.send("What do you think is the best way to pull together and rule people with different hopes and ideals?\n 1. Religion\n 2. Leadership and Charisma\n 3. Military Force");
                break;

            case 8:
                message.channel.send("https://imgur.com/Hu31d60");
                message.reply("08 - Strength");
                message.channel.send("What do you think is the most important thing to remember when walking the path of the warrior?\n 1. Justice\n 2. Glory\n 3. Faith");
                break;

            case 9:
                message.channel.send("https://imgur.com/Ij48OmQ");
                message.reply("09 - The Hermit");
                message.channel.send("After a difficult battle, the army you lead was unfortunately defeated. What was the cause of your defeat?\n 1. Destiny\n 2. A lack of leadership\n 3. A lack of military strength");
                break;

            case 10:
                message.channel.send("https://imgur.com/F4ertAJ");
                message.reply("10 - Wheel of Fortune");
                message.channel.send("It is sometimes said that victory is only luck. What do you think luck is?\n 1. Something fools believe in\n 2. Luck is something you create\n 3. Luck is inescapable");
                break;

            case 11:
                message.channel.send("https://imgur.com/T6Hw6uD");
                message.reply("11 - Justice");
                message.channel.send("You are standing in front of a mirror which shows your best trait. What is shown in the mirror?\n 1. Moral Strength\n 2. Mental Strength\n 3. Physical Strength");
                break;

            case 12:
                message.channel.send("https://imgur.com/E0Sa3b2");
                message.reply("12 - Hanged Man");
                message.channel.send("Because of a mistake you made, your army is forced to retreat. What do you do?\n 1. Shrug your shoulders\n 2. Retire from your post\n 3. Lament your mistake");
                break;

            case 13:
                message.channel.send("https://imgur.com/Qq7yZx2");
                message.reply("13 - Death");
                message.channel.send("Among one of your trusted followers a traitor is discovered. What do you do?\n 1. Give him 200 lashes\n 2. Kill the traitor\n 3. Banish him forever");
                break;

            case 14:
                message.channel.send("https://imgur.com/fmDyv34");
                message.reply("14 - Temperance");
                message.channel.send("A messenger from the gods has appeared before you. What does this messenger look like?\n 1. An old man with a staff\n 2. A beautiful woman\n 3. An ill dressed youth");
                break;

            case 15:
                message.channel.send("https://imgur.com/ug4Ilw0");
                message.reply("15 - Devil");
                message.channel.send("A demon you have called forth has demanded your most dear possession instead of granting you a wish. What does it demand?\n 1. Your family\n 2. Your life\n 3. Your wealth");
                break;

            case 16:
                message.channel.send("https://imgur.com/Ou8Q5nd");
                message.reply("16 - Tower");
                message.channel.send("In the country where you rule, a cult has started a rebellion. What do you do?\n 1. Abdicate your throne\n 2. Send your army\n 3. Send assassins");
                break;

            case 17:
                message.channel.send("https://imgur.com/EkzPnr6");
                message.reply("17 - Star");
                message.channel.send("The night before a battle you see several falling stars heading for the east. What do you wish for?\n 1. Luck for your army\n 2. Bravery for your army\n 3. Victory for your army");
                break;

            case 18:
                message.channel.send("https://imgur.com/glrdZKr");
                message.reply("18 - Moon");
                message.channel.send("You are staring at the full moon the night before a battle. What are you thinking of?\n 1. Your family\n 2. Your beautiful lover\n 3. The outcome of the battle");
                break;

            case 19:
                message.channel.send("https://imgur.com/lC1d3il");
                message.reply("19 - Sun");
                message.channel.send("After a long and difficult battle, your army has finally achieved victory. What do you credit your victory to?\n 1. The blessings of the gods\n 2. Those who fought with you\n 3. Your personal luck");
                break;

            case 20:
                message.channel.send("https://imgur.com/tHB94Qk");
                message.reply("20 - Judgement");
                message.channel.send("Fate can be cruel. If you could only save one person from the flames of a battle, who would it be?\n 1. Your child\n 2. Your beautiful lover\n 3. Your decrepit mother");
                break;

            case 21:
                message.channel.send("https://imgur.com/GQSjEsG");
                message.reply("21 - World");
                message.channel.send("The night before a battle, you drink a parting toast with your comrades. How full is your glass?\n 1. Filled to the brim\n 2. About halfway\n 3. Barely any");
                break;
            }

    }
}

module.exports = TarotCommand;