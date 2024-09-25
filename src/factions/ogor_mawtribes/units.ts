import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
  TURN_FOUR_START_OF_ROUND,
  TURN_ONE_START_OF_HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import prayers from './prayers'
import spells from './spells'
import meta_rule_sources from 'meta/rule_sources'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'

/*const ThundertuskEffects = [
  {
    name: `Blasts of Frost-wreathed Ice`,
    desc: `Do not use the attack sequence for an attack made with Frost-wreathed Ice. Instead, pick 1 enemy unit within 18" of this model that is visible to it and roll the number of dice shown on the damage table on the warscroll.
      Add 1 to each roll if the target unit has 10 or more models.
      Add 2 to each roll instead if the target unit has 20 or more models.
      For each 6+, that enemy unit suffers 1 mortal wound.`,
    when: [SHOOTING_PHASE],
    shared: true,
  },
  {
    name: `Numbing Chill`,
    desc: `Subtract 1 from hit rolls for attacks made with melee weapons that target this unit.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
]
const StonehornEffects = [
  {
    name: `Earth-shattering Charge`,
    desc: `Add 1 to the damage inflicted by attacks made with this model's Rock-hard Horns and Crushing Hooves if this model made a charge move in the same turn.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Stone Skeleton`,
    desc: `This unit has a ward of 5+.`,
    when: [WOUND_ALLOCATION_PHASE, WARDS_PHASE],
    shared: true,
  },
]
const ReelEmInEffects = [
  {
    name: `Reel Em In`,
    desc: `If an attack made with a Chaintrap scores a hit on an enemy MONSTER and that MONSTER unit is not
  destroyed and not already snagged, after that attack has been resolved, you can roll a dice. On a 4+ that MONSTER unit is snagged until the start of your next shooting phase. 
  
  While a MONSTER unit is snagged, each time it makes a move, it must finish that move at least as close to the unit that snagged it as it was at the start of the move.`,
    when: [SHOOTING_PHASE],
    shared: true,
  },
  {
    name: `Reel Em In`,
    desc: `While an enemy MONSTER unit is snagged, each time it makes a move, it must finish that move at least as close to the unit that snagged it as it was at the start of the move.`,
    when: [MOVEMENT_PHASE],
    shared: true,
  },
]
const BloodVultureEffect = {
  name: `Blood Vulture`,
  desc: `If this model is armed with a Blood Vulture, at the start of your shooting phase, pick 1 enemy unit that is visible to it and roll a D6. On a 2+, that unit suffers 1 mortal wound.`,
  when: [START_OF_SHOOTING_PHASE],
  shared: true,
}
const MastersOfAmbushEffects = (otherUnit: 'Frost Sabres' | "Hrothgorn's Mantrappers") => [
  {
    name: `Masters of Ambush`,
    desc: `Instead of setting up this model on the battlefield, you can place it to one side and say that it is set up in ambush as a reserve unit. If you do so, when you would set up a friendly ${otherUnit} unit, instead of setting up that unit on the battlefield, you can say that it is joining this model in ambush as a reserve unit. 1 unit can join this model in this way.`,
    when: [DURING_SETUP],
    shared: true,
  },
  {
    name: `Masters of Ambush`,
    desc: `If you set this model up in reserve, at the end of your movement phase, you can set up this model anywhere on the battlefield that is more than 9" from any enemy units. You can then set up any unit that joined this model in ambush wholly within 12" of this model and more than 9" from any enemy units.`,
    when: [END_OF_MOVEMENT_PHASE],
    shared: true,
  },
  {
    name: `Masters of Ambush`,
    desc: `Any reserve units in ambush that are not set up on the battlefield before the start of the fourth battle round are destroyed.`,
    when: [TURN_FOUR_START_OF_ROUND],
    shared: true,
  },
]
const RhinoxChargeEffect = {
  name: `Rhinox Charge`,
  desc: `Add 1 to the damage inflicted by attacks made with this unit's Rhinox's Sharp Horns if this model made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const IronfistEffect = {
  name: `Ironfist`,
  desc: `If the unmodified save roll for an attack made with a melee weapon that targets a unit armed with Ironfists is 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
  when: [SAVES_PHASE],
  shared: true,
}
const BellowerEffect = {
  name: `Bellower`,
  desc: `Add 1 to charge rolls for this unit if it includes any bellowers.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const BloodgruelEffect = {
  name: `Bloodgruel`,
  desc: `Roll a D6 each time this model successfully casts or unbinds a spell, after the effects of the spell have been resolved. On a 2+, you can heal 1 wound allocated to this model. On a 1, this model suffers 1 mortal wound.`,
  when: [HERO_PHASE],
  shared: true,
}
const FrostlordEffects = [
  {
    name: `Frost Spear`,
    desc: `If the unmodified wound roll for an attack made with a frost spear that targets an enemy HERO or MONSTER is a 6, subtract 1 from the Attacks characteristic of that unit's melee weapons (to a minimum of 1) until the end of that phase. The same unit can only be affected by this ability once per phase.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Bellowing Voice`,
    desc: `Add 1 to charge rolls for friendly BEASTCLAW RAIDERS units wholly within 12" of this unit.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
]
const ChampionEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be a champion. Add 1 to the Attacks characteristic for that model.`,
  when: [COMBAT_PHASE],
  shared: true,
} */

