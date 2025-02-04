import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  START_OF_SHOOTING_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Spells from './spells'
import meta_rule_sources from 'meta/rule_sources'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

/*const ArachnarokSpiderVenomEffect = {
  name: `Spider Venom`,
  desc: `If the unmodified hit roll for an attack made with this model's Monstrous Fangs is 6, that attack inflicts 3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}

const DeadTricksyEffect = {
  name: `Dead Tricksy`,
  desc: `This unit has a ward of 6+.`,
  when: [WARDS_PHASE],
  shared: true,
}
const FerociousPounceEffect = {
  name: `Ferocious Pounce`,
  desc: `This unit is eligible to fight in the combat phase if it is within 6" of an enemy unit instead of 3", and it can move an extra 3" when it piles in.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const NettersEffect = {
  name: `Netters`,
  desc: `Subtract 1 from hit rolls for attacks made by enemy units while they are within 1" of any friendly units that include any models armed with a Barbed Net.`,
  when: [SHOOTING_PHASE, COMBAT_PHASE],
  shared: true,
}
const GrotBaseEffects = [
  {
    name: `Musician`,
    desc: `1 in every 20 models in this unit can be a Gong Basher. Add 1 to run rolls for this unit if it includes any Gong Bashers.`,
    when: [MOVEMENT_PHASE],
    shared: true,
  },
  {
    name: `Standard Bearer`,
    desc: `1 in every 20 models in this unit can be a Bad Moon Icon Bearer. Add 1 to save rolls for attacks made with missile weapons that target this unit if it includes any Bad Moon Icon Bearers.`,
    when: [SAVES_PHASE],
    shared: true,
  },
  NettersEffect,
]
const WhirlingDeathEffect = {
  name: `Whirling Death`,
  desc: `This unit fights at the start of the combat phase, before the players pick any other units to fight in that combat phase. This unit cannot fight again in the combat phase unless an ability or spell allows it to fight more than once.`,
  when: [START_OF_CHARGE_PHASE],
  shared: true,
}
const HallucinogenicFungusBrewsEffect = {
  name: `Hallucinogenic Fungus Brews`,
  desc: `In the first battle round, this unit has a ward of 4+. In the second battle round, this unit has a ward of 5+. In the third and subsequent battle rounds, this unit has a ward of 6+.`,
  when: [WARDS_PHASE],
  shared: true,
}
const WatchOutEffect = {
  name: `Watch Out!`,
  desc: `If this model is slain, before it is removed from play, roll a dice for each other unit within 3" of this model. On a 4+, that unit suffers D3 mortal wounds.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true,
}
const KersplatEffect = {
  name: `Ker-splat!`,
  desc: `After this unit makes a charge move, pick 1 enemy unit within 1" of this unit and roll a dice for each model in that unit, to a maximum of 10 dice. For each 4+, that unit suffers 1 mortal wound.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const SquigsGoneWildEffect = {
  name: `Squigs Gone Wild`,
  desc: `Each time a Cave Squig in this unit flees as a result of a failed battleshock test, before that model is removed from play, roll a dice. On a 3+, you can pick the closest enemy unit within 9" of that model. That unit suffers 1 mortal wound. If multiple units are tied to be the closest within 9" of it, you can pick which suffers the mortal wound.`,
  when: [BATTLESHOCK_PHASE],
  rule_sources: [
    rule_sources.BATTLETOME_GLOOMSPITE_GITZ,
    meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
  ],
  shared: true,
}
const WallCrawlerEffect = {
  name: `Wall Crawler`,
  desc: `When this model makes a move, it can pass across terrain features in the same manner as a model that can fly.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const RegenerationEffect = {
  name: `Regeneration`,
  desc: `At the start of the hero phase, you can heal up to D3 wounds allocated to this unit.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}
const MagicalResistanceEffect = {
  name: `Magical Resistance`,
  desc: `Each time this unit is affected by a spell or the abilities of an endless spell, you can roll a dice. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const SquigglyBeastFollowersEffect = {
  name: `Squiggly-beast Followers`,
  desc: `At the start of the combat phase, roll 1 dice for each enemy unit within 3" of any friendly units with this ability. If the roll is equal to or greater than the number of models in that enemy unit, that enemy unit suffers 1 mortal wound.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const CrushingGripEffect = {
  name: `Crushing Grip`,
  desc: `At the end of the combat phase, pick 1 enemy model within 1" of this unit and roll a dice. If the roll is equal to or greater than that model's Wounds characteristic, it is slain.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in a Gloomspite Gitz army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
} */

