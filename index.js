const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('tarot', 'Tarot');
bot.registry.registerGroup('lore', 'Lore');
bot.registry.registerGroup('shuffle', 'Shuffle');
bot.registry.registerGroup('chargen', 'Character Generation');
bot.registry.registerGroup('gems', 'Gems');
bot.registry.registerGroup('information', 'Information');
bot.registry.registerGroup('weapons', 'Weapons');
bot.registry.registerGroup('inspire', 'Inspire');
bot.registry.registerGroup('fireball', 'Fireball');
bot.registry.registerGroup('goodluck', 'GoodLuck');
bot.registry.registerGroup('wtfscott', 'WtfScott');
bot.registry.registerGroup('rollx', 'Rollx');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login("Mzc0Nzg5MzkyMjIyNjUwMzgw.DNmxyw.lW05M0umZoOBB0X2eXgjvD7xWzM");