const Units = {
  'Kragnos': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of The Dread Mace is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Shield Inviolate - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 3+, ignore the effect of that spell on this unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Avatar of Destruction - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Rampaging Destruction - Once Per Turn`,
        desc: `Effect: If this unit charged this phase, pick 1 of the following effects:  
        Roll a dice for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.  
        Pick an enemy Monster in combat with this unit and roll 2D6. On a 7, this ability has no effect. Otherwise, inflict an amount of mortal damage on that unit equal to the results on the dice used for the 2D6 roll multiplied together. For example, a 2D6 roll of 2 and 6 would inflict 12 mortal damage (2x6).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The End of Empires - Passive`,
        desc: `Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for friendly Destruction units while they are wholly within 12" of this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  Butcher: {
   /* mandatory: {
      spells: [keyPicker(spells, ['Voracious Maw'])],
    }, */
    effects: [
      {
        name: `Savage Hunter - Passive`,
        desc: `Effect: While they are wholly within 12" of this unit, friendly Gutbusters units can use Charge abilities even if they used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
     // BloodgruelEffect, GenericEffects.WizardOneSpellEffect
    ],
  },
  Firebelly: {
    /*mandatory: { spells: [keyPicker(spells, ['Cascading Fire-cloak'])] }, */
    effects: [
      //GenericEffects.WizardOneSpellEffect,
      {
        name: `Torrent of Flame - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Fire Breath for attacks that target Infantry.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Frost Sabres': {
    effects: [
      {
        name: `Hunters of the Frozen Wilds - Passive`,
        desc: `Effect: This unit is not visible to enemy units while it is within 3" of a terrain feature and more than 9" from all enemy units.`,
        when: [DURING_GAME],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Frostlord on Stonehorn': {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Chill of the Everwinter', 'Unstoppable Charge'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stonehorns Rock-hard Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Earth-Shattering Charge - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Inflict D3 mortal damage on the target. Then, roll 2D6. This unit can move a distance up to the value of the roll. During that move, it can pass through models in the target unit but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Frost Spear - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy Hero or Monster by attacks made with this units Frost Spear, subtract 1 from the Attacks characteristic of that enemy units melee weapons until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stone Skeleton - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to this unit in each phase.`,
        when: [DURING_GAME],
      },
    //  ...StonehornEffects, ...FrostlordEffects
    ],
  },
  'Frostlord on Thundertusk': {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Chill of the Everwinter'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Thundertusks Colossal Tusks is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sweeping Tusks - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Bellowing Voice - Once Per Battle`,
        desc: `Declare: Pick any number of friendly Beastclaw Raiders units wholly within 12" of this unit to be the targets. 
        Effect: Each target can add 1 to the D3 roll made if that unit uses the Trampling Charge ability this turn.`,
        when: [CHARGE_PHASE],
      },
    //  ...ThundertuskEffects, ...FrostlordEffects
    ],
  },
  'Huskard on Stonehorn': {
   /* mandatory: {
      prayers: [keyPicker(prayers, ["Winter's Endurance", "Winter's Strength"])],
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Unstoppable Charge'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stonehorns Rock-hard Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Everwinter's Goad - Once Per Turn`,
        desc: `Declare: Pick each friendly and enemy Monster within this units combat range to be the targets. 
        Effect: Roll a dice for each target. On a 3+:  
        If the target is a friendly Ogor Mawtribes unit, its Companion weapons have Crit (2 Hits) for the rest of the turn.  
        If the target is an enemy unit, subtract 1 from hit rolls for attacks made with its Companion weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stone Skeleton - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to this unit in each phase.`,
        when: [DURING_GAME],
      },
    //  ...StonehornEffects, BloodVultureEffect, ...ReelEmInEffects
    ],
  },
  'Huskard on Thundertusk': {
   /* mandatory: {
      prayers: [keyPicker(prayers, ["Winter's Endurance", "Winter's Strength"])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Thundertusks Colossal Tusks is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Freezing Aura - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. Add 1 to the roll if the target had Strike-last as a result of this ability in the previous turn. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    //  ...ThundertuskEffects, BloodVultureEffect, ...ReelEmInEffects
    ],
  },
  'Stonehorn Beastriders': {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Unstoppable Charge'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stonehorns Rock-hard Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stonehorn Avalanche - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, when this unit makes a pile-in move this phase, add D6" to the distance it can move.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stone Skeleton - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to this unit in each phase.`,
        when: [DURING_GAME],
      },
    //  ...StonehornEffects, BloodVultureEffect, ...ReelEmInEffects
    ],
  },
  'Thundertusk Beastriders': {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Chill of the Everwinter'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Thundertusks Colossal Tusks is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Everwinter's Assault - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Eect: Roll a dice. On a 3+, for the rest of the turn:  
        If the target is a Monster, subtract 3 from its control score.  
        If the target is a non-Monster unit, subtract 5 from its control score.`,
        when: [END_OF_TURN],
      },
    //  ...ThundertuskEffects, BloodVultureEffect, ...ReelEmInEffects
    ],
  },
  'Gnoblar Scraplauncher': {
    effects: [
      //RhinoxChargeEffect,
      {
        name: `Rain of Scrap`,
        desc: `Declare: Pick an enemy unit that had any models slain this turn by this units shooting attacks to be the target. 
        Effect: Subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Load it Up!`,
        desc: `Effect: If this unit is within the combat range of a friendly Gnoblars unit, this units shooting attacks score critical hits on unmodified hit rolls of 5+ until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Gnoblars: {
    effects: [
     // ChampionEffect,
      {
        name: `Nasty Traps and Tricks`,
        desc: `Declare: Pick an enemy unit within 6" of this unit and that used a Move ability this turn to be the target. You cannot pick the same unit to be the target of this ability more than once per turn. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Gorger Mawpack': {
    effects: [
      {
        name: `Frenzied Hunters`,
        desc: `Declare: Pick this unit if it is lurking on the fringes. 
        Effect: Set up this unit on the battlefield wholly within 9" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Troglodytic Lurkers`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve lurking on the fringes. It has now been deployed.`,
        when: [DURING_SETUP],
      },
    ],
  },
  Maneaters: {
   /* mandatory: { command_abilities: [keyPicker(command_abilities, ['A Barrel of Meat and the Jobs Done'])] }, */
    effects: [
     // GenericEffects.Elite,
      {
        name: `Been There, Done That - Once Per Turn - Reaction: This unit was picked as the target of a Non-Core ability`,
        desc: `Effect: Roll a dice. On a 4+, that ability has no effect on this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Icebrow Hunter': {
    /*mandatory: { command_abilities: [keyPicker(command_abilities, ['Lead the Skal'])] }, */
    effects: [
      //...MastersOfAmbushEffects('Frost Sabres'),
      {
        name: `Masters of Ambush`,
        desc: `Declare: Pick this unit and up to 2 friendly Frost Sabres units if those units have not been deployed. 
        Effect: Set up those units in reserve outflanking the prey. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Hunt is On`,
        desc: `Declare: Pick this unit if it is outflanking the prey. 
        Effect: Set up this unit wholly within 9" of a battlefield edge and more than 9" from all enemy units. Then, set up each Frost Sabres unit that was set up outflanking the prey with this unit wholly within 12" of it and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Icefall Yhetees': {
    effects: [
      {
        name: `Bounding Leaps - Enemy Combat Phase`,
        desc: `Effect: This unit can move up to 3". It can move into combat.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mournfang Pack': {
    effects: [
      {
        name: `Lumpen Wall of Flesh - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for shooting attacks that target friendly Beastclaw Raiders units while they are within this units combat range.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Alpha Cavalry - Passive`,
        desc: `Effect: The Charge (+1 Damage) weapon ability has no effect on attacks that target this unit.`,
        when: [DURING_GAME],
      },
     // IronfistEffect,
    ],
  },
  Ironblaster: {
    effects: [
      {
        name: `Lethal Payload - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, pick either the Big Shot or Hail Shot weapon characteristics for all the attacks it makes with its Ironblaster Cannon.`,
        when: [SHOOTING_PHASE],
      },
   //   RhinoxChargeEffect,
    ],
  },
  Leadbelchers: {
    effects: [
      {
        name: `Firing from the Belly`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Powder Gnoblars - Passive`,
        desc: `Effect: This unit has up to 2 Powder Gnoblar tokens. Each time this unit uses a Shoot ability, for each of this units Powder Gnoblars that are on the battlefield, you can re-roll 1 random characteristic roll for this units Attacks characteristic. If a random characteristic roll re-rolled in this manner is 1, remove 1 of this units Powder Gnoblars from the battlefield.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Ironguts: {
    effects: [
      {
        name: `Protect the Tyrant - Passive`,
        desc: `Effect: While this unit is within the combat ranges of any friendly Tyrants, both this unit and those Tyrants have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Down to the Ironguts - Once Per Battle`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ogor Gluttons': {
    effects: [
      {
        name: `Insatiable Gluttony - Passive`,
        desc: `Effect: If you have used the Feast on Flesh ability this battle, add 1 to the control score of this unit for each model in this unit.`,
        when: [END_OF_TURN],
      },
     // IronfistEffect,
    ],
  },
  Slaughtermaster: {
    /*mandatory: { spells: [keyPicker(spells, ['Rockchomper'])] }, */
    effects: [
     // BloodgruelEffect,
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Great Cauldron`,
        desc: `Effect: You can spend 1 or more of this units grisly remains points. For each point spent, pick a friendly Gutbusters unit wholly within 12" of this unit to be the target, then pick 1 of the following effects: 
        Bloodgruel: The target has Ward (5+) for the rest of the turn. 
        Spinemarrow: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fill the Pot - Passive`,
        desc: `Effect: Each time an enemy unit is destroyed by a combat attack made by a friendly Ogor Mawtribes unit wholly within 18" of this unit, give this unit a grisly remains point, to a maximum of 3.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Tyrant: {
    effects: [
      {
        name: `Brawlerguts - Passive`,
        desc: `Effect: Add 1 to the D3 roll made when this unit uses the Trampling Charge ability.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Bully of the First Degree`,
        desc: `Declare: Pick another friendly Ogor Mawtribes unit wholly within 12" of this unit to be the target. 
        Effect: Add 3 to the targets control score until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
/*  "Hrothgorn's Mantrappers": {
    effects: [
      {
        name: `Hidden Trap`,
        desc: `At the start of the first hero phase, if this unit is in your army, you can pick 1 terrain feature or objective that is not wholly within enemy territory and say that it is trapped. If you do so, place 1 Bushwakka's Trap marker next to that terrain feature or objective.
          The first time a unit finishes a move within 1" of the trapped terrain feature or objective remove the Bushwakka's Trap minature and roll a D6. On a 2+, that unit suffers a number of mortal wounds equal to the roll.`,
        when: [TURN_ONE_START_OF_HERO_PHASE],
      },
      {
        name: `Here You Go Boss!`,
        desc: `While a friendly HROTHGORN is within 3" of this unit while it includes Quiv, add 1 to the Attacks characteristic of his Trap Launcher.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Hrothgorn: {
    effects: [
    //  ...MastersOfAmbushEffects("Hrothgorn's Mantrappers"),
      {
        name: `Thrafnir`,
        desc: `The first time this model is set up on the battlefield, you can set up a Frost Sabres unit consisting of a single model on the battlefield and add it to your army. Set up the Frost Sabre wholly within 3" of this model and more than 9" from any enemy units.`,
        when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  "Blackpowder's Buccaneers": {
    effects: [
      {
        name: `Companions`,
        desc: `Gorlok Blackpowder is accompanied by four Minions: Peggz, Kagey, Mange and Shreek. The minions must remain within 1" of Gorlok Blackpowder. For rules purposes, Gorlok Blackpowder and their minions are treated as a single model.`,
        when: [DURING_GAME],
      },
      {
        name: `Legendary Looter`,
        desc: `At the start of the combat phase, you can pick 1 enemy HERO with an artefact of power enhancement that is within 3" of this unit, and roll 2d6. Add 2 to the roll if Kagey has not been removed, and add 1 to the roll for each other minion that has not been removed. If the roll is 12+, that enemy HERO cannot use that artefact of power for the rest of the battle. If the artefact of power modified any of the bearer's characteristics or weapon characteristics, they return to their original values.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Gorlok's Minions`,
        desc: `Each time a wound or mortal wound is allocated to this model and not negated, you can choose to remove 1 minion. If you do so the wound or mortal wound is negated. In additiona, each minion confers an ability to this unit as shown below. If the minion is removed, that ability can no longer be used.
        
        Peggz: Add 1 to hit rolls for this unit. In addition, if you choose to remove this unit when this unit suffers a wound or mortal wound, roll a dice. On a 5+ this minion is not removed, but the wound or mortal wound is still negated.
        
        Kagey: See the Legendary Looter Ability
        
        Mange: After this unit fights, you can pick 1 enemy unit within 3" of this model and roll a dice. On a 5+ that enemy unit suffers 1 mortal wound.
        
        Shreek: In your shooting phase, you can pick 1 enemy unit within 18" of this model and roll a dice. On a 5+ that enemy unit suffers 1 mortal wound.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Gorlok's Minions - Peggz`,
        desc: `Add 1 to hit rolls for this unit. In addition, if you choose to remove this unit when this unit suffers a wound or mortal wound, roll a dice. On a 5+ this minion is not removed, but the wound or mortal wound is still negated.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Gorlok's Minions - Kagey`,
        desc: `See the Legendary Looter Ability.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Gorlok's Minions - Mange`,
        desc: `After this unit fights, you can pick 1 enemy unit within 3" of this model and roll a dice. On a 5+ that enemy unit suffers 1 mortal wound.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gorlok's Minions - Shreek`,
        desc: `In your shooting phase, you can pick 1 enemy unit within 18" of this model and roll a dice. On a 5+ that enemy unit suffers 1 mortal wound.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Bloodpelt Hunter': {
    effects: [
      {
        name: `Unrelenting Hunter - Once Per Turn - Enemy Movement Phase`,
        desc: `Effect: If this unit is more than 9" from all enemy units, it can use the Normal Move ability as if it were your movement phase.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Beast-Breaker - Passive`,
        desc: `Effect: If the target is a Monster, the Damage characteristic of this units Skullshatter Crossbow is 3 and the Damage characteristic of its Impaling Spear is 6.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
 /* 'Gorger Mawpack': {
    effects: [
      {
        name: `Clawback`,
        desc: `1 in every 5 models in this unit must be a Clawback. Add 1 to the Attacks characteristic of that model's Bone-shattering Strikes. That model can issue commands to their own unit.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Cave Howler`,
        desc: `1 in every 5 models in this unit must be a Cave Howler.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Ambushing Hunters`,
        desc: `During deployment, instead of setting up this unit on the battlefield, you can place it to one side and say that it is set up in ambush as a reserve unit. If you do so, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units.`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Ambushing Hunters`,
        desc: `If this unit is set up in ambush as a reserve unit, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Agonising Roar`,
        desc: `Roll a dice each time an enemy unit receives a command within 12" of a friendly Cave Howler. On a 5+, that command is not received (the command ability still counts as having been used) and the command point that was spent to issue that command is lost.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      }, 
    ], 
  }, */
  'ROR: Braggit`s Bottle-Snatchaz': {
    effects: [
      {
        name: `Super-Secret Tunnels`,
        desc: `Declare: Pick a unit in this Regiment of Renown that has not been deployed. 
        Effect: Set up that unit in reserve in a super-secret tunnel. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Sudden Emergence - Once Per Turn`,
        desc: `Declare: If the Rabble-Rowza in this Regiment of Renown is in a super-secret tunnel, pick it to be the target. 
        Effect: Set up the target anywhere on the battlefield more than 9" from all enemy units. Then, set up all other friendly units that are in a super-secret tunnel within 3" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Rabble-Rowza: Neh Neh Na-Neh Neh! Can't Catch me! - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Monster or Beast unit to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn, but each time it uses a Move ability, it must end the move closer to this unit. 
        In addition, for the rest of the turn, the first time the target ends a move within this units combat range, inflict D6 mortal damage on this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gobbapalooza: Hallucinogenic Fungus Brews - Passive`,
        desc: `Effect: In the first battle round, this unit has Ward (4+). In the second battle round, this unit has Ward (5+). In the third and subsequent battle rounds, this unit has Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Gobbapalooza: Gobbapalooza Know-Wotz`,
        desc: `Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Glareface Dance: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to run rolls and charge rolls for that unit until the start of your next turn. 
        Nasty Poisons: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to the Rend characteristic of that units weapons until the start of your next turn. 
        Mesmerise: Pick a visible enemy unit within 12" of this unit. Until the start of your next turn, that unit cannot use commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Herd: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Squig Herd: Squigs Gone Wild - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Squig Herd: Herding Squigs`,
        desc: `Effect: Roll a dice for each Squig Herder in this unit. For each 2+, you can return D3 slain Cave Squigs to this unit. For each 1, 1 Squig Herder in this unit is slain.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Hoppers: Boing! Boing! Boing!`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Distraction: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Gobbapalooza in this Regiment of Renown to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for attacks made by enemy units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Big Grikk`s Kruleshots': {
    effects: [
      {
        name: `Beast-Skewer Killbow: Skewering Bolts - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this units Beast-Skewer Bolts is 6 if the target is a Monster.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Beast-Skewer Killbow: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Man-Skewer Crossbows - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, pick either the Hasty Shot or Aimed Shot weapon characteristics for all the attacks it makes with its Man-skewer Crossbows.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Skewer It Again! - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that had any damage points allocated to it this phase by a shooting attack made by the Beast-skewer Killbow in this Regiment of Renown. Then, pick any number of Man-skewer Boltboyz units in this Regiment of Renown to focus fire. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the ranged weapons used by the units you picked to focus fire but all of their attacks must target the enemy Monster you picked.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Odo Godswallow': {
    effects: [
      {
        name: `Beast-Breaking Strike`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 5D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Behemoth Brawler - Passive`,
        desc: `Effect: Subtract 1 from the Attacks characteristic of enemy Monsters while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Menhir Club is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mighty Walloper - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Big Drogg Fort-Kicka': {
    effects: [
      {
        name: `Pulverising Strike`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 4D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Smash Down - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 3" of this unit to be the target. 
        Effect: If the target is Faction Terrain, inflict D3+3 mortal damage on it. Then, roll a D3 for each non-Monster unit (friendly and enemy) within 3" of the target. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Fortcrusha Flail is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grievous Halitosis - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: One-Eyed Grunnock': {
    effects: [
      {
        name: `Hurled Body`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in that unit is slain and you can pick a visible enemy unit within 12" of this unit. Inflict an amount of mortal damage on that unit equal to the targets Health characteristic.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Titanic Boulderclub - Passive`,
        desc: `Effect: If all of the attacks made with this units Titanic Boulderclub target the same enemy unit, for every 5 models in the target unit, add 2 to its Attacks characteristic for the rest of the phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Titanic Boulderclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shake the Earth - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+:  
        Inflict an amount of mortal damage on the target equal to the roll. If the target is Infantry, double the amount of mortal damage inflicted.  
        Subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