// TODO: Make sure we have Kragnos available

const Units = {
  Kragnos: {
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
  'Skragrott, The Loonking': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Fangz of da Bad Moon'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      // WarmasterEffect,
      {
        name: `Fangz of Da Bad Moon: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the unmodified casting roll. For each 3+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Babbling Wand - Reaction: You declared the Redeploy command for a friendly Moonclan unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Loonking's Entreaty - Once Per Battle - Reaction: You declared The Bad Moon's Orbit ability`,
        desc: `Effect: You can choose whether the Bad Moon moves to the next location or stays in its current location instead of rolling the dice.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  Loonboss: {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ["I'm Da Boss, Now Stab 'Em Good!"])],
    }, */
    effects: [
      {
        name: `Let's Get Stabbin'! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Moonclan Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'm Da Boss`,
        desc: `Declare: Pick a visible friendly Moonclan Stabbas unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick one of the following effects: 
        Get Back Ere!: If the target is not in combat, you can return D6 slain models to it. 
        Stab Em Good!: Add 1 to wound rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      //  DeadTricksyEffect
    ],
  },
  'Loonboss on Mangler Squigs': {
    effects: [
      {
        name: `Bite Da Moon! - Once Per Battle`,
        desc: `Declare: Pick this unit and all friendly Squig units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to hit rolls for attacks made with the targets Fang-filled Gobs, Massive Fang-filled Gobs and Huge Fang-filled Gobs for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Squig Rage - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Huge Fang-filled Gobs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Watch Out! - Passive`,
        desc: `Effect: If this unit is destroyed, before removing it from play, roll a dice for each enemy unit within this units combat range. On a 4+, infict D3 mortal damage on that unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ker-Splat! - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice for each model in the target unit, to a maximum of 10. For each 4+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
      //  WatchOutEffect,
      //  KersplatEffect,
    ],
  },
  'Loonboss on Giant Cave Squig': {
    effects: [
      {
        name: `Let's Get Bouncin'! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Squig Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*  'Loonboss with Giant Cave Squig': {
    effects: [
     // DeadTricksyEffect,
      {
        name: `Goin' Somewhere?`,
        desc: `At the start of the battleshock phase, you can pick 1 other friendly Gloomspite Gitz Grot unit within 3" of this unit and say that the Loonboss will set his Cave Squig loose on them. If you do so, that unit suffers D3 mortal wounds, but for each mortal wound it suffers, add 3 to its Bravery characteristic until the end of the phase.`,
        when: [START_OF_BATTLESHOCK_PHASE],
      },
      {
        name: `Gobbled Up`,
        desc: `At the end of the combat phase, pick 1 enemy model within 1" of this unit and roll a dice. If the roll is equal or greater than that model's Wounds characteristic, it is slain.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  /* 'Madcap Shaman': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Night Shroud'])],
    }, 
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Madcap Mushroom`,
        desc: `Once per battle, in your hero phase, you can say this unit will eat its Madcap Mushroom. If you do so, this unit can attempt to cast 1 additional spell in that phase. If it does so and the casting roll is a double, this unit suffers D3 mortal wounds after the effect of the spell has been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Fungoid Cave-Shaman': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Spore Maws'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Deffcap Mushroom - Once Per Battle`,
        desc: `Effect: Add 1 to this units power level for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* Zarbag: {
    mandatory: {
      spells: [keyPicker(Spells, ['Face of Da Bad Moon', 'Jealous Hex'])],
    },
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Sniffer Spite`,
        desc: `At the start of your hero phase, roll a dice. On a 4+, this unit can attempt to cast 1 additional spell in that phase.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  "Zarbag's Gitz": {
    effects: [
      {
        name: `Loonsmasha Fanatic`,
        desc: `A Loonsmasha Fanatic unit consisting of 1 model lurks with Zarbag's Gitz.`,
        when: [DURING_GAME],
      },
      NettersEffect,
      {
        name: `'Protect Da Boss!'`,
        desc: `Before you allocate a wound or mortal wound to a friendly Zarbag, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly Zarbag, if this unit is within 3" of that friendly Zarbag, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to that Zarbag as normal. On a 3+, that wound or mortal wound is allocated to this unit instead.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Snirk Sourtongue`,
        desc: `The first time this unit is set up on the battlefield, 1 Loonsmasha Fanatics unit consisting of 1 model is added to your army and hidden within this unit as a reserve unit.`,
        when: [DURING_GAME],
      },
    ],
  }, */
  'Moonclan Stabbas': {
    effects: [
      // ...GrotBaseEffects,
      {
        name: `Netters`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Moonclan Shootas': {
    effects: [
      // ...GrotBaseEffects,
      {
        name: `Netters`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
      Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Loonsmasha Fanatics': {
    effects: [
      {
        name: `Release the Fanatics!`,
        desc: `Declare: Pick this unit if it is hidden among the mobs. Then, pick a friendly Moonclan Shootas or Moonclan Stabbas unit that has 10 or more models to be the target. 
        Effect: Set up this unit anywhere on the battlefield wholly within 6" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Hidden Loons`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve hidden among the mobs. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Whirling Death - Passive`,
        desc: `Effect: This unit has Strike-first.`,
        when: [COMBAT_PHASE],
      },
      //  WhirlingDeathEffect,
    ],
  },
  'Sporesplatta Fanatics': {
    effects: [
      {
        name: `Puffshroom Frenzy - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of melee weapons used by other friendly Moonclan units while they are wholly within 12" of this unit. Subtract 1 from the Attacks characteristic of weapons used by enemy units while they are in combat with this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `A Prod in the Right Direction`,
        desc: `Effect: This unit can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Squig Hoppers': {
    effects: [
      {
        name: `Boing! Boing! Boing!`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Boingrot Bounderz': {
    effects: [
      {
        name: `Boing! Smash!`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Sneaky Snufflers': {
    effects: [
      {
        name: `Looncap Mushrooms - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible friendly Moonclan unit wholly within 12" of it to be the target. 
        Effect: Roll a dice. Add 1 to the roll if this unit is under the light of the Bad Moon. On a 3+, the target has Ward (5+) until the start of your next turn. On a 6+, also add 1 to the Attacks characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Squig Herd': {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Squigs Gone Wild - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      // SquigsGoneWildEffect,
      {
        name: `Herding Squigs`,
        desc: `Effect: Roll a dice for each Squig Herder in this unit. For each 2+, you can return D3 slain Cave Squigs to this unit. For each 1, 1 Squig Herder in this unit is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mangler Squigs': {
    effects: [
      {
        name: `Squig Rage - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Huge Fang-filled Gobs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Watch Out! - Passive`,
        desc: `Effect: If this unit is destroyed, before removing it from play, roll a dice for each enemy unit within this units combat range. On a 4+, infict D3 mortal damage on that unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Giant Boing! - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit can move 3D6" but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      //  KersplatEffect, WatchOutEffect
    ],
  },
  /* 'Colossal Squig': {
    effects: [
      {
        name: `Crazed Charge`,
        desc: `Roll a dice for each enemy unit that is within 1" of this model after this model makes a charge move. On a 2+, that enemy unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Fungoid Squig Explosion`,
        desc: `If this model is slain, before removing this model from play, roll a dice for each enemy unit within 3" of it. On a 2+, that enemy unit suffers D3 mortal wounds. Then, you can add 1 Squig Herd unit of up to 5 models to your army. Set up the Squig Herd unit wholly within 9" of this model and more than 3" from all enemy models. This model is then removed from play.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Puff Spores`,
        desc: `Subtract 1 from hit rolls for attacks made with melee weapons that target this model.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Swallowed Whole`,
        desc: `If the unmodified hit roll for an attack made with this model's Enormous Jaws is 6, that attack causes D3 mortal wounds to the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Squig Gobba': {
    effects: [
      {
        name: `Arcing Spit`,
        desc: `When this model makes an attack with Spitsquigs, it can target an enemy unit that is not visible to it. In addition, add 1 to hit rolls for attacks made with Spit-squigs if the target has more than 5 models.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Webspinner Shaman on Arachnarok Spider': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Venom of the Spider God'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Chitinous Legs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wall Crawler - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Ensnaring Webbing - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry Hero within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      //  ArachnarokSpiderVenomEffect,
      //  WallCrawlerEffect,
      {
        name: `Catchweb Spidershrine - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Spiderfang Wizards while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Scuttleboss on Gigantic Spider': {
    effects: [
      {
        name: `Spider Venom`,
        desc: `If the unmodified hit roll for an attack made by this model is 6, that attack causes 2 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [COMBAT_PHASE],
      },
     // WallCrawlerEffect,
      {
        name: `'Scuttle Away!'`,
        desc: `Once per battle, at the end of the combat phase, you can say this unit will order his warriors to scuttle away. If you do so, you can pick 1 friendly Spider Riders unit wholly within 12" of this unit. This unit and the unit you picked can retreat, one after the other in the order of your choice.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Webspinner Shaman': {
    /*  mandatory: {
      spells: [keyPicker(Spells, ['Speed of the Spider God'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Speed of the Spider God: Casting value of 6`,
        desc: `Declare: Pick a visible friendly Spiderfang unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: The target can use a Run ability this turn and still use Shoot and/or Charge abilities later in the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Web Slingshot`,
        desc: `Declare: Pick a friendly Spiderfang unit or terrain feature within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, remove this unit from the battlefield and set it up again wholly within 3" of the target and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Spider Riders': {
    effects: [
      {
        name: `Wall Crawler - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      //  WallCrawlerEffect,
    ],
  },
  'Arachnarok Spider with Flinger': {
    effects: [
      {
        name: `Flinger - Passive`,
        desc: `Effect: If any attacks made with this units Flinger score a hit, after the Shoot ability has been resolved, roll a dice. On a 2+, the target unit is entangled until the start of your next turn. Halve the Move characteristic of a unit while it is entangled.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Beast-Binding Webbing - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from the Attacks characteristic of the targets Companion weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Chitinous Legs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wall Crawler - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      //  WallCrawlerEffect,
    ],
  },
  'Arachnarok Spider with Spiderfang Warparty': {
    effects: [
      // ArachnarokSpiderVenomEffect,
      // WallCrawlerEffect,
      {
        name: `Voracious Predator - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units within 1" of this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage equal to the roll on that target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Chitinous Legs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wall Crawler - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Skitterstrand Arachnarok': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Chitinous Legs is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wall Crawler - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Realmweb Lurker`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve skittering through tunnels in reality. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      // WallCrawlerEffect,
      {
        name: `Ambush From Beyond`,
        desc: `Declare: Pick this unit if it is skittering through tunnels in reality. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Scuttling Terror - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit can move 2D6". It can pass through the combat ranges of enemy units and can pass through models in enemy Infantry units, but it must end that move in combat. 
        Then, pick an enemy Infantry unit that this unit passed across during that move. Inflict D3 mortal damage on that enemy unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Troggoth Hag': {
    mandatory: {
      spells: [keyPicker(Spells, ['Hag Curse'])],
    }, 
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Hag Regeneration`,
        desc: `In your hero phase, you can heal up to D6 wounds allocated to this model.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spell-spite`,
        desc: `Each time this model successfully unbinds a spell, you can roll a dice. On a 4+, the caster of that spell suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
      {
        name: `Terrible Stench`,
        desc: `Subtract 1 from hit rolls for attacks made with melee weapons that target this model.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Dankhold Troggboss': {
    effects: [
      // CrushingGripEffect,
      {
        name: `Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      //  MagicalResistanceEffect,
      // SquigglyBeastFollowersEffect,
      {
        name: `Shepherd of Destruction - Once Per Turn`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 3+, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Troggoth units while they are within this units combat range.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* Mollog: {
    effects: [
      {
        name: `Companions`,
        desc: `Mollog is accompanied by a Bat Squig, Spiteshroom and Stalagsquig. Mollog and his companions are treated as a single model that uses the characteristics above. His companions must remain within 1" of him. Before you allocate a wound or mortal wound to this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to this unit, you can choose to remove 1 of its companions. If you do so, that wound or mortal wound is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Bat Squig`,
        desc: `At the start of your shooting phase, you can pick 1 enemy unit within 18" of this unit and roll a dice. On a 2+, that enemy unit suffers 1 mortal wound. This ability cannot be used if the Bat Squig companion has been removed.`,
        when: [START_OF_SHOOTING_PHASE],
      },
    //  RegenerationEffect,
      {
        name: `Spiteshroom`,
        desc: `At the start of the combat phase, you can pick 1 enemy unit within 3" of this unit and roll a dice. On a 5+, subtract 1 from hit rolls for attacks made by that unit in that phase. This ability cannot be used if the Spiteshroom companion has been removed.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Stalagsquig`,
        desc: `If you choose to remove this companion, roll a dice. On a 5+, this companion is not removed, but the wound or mortal wound is still negated. This roll is not a ward roll.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Fellwater Troggoths': {
    effects: [
      //  RegenerationEffect,
      {
        name: `Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Noxious Vomit - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy unit by attacks made with this units Noxious Vomit, that unit is drenched in vomit until the start of your next turn. While a unit is drenched in vomit: 
        Subtract 1 from save rolls for that unit. 
        Ignore positive modifiers to save rolls for that unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /* 'Sourbreath Troggoths': {
    effects: [
      {
        name: `Regeneration`,
        desc: `In your hero phase, you can roll a dice for this unit. If you do so, on a 4+, heal up to D3 wounds allocated to this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Too Dumb to Die`,
        desc: `This unit has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */
  'Rockgut Troggoths': {
    effects: [
      //   RegenerationEffect,
      {
        name: `Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [START_OF_TURN],
      },
    ],
  },
  'Dankhold Troggoth': {
    effects: [
      {
        name: `Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wade and Smash - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move 6" but must end that move in combat. Then, roll a D3 for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      //  CrushingGripEffect, MagicalResistanceEffect, RegenerationEffect, SquigglyBeastFollowersEffect
    ],
  },
  /*  'Aleguzzler Gargant': {
    effects: [
      {
        name: `Drunken Stagger`,
        desc: `You can attempt a charge with this unit if it is within 18" of the enemy instead of 12". In addition, roll 3D6 instead of 2D6 when making a charge roll for this unit. However, if a charge roll for this unit includes three dice that show the same number before modifiers are applied, this unit cannot make a charge move in that phase and the players must roll off. The winner must pick a point on the battlefield 3" from this unit. Each unit within 2" of that point suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Stuff Em In Me Bag`,
        desc: `After this model piles in, you can pick 1 enemy model within 3" of this model and roll a dice. If the roll is equal to or greater than double that model's Wounds characteristic, it is slain.`,
        when: [COMBAT_PHASE],
      },
      ...GenericEffects.Gargant,
    ],
  },
  "Rippa's Snarlfangs": {
    effects: [
      {
        name: `Vindictive Attackers`,
        desc: `Add 1 to hit rolls and wound rolls for attacks made by this unit that target a unit that has 1 or more wounds allocated to it.`,
        when: [COMBAT_PHASE],
      },
      FerociousPounceEffect,
    ],
  }, */
  'Snarlfang Riders': {
    effects: [
      {
        name: `'Can't Catch Us!' - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, this unit can move D6". It cannot end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Gobbapalooza: {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Mesmerise', 'Fungoid Cloud'])],
    }, */
    effects: [
      {
        name: `Hallucinogenic Fungus Brews - Passive`,
        desc: `Effect: In the first battle round, this unit has Ward (4+). In the second battle round, this unit has Ward (5+). In the third and subsequent battle rounds, this unit has Ward (6+).`,
        when: [DURING_GAME],
      },
      // HallucinogenicFungusBrewsEffect,
      {
        name: `Gobbapalooza Know-Wotz`,
        desc: `Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Glareface Dance: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to run rolls and charge rolls for that unit until the start of your next turn. 
        Nasty Poisons: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to the Rend characteristic of that units weapons until the start of your next turn. 
        Mesmerise: Pick a visible enemy unit within 12" of this unit. Until the start of your next turn, that unit cannot use commands.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Grinkrak the Great': {
    effects: [
      DeadTricksyEffect,
      {
        name: `'I Dub Thee...'`,
        desc: `At the start of the combat phase, you can pick 1 other friendly Moonclan unit within 3" of this unit to be dubbed. If you do so, until the end of that phase, if any models in that unit are slain, those models can fight before they are removed from play.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  "Grinkrak's Looncourt": {
    effects: [
      {
        name: `The Looncourt's Quest`,
        desc: `After this unit has been set up on the battlefield for the first time, you can pick 1 objective or 1 terrain feature in enemy territory to be the object of this unit's quest. If you gain control of that objective or terrain feature while this unit is contesting it, this unit completes its quest. Once the quest is complete, for the rest of the battle, this unit has a ward of 4+.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Looncourt's Quest`,
        desc: `Once the quest is complete, for the rest of the battle, this unit has a ward of 4+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Grinkrak's Toadies`,
        desc: `Before you allocate a wound or mortal wound to a friendly Grinkrak, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly Grinkrak, if this unit is within 3" of that friendly Grinkrak, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to that Grinkrak as normal. On a 3+, that wound or mortal wound is allocated to this unit instead.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  Squigboss: {
    effects: [
      {
        name: `Feedin' Time - Once Per Turn`,
        desc: `Declare: Pick a friendly Squig unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply for the rest of the turn: 
        Crimson Decap: Add 3" to the targets Move characteristic. 
        Yellow Lurka: The targets Fang-filled Gobs, Huge Fang-filled Gobs or Massive Fang-filled Gobs have Crit (Mortal).`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Trugg the Troggoth King': {
    effects: [
      //  WarmasterEffect,
      {
        name: `Malfunctioning Leystone`,
        desc: `Effect: Roll 3 dice. You must pick 1 of those dice and apply the effect that corresponds to its value. Effects 2-6 persist until the start of your next turn. 
        1 Glyph of Shyish: Inflict D3 mortal damage on this unit. 
        2 Glyph of Ghur: Add 1 to the Attacks characteristic of melee weapons used by friendly Troggoth units while they are wholly within 12" of this unit. 
        3 Glyph of Aqshy: Add 1 to the Rend characteristic of melee weapons used by friendly Troggoth units while they are wholly within 12" of this unit. 
        4 Glyph of Hysh: This unit can use Unbind abilities as if it had Wizard (1). 
        5 Glyph of Ulgu: Subtract 1 from hit rolls for shooting attacks that target friendly Troggoth units while they are wholly within 12" of this unit. 
        6 Glyph of Chamon: This unit has Ward (5+).`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, when it uses the Malfunctioning Leystone ability, roll 1 dice instead of 3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Crushing Grip - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 1" of this unit to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
    ],
  },
  'Rabble-Rowza': {
    effects: [
      {
        name: `Secret Tunnels`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve in a secret tunnel. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Emerge from the Depths`,
        desc: `Declare: Pick this unit if it is in a secret tunnel. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Neh Neh Na-Neh Neh! Can't Catch me! - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Monster or Beast unit to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn, but each time it uses a Move ability, it must end the move closer to this unit. 
        In addition, for the rest of the turn, the first time the target ends a move within this units combat range, inflict D6 mortal damage on this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /*  'Grotmas Gitz': {
    effects: [
      {
        name: `Bludgeoning Cheer`,
        desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a number of dice equal to the unmodified charge roll for that charge move. For each 4+, that enemy unit suffers 1 mortal wound.`,
        when: [CHARGE_PHASE],
        rule_sources: [rule_sources.GROTMAS_GITZ],
      },
      {
        name: `Giftz for All!`,
        desc: `After this unit has made a normal move, run or retreated, pick 1 enemy unit that this unit passed across and roll a dice. On a 4+, subtract 1 from the Damage characteristic of that unit's melee weapons (to a minimum of 1) until the start of your next hero phase.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [rule_sources.GROTMAS_GITZ],
      },
      {
        name: `'Oh! Grotmas bellz, Skragrott smellz'`,
        desc: `Subtract 1 from hit rolls for attacks made by friendly Gloomspite Gitz units while they are wholly within 6" of this unit. Add 1 to the Damage characteristic of melee weapons used by friendly Gloomspite Gitz units while they are wholly within 6" of this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
        rule_sources: [rule_sources.GROTMAS_GITZ],
      },
    ],
  }, */
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
  'ROR: Enforcers of the Tithe': {
    effects: [
      {
        name: `Mortisan Ossifector: Refined Creations - Once Per Turn`,
        desc: `Declare: Pick a friendly Gothizzar Harvester, Morghast Archai or Morghast Harbingers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortek Guard: Shieldwall - Passive`,
        desc: `Effect: Ignore all modiifers to save rolls for this unit (positive and negative) for the rest of the turn if this unit did not use a Move ability in the same turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Bone Harvest - Passive`,
        desc: `Effect: Each time an enemy model in combat with this unit is slain, give this unit 1 bone-tithe point. This unit can have a maximum of 6 bone-tithe points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Gruesome Surgery - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. For each model slain by this ability, you can return 1 slain model to a friendly Mortek Guard unit wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gothizzar Harvester: Repair Construct`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Return a number of slain models to the target with a combined Health characteristic equal to the number of bone-tithe points this unit has. Then, reset this units bone-tithe points to 0.`,
        when: [END_OF_TURN],
      },
      {
        name: `Collect the Tithe - Once Per Turn`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability, then pick a non-Hero Infantry unit (friendly or enemy) to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Health characteristic, 1 model in the target unit is slain, then give the unit using this ability 1 bone-tithe point.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Soul Tax: Casting value of 7`,
        desc: `Declare: Pick the Mortisan Ossifector in this Regiment of Renown to cast this spell, then: 
        Pick a friendly unit, excluding units in this Regiment of Renown, to be the target. 
        Pick a unit in this Regiment of Renown to be the recipient. 
        The target and the recipient must be wholly within 12" of and visible to the caster. Then, make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        The target has a maximum control score of 1. 
        Add 1 to hit rolls and wound rolls for the recipients combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rebuild on the March`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability if it has 6 bone-tithe points. Then, pick another unit in this Regiment of Renown that has been destroyed to be the target. 
        Effect: Reset the Gothizzar Harvesters bone-tithe points to 0. Then, set up a replacement of the target unit with half the number of models (rounding up) wholly within 9" of the Gothizzar Harvester and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Exile Scavengers': {
    effects: [
      {
        name: `Endrinmaster with Dirigible Suit: By Grungi, I Have My Eye On You! - Passive`,
        desc: `Effect: Add 1 to field repairs rolls for friendly Endrinriggers units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Endrinmaster with Dirigible Suit: Endrinmaster`,
        desc: `Declare: Pick a friendly Skyvessel within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skywardens: Timed Charges`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grundstok Gunhauler: Light Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 4 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `An Eye for Loot`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve studying the battlefield. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swoop In`,
        desc: `Declare: Pick the Grundstok Gunhauler in this Regiment of Renown to use this ability if it is studying the battlefield. 
        Effect: Set up the Grundstok Gunhauler on the battlefield more than 6" from all enemy units that have an artefact of power and more than 9" from all other enemy units. Then, set up all other units in this Regiment of Renown wholly within 3" of the Grundstok Gunhauler and more than 6" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `What's Yours is Mine - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. Then, pick an artefact of power the target has. 
        Effect: Roll a dice. Add 1 to the roll for each unit in this Regiment of Renown that is in combat with the target. On a 6+, the target no longer has that artefact of power.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Nurgles Gift': {
    effects: [
      {
        name: `Nurglings: Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Incubation Period`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve festering within. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bursting with Life - Passive`,
        desc: `Effect: If a friendly non-Nurgles Gift unit would be destroyed, before the last model is removed from play, roll a dice. Add 1 to the roll for each other friendly non-Nurgles Gift unit that has been destroyed this battle. On a 5+, pick a friendly unit that is festering within and set it up wholly within 6" of that model. It can be set up in combat.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Stumblefoot Gargant': {
    effects: [
      {
        name: `Mancrusher Gargant: Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Projectile Vomit - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick all other units (friendly and enemy) within 3" of that point to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bellowing Mockery - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn, then pick an enemy unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Whatre You Lookin At? - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it charged this turn and has not used a Rampage ability this turn. Then, pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll 2D6. This unit can move a number of inches equal to the roll. It can pass through enemy models and must end that move in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Goroan Scions': {
    effects: [
      {
        name: `Ogroid Myrmidon: Pit Master - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Ogroid Theridons unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Thaumaturge Rage - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is damaged.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Burning Fury - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: The target has the Burning keyword.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Theridons: Unleashed Savagery - Once Per Battle`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Goroan Forgecraft - Once Per Turn`,
        desc: `Declare: Pick a friendly Destruction Hero that is wholly within the combat range of a Hero in this Regiment of Renown to be the target. 
        Effect: On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bellow of Gorkamorka: Casting value of 7`,
        desc: `Declare: Pick the Ogroid Thaumaturge in this Regiment of Renown to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-last until the start of your next turn. In addition, while the target has the Burning keyword, subtract 1 from hit rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Da Hurtlin Hogz': {
    effects: [
      {
        name: `Tuskboss on Maw-Grunta: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Maw-gruntas Tusks is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tuskboss on Maw-Grunta: Head of the Stampede - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick up to 3 friendly Maw-grunta units wholly within 12" of this unit that charged this turn to be the targets. 
        Effect: Add 1 momentum point to each target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Tuskboss on Maw-Grunta, Maw-Grunta Gougers: Unstoppable Momentum - Passive`,
        desc: `Effect: Each time this unit has charged as a result of using a Charge ability, it gains 1 momentum point. Each time it uses a Run ability, it gains 2 momentum points. It can have a maximum of 3 momentum points at once. 
        Add the number of momentum points this unit has to the Damage characteristic of its Maw-gruntas Tusks. At the end of each battle round, subtract 1 from its momentum points, to a minimum of 0`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Maw-Grunta Gougers: Flattened Into the Mud - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice and add the number of momentum points this unit has to the roll. On a 5+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grunta Waaagh! - Once Per Battle`,
        desc: `Declare: You can use this ability if this Regiment of Renown's Tuskboss on Maw-Grunta is on the battlefield. 
        Effect: For the rest of the phase, each time a friendly unit in this Regiment of Renown finsihes a charge move, roll a D3 for each enemy unit within 1" of that unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. If that enemy unit is Infantry, add 1 to the mortal damage inflicted (if any).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Pullin Ahead - Once Per Turn`,
        desc: `Declare: Pick a friendly unit in this Regiment of Renown that charged this turn and has not used any Rampage abilities this turn to be the target. 
        Effect: The target can move D6". It must end that move in combat. Then, add 1 to the target's momentum points. After this abilty has been resolved, the target cannot use any other Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Da Kountin Krew': {
    effects: [
      {
        name: `Swampboss Skumdrekk: Bet-Master`,
        desc: `Declare: Pick an enemy unit on the battlefield to be the bet. 
        Effect: Add 1 to wound rolls for attacks made by this unit and friendly Hobgrot Slittaz units that target the bet.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swampboss Skumdrekk: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Sloppklaws Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Swampboss Skumdrekk: Kountin' Krew`,
        desc: `Declare: Pick a friendly Hobgrot Slittaz unit within this units combat range to be the target. 
        Effect: For the rest of the battle, the targets Slitta-knives have Crit (Mortal) while they are wholly within 12" of this unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swampboss Skumdrekk: Aggravate Wounds - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the number of damage points the target has. For each 5+, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hobgrot Slittaz: Scrap-Bang`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        Inflict 1 mortal damage on the target. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bombz Away, Ladz! - Passive`,
        desc: `Effect: Friendly units in this Regiment of Renown can use Run abilities and still use Shoot abiliites later in the turn while they are wholly within 12" of this Regiment of Renown's Swampboss Skumdrekk.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Snatch 'Em Up! - Once Per Phase (Enemy Hero Phase)`,
        desc: `Declare: Pick an enemy model in combat with this Regiment of Renown's  Swampboss Skumdrekk to be the target. 
        Effect: Roll a dice. If the roll is at least double the target's Health characteristic, it is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
