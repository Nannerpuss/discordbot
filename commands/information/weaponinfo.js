const commando = require('discord.js-commando');

class WeaponsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weapons',
            group: 'information',
            memberName: 'weapons',
            description: 'Displays information about weapon types'
        });
    }

    async run(message, args) {
        
        message.reply('Weapon Information\n\n__**Simple Melee Weapons**__\nClub 1d4 bludeoning, 2lbs, Light\nDagger 1d4 piercing, 1lb, Light, Finesse, Thrown 20/60\nGreatclub 1d8 bludgeoning, 10lbs, Two-handed\nHandaxe 1d6, 2lbs, Light, Thrown 20/60\nJavelin 1d6 piercing, 2lbs, Thrown 30/120\nLight Hammer 1d4, 2lbs, Light, Thrown 20/60\nMace 1d6, 4lbs\nQuarterstaff 1d6, 4lbs, Versatile(1d8)\nSickle 1d4, 2lbs, Light\nSpear 1d6, 3lbs, Thrown 20/60, Versatile(1d8)\n\n__**Simple Ranged Weapons**__\nLight Crossobw, 1d8, 5lbs, Ammunition 80/320, Loading, Two-handed\nDart 1d4, 1/4lbs, Finesse, Thrown 20/60\nShortbow 1d6, 2lbs, Ammunition 80/320, Two-handed\nSling 1d4, 0lbs, Ammunition 30/120\n\n__**Martial Melee Weapons**__\nBattleaxe 1d8 slashing, 4lbs, Versatile(1d10)\nFlail 1d8 bludgeoning, 2lbs\nGlaive 1d10 slashing, 6lbs, Heavy, Reach, Two-handed\nGreataxe 1d10 slashing, 7lbs, Heavy, Two-handed\nHalberd 1d10 slashing, 6lbs, Heavy, Reach, Two-handed\nLance 1d12 piercing, 6lbs, Reach, Special*\nLongsword 1d18 slashing, 3lbs, Versatile(1d10)\nMaul 2d6 bludgeoning, 10lbs, Heavy, Two-handed\nMorningstar 1d8 piercing, 4lbs\nPike 1d10 piercing, 18lbs, Heavy, Reach, Two-handed\nRapier 1d8 piercing, 2lbs, Finesse\nScimitar 1d6 slashing, 3lbs, Finesse, Light\nShortsword 1d6 piercing, 2lbs, Finesse, Light\nTrident 1d6 piercing, 4lbs, Thrown 20/60, Versatile (1d8)\nWar Pick 1d8 piercing, 2lbs\nWarhammer 1d8 bludgeoning, 2lbs, Versatile(1d10)\nWhip 1d6 slashing, 3lbs, Finesse, Reach\n\n__**Martial Ranged Weapons**__\nBlowgun 1 piercing, 1lb, Ammunition 25/100, Loading\nHand Crossbow 1d6 piercing, 3lbs, Ammunition 30/120, Light, Loading\nHeavy Crossbow 1d10 piercing, 18lbs, Ammunition 100/400, Heavy, Loading, Two-handed\nLongbow 1d8 piercing, 2lbs, Ammunition 150/600, Heavy, Two-handed\nNet, 3lbs, Special**, Thrown 5/15');
        message.reply('\n__**Properties**__\n__Light__: Allows for dual wielding if both weapons you want to wield are light\n__Finesse__: Allows the user to add either their dexterity modifier or strength modifier when attacking\n__Two-handed__: Both hands are required to use a weapon with this property preventing the use of shields or offhand weapons\n__Versatile__: A weapon with this property can be used one-handed or two-handed. The numbers in parenthesis is its two handed damage\n__Heavy__: Small creatures have disadvantage on Attack rolls with heavy weapons\n__Reach__: Allows the wielding to attack from 10 feet away rather than 5. Attacks of opportunity can also be taken from 10 feet away.\n__Loading__: This weapon can only be used to attack once per round regardless of how many attacks per round a user can perform.\n__Silvered__: If a weapon is made from silver or plated with silver it counts as a magical weapon and deals an additional +2 damage to undead\n__Masterwork__: If an item is of masterwork quality it gains +1 to hit\n__Velencian Steel__: If a weapon is crafted from Velencian Steel it gains an additional +2 damage and will never dull');

        }
    }

module.exports = WeaponsCommand;