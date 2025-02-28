import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_SHOOTING_PHASE,
  START_OF_TURN,
  TURN_ONE_END_OF_MOVEMENT_PHASE,
  TURN_ONE_START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import rule_sources from './rule_sources'
import Spells from './spells'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'
import meta_rule_sources from 'meta/rule_sources'

/*const TaintedEndlessSpellEffect = {
  name: `Tainted Endless Spell`,
  desc: `If this unit summons an endless spell, then for the purposes of the Diseased battle trait, that endless spell is treated as a unit with the Maggotkin of Nurgle keyword that is in the same army as this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in a Maggotkin of Nurgle army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
}
const BloatedWithCorruptionEffect = {
  name: `Bloated with Corruption`,
  desc: `If an unmodified ward roll for this unit is 6, you can pick 1 enemy unit within 3" of this unit. That enemy unit suffers 1 disease point.`,
  when: [SAVES_PHASE],
  shared: true,
}
const RelentlessAttackersEffect = {
  name: `Relentless Attackers`,
  desc: `At the end of the combat phase, pick 1 enemy unit with a Wounds characteristic of 3 or less that is within 3" of this unit. Roll 1 dice for each model in this unit that is within 3" of that enemy unit. For each roll that exceeds that enemy unit's Wounds characteristic, that enemy unit suffers 1 mortal wound.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}
const LordOfTheBlightkingsEffect = {
  name: `Lord of the Blightkings`,
  desc: `In the combat phase, when you pick this unit to fight for the first time in that phase, you can pick 1 friendly Putrid Blightkings unit wholly within 12" of this unit and that has not yet fought in that phase. This unit and that Putrid Blightkings unit can fight one after the other in the order of your choice.`,
  when: [COMBAT_PHASE],
  shared: true,
} */

const Units = {
  Rotigus: {
    /*mandatory: {
      spells: [keyPicker(Spells, ['Deluge of Nurgle'])],
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Mountain of Loathsome Flesh'])],
    }, */
    effects: [
      //   WarmasterEffect,
      //  GenericEffects.WizardTwoSpellsEffect,
      //  BloatedWithCorruptionEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Gnarlrod is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deluge of Nurgle: Casting value of 8`,
        desc: `Declare: Pick each Diseased enemy unit on the battlefield and each friendly Maggotkin of Nurgle unit in combat with any Diseased enemy units to be the targets. Then, make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+: 
        If the target is an enemy unit, inflict an amount of mortal damage on the target equal to the roll.
        If the target is a friendly unit, Heal (X) the target, where X is an amount equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mountain of Loathsome Flesh - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, roll a dice. On a 3+, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Bringer of Plenty - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Great Unclean One': {
    /*  mandatory: {
      spells: [keyPicker(Spells, ['Plague Wind'])],
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Mountain of Loathsome Flesh'])],
    }, */
    effects: [
      //  GenericEffects.WizardTwoSpellsEffect,
      //  BloatedWithCorruptionEffect,
      {
        name: `Locus of Nurgle - Once Per Turn`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Daemon unit that started the battle with 3 or more models and that has been destroyed to be the target. 
        Effect: Roll a dice. On a 4+, set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Bloated with Corruption - Once Per Turn`,
        desc: `Declare: If this unit is damaged, pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Colossal Blight Weapons is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Plague Wind: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: The target has the Diseased keyword.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Poxbringer, Herald of Nurgle': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Eruptive Infestation'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Captain of the Plague Legions - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Plaguebearers unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Epidemius, Tallyman of Nurgle': {
    effects: [
      {
        name: `Tallyman of Nurgle`,
        desc: `At the start of your hero phase, if this unit is on the battlefield, roll the following number of dice for each of the following units and terrain features that are visible to this unit:

        - 3 dice for each friendly Great Unclean One.

        - 2 dice for each friendly Plaguebearer Host that has 10 or more models and each Feculent Gnarlmaw in your army.

        1 dice for each other friendly Maggotkin of Nurgle unit.

        For each roll of 5+, add 1 to the tally of new diseases kept by Epidemius, to a maximum tally of 7. Each new disease that is recorded allows you to reroll 1 ward roll, casting roll, dispelling roll or unbinding roll that you make for a friendly Maggotkin of Nurgle unit.

        Designer's Note: You can keep track of the tally of diseases and the number of rerolls you have used on a piece of paper or with a separate pool of dice. Note that each new disease only allows you to make a single reroll during the battle.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
  'Spoilpox Scrivener, Herald of Nurgle': {
    effects: [
      {
        name: `Keep Counting, I'm Watching You - Once Per Turn`,
        desc: `Declare: Pick a friendly Plaguebearers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a D6. On a 2+, pick 1 of the following effects to apply until the start of your next turn: 
        Tally of Blows: Add 1 to the Attacks characteristic of the targets melee weapons. 
        Recorded Stamina: Add 1 to save rolls for the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Sloppity Bilepiper, Herald of Nurgle': {
    effects: [
      {
        name: `Jolly Gutpipes - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply for the rest of the turn: 
        A-Stabbing We Will Go!: Add 1 to wound rolls for the targets attacks. 
        Early One Evening My Pustule Was Seeping: Ward rolls cannot be made for damage points inicted by the targets combat attacks. 
        My Love Is Like a Ripe, Ripe Fart: Subtract 1 from hit rolls for attacks made by enemy units that target the target unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Horticulous Slimux': {
    effects: [
      {
        name: `Beast Handler - Once Per Turn`,
        desc: `Declare: Pick a friendly Beasts of Nurgle unit that has been destroyed. 
        Effect: Roll a dice. On a 3+, set up a replacement unit wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Cultivating the Garden of Nurgle`,
        desc: `Effect: If there are fewer than 3 friendly Feculent Gnarlmaws on the battlefield, you can set up a Feculent Gnarlmaw wholly within 12" of this unit, more than 3" from all enemy units, objectives and other terrain features.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_NURGLE, rule_sources.ERRATA_JANUARY_2022],
      },
    ],
  },
  Plaguebearers: {
    effects: [
      {
        name: `Cloud of Flies - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Plague Drones': {
    effects: [
      {
        name: `Ripe Pastures - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
    ],
  },
  'Beasts of Nurgle': {
    effects: [
      {
        name: `Attention Seekers`,
        desc: `Declare: If this unit is not in combat, pick the closest enemy unit to it to be the target. If 2 or more enemy units are tied to be the closest, you can pick which is the target. Then, make a charge roll of 2D6. 
        Effect: This unit can move a distance up to the value of the charge roll. During that move, this unit can move into combat and can pass through models in the target unit, but it must end that move within 1" of the target. Then, inflict D3 mortal damage on the target. If it does so, this unit has charged.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Nurglings: {
    effects: [
      {
        name: `Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Glottkin': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Blightkrieg'])],
      spells: [keyPicker(Spells, ['Abundance of Flesh'])],
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Mountain of Loathsome Flesh'])],
    }, */
    effects: [
      // WarmasterEffect,
      // GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Horrific Opponent - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points,the Attacks characteristic of Ghurks Tentacle is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blighted Stampede - Once Per Turn - Reaction: You declared a Counter-Charge command for this unit`,
        desc: `Effect: Pick up to 2 friendly Maggotkin of Nurgle units wholly within 12" of this unit to be the targets. After the Counter-charge command for this unit has been resolved, if this unit charged, each of the targets can immediately use the Counter-charge command in an order of your choosing without any command points being spent.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Overgrowth of Flesh: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 5+, inflict 1 mortal damage on the target, to a maximum of 7 mortal damage.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Orghotts Daemonspew': {
    effects: [
      // WarmasterEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Whippermaws Claws and Maws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Acid Ichor - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grasping Tongue - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to wound rolls for combat attacks made by friendly Maggotkin of Nurgle units that target that enemy unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Bloab Rotspawned': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Miasma of Pestilence'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Bilespurters Claws and Maw is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Daemon Flies - Once Per Turn`,
        desc: `Declare: Pick each enemy unit within 7" of this unit to be the targets. 
        Effect: Roll a dice for each target. On a 4+: 
        Inflict 1 mortal damage on the target. 
        Subtract 1 from hit rolls for the targets combat attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Miasma of Pestilence: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, each time a friendly ability is used that resulted in any damage points being allocated ot the target, roll a dice. On a 4+, allocate 1 additional damage point to the target (ward rolls cannot be made for that damage point).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Morbidex Twiceborn': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Tripletongues Claws and Maw is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gigantic Nurgling-kin`,
        desc: `Effect: Heal (X) this unit, where X is half the number of damage points this unit has (rounding up).`,
        when: [END_OF_TURN],
      },
      {
        name: `Lord of Nurglings - Passive`,
        desc: `Effect: While any friendly Nurglings units are wholly within 12" of this unit: 
        Ignore the first damage point that would be allocated to each of those units each phase. 
        Add 3 to those units control scores.`,
        when: [DURING_GAME, END_OF_TURN],
      },
      {
        name: `Tide of Nurglings - Once Per Turn`,
        desc: `Declare: Pick a friendly Nurglings unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, the targets melee weapons have Crit (Mortal) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lord of Afflictions': {
    effects: [
      {
        name: `Vectors of Foulest Contagion`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Master of Rot Flies`,
        desc: `Declare: If this unit charged this turn, pick this unit and up to 2 friendly Pusgoyle Blightlords units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Rend characteristic of the targets Companion melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Festus the Leechlord': {
    mandatory: {
      spells: [keyPicker(Spells, ["The Leechlord's Curse"])],
    },
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Delightful Brews, Splendid Restoratives`,
        desc: `At the start of your hero phase, you can pick 1 unit within 1" of this unit. If you pick a friendly unit, roll a dice. On a 2+, you can heal up to D3 wounds allocated to that unit. If you pick an enemy unit, roll a dice. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
  'Harbinger of Decay': {
    effects: [
      {
        name: `Knell of Doom - Once Per Battle - Enemy Hero Phase`,
        desc: `Declare: Pick up to 3 enemy units within 24" of this unit to be the targets. 
        Effect: Until the start of your next turn, subtract 1" from the Move characteristic of each target and subtract 1 from run rolls and charge rolls for each target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Omens of Decay: Chant value of 4`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effect: Subtract twice the current battle round number from the targets control score for the rest of the turn. If the chanting roll was 10+, this ability aects all enemy units within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Rotbringer Sorcerer': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Stream of Corruption'])],
    }, */
    effects: [
      //GenericEffects.WizardOneSpellEffect, TaintedEndlessSpellEffect
      {
        name: `Tainted Sorceries`,
        desc: `Declare: Pick an enemy unit that was picked to be the target of a spell that was successfully cast by this unit this phase to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from ward rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lord of Blights': {
    effects: [
      {
        name: `Thrice-Ripened Death's Heads`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll D3. On 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Festering Bulwark - Passive`,
        desc: `Effect: The Blighted Weapons used by friendly Putrid Blightkings units have Anti-charge (+1 Rend) while those units are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      //  LordOfTheBlightkingsEffect,
    ],
  },
  'Gutrot Spume': {
    effects: [
      {
        name: `Flailing Tentacles`,
        desc: `Declare: Pick an enemy Infantry Hero in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Master of the Slime Fleet`,
        desc: `Declare: Pick a regiment led by this unit to be the target if no units from that regiment have been deployed. 
        Effect: Each unit in the target regiment is set up in reserve aboard the Slime Fleet. Those units have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Pestilential Beachhead`,
        desc: `Declare: Pick this unit if it is aboard the Slime Fleet. 
        Effect: Set up this unit on the battlefield, wholly within 7" of a battlefield edge and more than 9" from all enemy units. Then set up every other friendly unit that is aboard the Slime Fleet on the battlefield wholly within 7" of a battlefield edge, wholly within 7" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Lord of Plagues': {
    effects: [
      {
        name: `Lord of the Blightkings - Passive`,
        desc: `Effect: Add 1 to charge rolls for friendly Putrid Blightkings units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Sevenfold Slaughter`,
        desc: `Declare: Pick a friendly Putrid Blightkings unit that charged this turn and is wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of the targets Blighted Weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      // LordOfTheBlightkingsEffect,
    ],
  },
  'Putrid Blightkings': {
    effects: [
      {
        name: `Bloated Bulk - Passive`,
        desc: `Effect: Add 3 to this units control score while each model in this unit is contesting an objective you control.`,
        when: [END_OF_TURN],
      },
      // RelentlessAttackersEffect,
    ],
  },
  'Pusgoyle Blightlords': {
    effects: [
      {
        name: `Relentless Attackers - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Flyriders Arsenal for attacks that target units contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      // RelentlessAttackersEffect,
    ],
  },
  /* 'Fecula Flyblown': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Stream of Corruption'])],
    }, 
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Retchling`,
        desc: `Once per battle, in your hero phase, you can choose for this unit to channel the power of its familiar. If you do so, this unit can attempt to cast 1 additional spell that phase.`,
        when: [HERO_PHASE],
      },
    //  TaintedEndlessSpellEffect,
    ],
  },
  'The Wurmspat': {
    effects: [
      {
        name: `Festering Bodyguards`,
        desc: `If a friendly Fecula Flyblown is within 3" of this unit, before you allocate a wound or mortal wound to her, or instead of making a ward roll for her, you can roll a dice. On a 4+, that wound is allocated to this unit instead and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE, SAVES_PHASE],
      },
      //RelentlessAttackersEffect,
    ],
  },
 /* 'Rot Coven': {
    mandatory: {
      spells: [keyPicker(Spells, ['Stream of Corruption'])],
    },
    effects: [
      {
        name: `Wizard`,
        desc: `Each model in this unit can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase.`,
        when: [HERO_PHASE],
      },
      TaintedEndlessSpellEffect,
    ],
  }, */
  'Rotmire Creed': {
    effects: [
      {
        name: `Virulent Concoctions - Passive`,
        desc: `Effect: When using the Blessed by the Plaguefather ability, if you choose to infect an enemy unit, you can pick an enemy unit that had any damage points allocated to it by this units shooting attacks this turn to be the target even if that unit is not in combat with a friendly Maggotkin of Nurgle unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: Brand`s Oathbound': {
    effects: [
      {
        name: `Gunnar Brand: Carve a Path to Glory`,
        desc: `Declare: This unit can only use this ability if it is in combat with an enemy Hero. 
        Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn. This unit can only use the second Fight ability if it is in combat with an enemy Hero, and if it does so, it must pick an enemy Hero to be the target of all of its attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gunnar Brand: Oath of Bloodshed - Once Per Battle`,
        desc: `Declare: This unit can only use this ability if any enemy Heroes were slain by this units combat attacks this turn. 
        Effect: Friendly Gunnars Oathsworn units have Ward (4+) for the rest of the battle.`,
        when: [END_OF_TURN],
      },
      {
        name: `Singri Brand: Swift as the Wind - Passive`,
        desc: `Effect: Only critical hits score successful hits for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Singri Brand: Uncanny Shot - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Singris Warbow for attacks that target enemy units that are within 6" of a friendly Gunnar Brand.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Oathsworn Kin: Withering Death: Casting value of 5`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Inflict 1 mortal damage on the target and subtract 1 from the Attacks characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Oathsworn Kin: Broken Nadja - Passive`,
        desc: `Effect: While this units Broken Nadja is on the battlefield, it has Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Favour of the Gods - Once Per Turn`,
        desc: `Effect: If any enemy Heroes were slain this turn by the Gunnar Brand in this Regiment of Renown: 
        Heal (5) each unit in this Regiment of Renown. 
        Add 1 to the Attacks characteristic of melee weapons used by units in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: Hargax`s Pit-Beasts': {
    effects: [
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fomoroid Crusher: Cursed Destroyers - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 1" of this unit, then pick each other unit (friendly and enemy) within 3" of that terrain feature to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mindstealer Sphiranx: Dominate Mind - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bestial Domination - Reaction: You declared a Fight ability for a unit in this Regiment of Renown`,
        desc: `Used By: The unit using that Fight ability. 
        Effect: Pick a unit in this Regiment of Renown that has not used a Fight ability this turn to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: The Coven of Thryx': {
    effects: [
      {
        name: `Magister: Magic-Touched`,
        desc: `Effect: If this unit successfully cast a spell this phase, for the rest of the turn: 
        Add 1 to this units power level. 
        If 2 or more dice in a casting roll for this unit have the same value, the spell fails, its effect is not resolved and D6 mortal damage is inflicted on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pink Horrors: Lunatic Demise - Passive`,
        desc: `Effect: Each time a model in this unit is slain, before removing the model from play, pick 1 of the following effects: 
        Split: Pick a friendly Blue Horrors and Brimstone Horrors unit within 12" of this unit. Return up to 2 slain Blue Horror models to that unit. 
        Petty Vengeance: Pick an enemy unit in combat with this unit to be the target and roll a dice. On a 4+, inflict 1 mortal damage on the target.`,
        when: [DURING_GAME],
      },
      {
        name: `Tome of Eyes: Transfixed by Countless Eyes - Reaction: You declared a Spell ability for a Wizard within this Manifestations combat range`,
        desc: `Effect: You can add 1 or 2 to the casting roll for that spell. Roll a number of dice equal to the amount added. For each 1-2, allocate 1 damage point to the caster. If the caster is destroyed by this ability, the spell has no effect.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning SIgil of Tzeentch: Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each movement phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding eect to all targets for the rest of the turn. 
        1-2 No effect. 
        3 Subtract 2" from the targets Move characteristic. 
        4 Subtract 1 from hit rolls for the targets attacks. 
        5 Subtract 1 from wound rolls for the targets attacks. 
        6 Inflict D3 mortal damage on the target, then add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sparks of Profane Potential - Once Per Battle`,
        desc: `Effect: If the Magister in the Regiment of Renown has been deployed, set up one of the following Manifestations within 1" of them: 
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum.`,
        when: [DURING_SETUP],
      },
      {
        name: `Skilled Summoner: Casting value of 6`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick 1 of the Manifestations from the list below that is not on the battlefield, then make a casting roll of 2D6: 
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum 
        Effect: If there is already a friendly Manifestation from the list above on the battlefield, it is immediately banished. Then, set up the Manifestation you picked within 1" of the caster and visible to them. If that Manifestation is a Daemonic Simulacrum, it must also be set up more than 9" away from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Flickering Wyrdflame - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points inflicted on it this turn by Wyrdflame Spell abilities or attacks made with weapons that have the Wyrdflame weapon ability to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bolt of Tzeentch: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
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
  'ROR: Vlot-Klaw`s Enginecoven': {
    effects: [
      {
        name: `Warlock Galvaneer: Lightning Master - Once Per Battle`,
        desc: `Declare: Pick a friendly Warpvolt Scourgers unit within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, set the Attacks characteristic of the target's Warpvolt Scourgers to 10 for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Warlock Galvaneer: More-More Warpvolt Doom!`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this unit's Warpvolt Obliterator to be the target.
        Effect: Roll a D3 for each other enemy unit within the target's combat range. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Ratling Warpblaster: Overwhelming Fire - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units shooting attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Behold my Genius! - Once Per Battle`,
        desc: `Declare: Pick all friendly Volt-Klaw's Enginecoven units to be the targets.
        Effect: Until the start of your next turn:
        Add 1 to hit rolls for the targets' shooting attacks.
        Add 3" to the Range characteristic of the targets' ranged weapons.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hide-Shelter! - Passive`,
        desc: `Effect: While a friendly Volt-Klaw's Enginecoven Infantry unit is witin the combat range of a friendly Volt-Klaw's Enginecoven Ratling Warpblaster, it is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Krittok`s Clawpack': {
    effects: [
      {
        name: `Krittok Foulblade: Doomfang`,
        desc: `Effect: This unit has Strike-first for the rest of the turn but it cannot use commands this phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Krittok Foulblade:: Command Ability - A Reputation for Cunning - Enemy Hero Phase`,
        desc: `Effect: You can pick 2 different eligible units to use the Always Three Clawsteps Ahead ability this phase instead of 1, but at least 1 of those units must have the Verminus Keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Krittok Foulblade: Foster Competition - Passive`,
        desc: `Effect: Add 1 to wound rolls for friendly Stormvermin units while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Stormvermin: Elite Bodyguard - Passive`,
        desc: `Effect: Friendly Skaven Infantry Heroes have Ward (5+) while they are within this units combat range.`,
        when: [DURING_GAME],
      },
      {
        name: `Doom-Flayer: Whirling Doom`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Fickle Motives - Passive`,
        desc: `Effect: Add 1 to the Attack characteristic of melee weapons used by friendly Krittok's Clawpack units while you have more victory points than your opponent.
        Subtract 3 from the control scores of friendly Krittok's Clawpack units while you have fewer victory points than your opponent.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Always Three Clawsteps Ahead - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Picke a friendly Krittok's Clawpack unit that is not in combat to use this ability.
        Effect: That unit can use the 'Normal Move' ability as if it were your Movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skryre Payloads - Passive`,
        desc: `Effect: Friendly Krittok's Clawpack Doom-Flayers units have Ward (5+) while they are in combat range of a friendly Krittok's Clawpack Stormvermin unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Lord Skaldiors Chosen': {
    effects: [
      {
        name: `Chaos Lord on Daemonic Mount: The Knights of Chaos - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warriors of Chaos Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Knights: Impaling Charge - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to the Rend characteristic of its Cursed Lances.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Warriors: Bringers of Desolation - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Rune-Etched Weapons while it is contesting an objective you control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ironclad Despoilers - Passive`,
        desc: `Effect: Add 1 to save rolls for units in this Regiment of Renown while they are contesting an objective you control. 
        Add 1 to wound rolls for units in this Regiment of Renown while they are contesting an objective you do not control.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Godmarked Ascendant': {
    effects: [
      {
        name: `Daemon Prince: Airborne Horror - Passive`,
        desc: `Effect: If this unit has Wings, it has a Move characteristic of 10" and has Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Daemon Prince: The Mounted Skulls of Fallen - Passive`,
        desc: `Effect: If this unit has a Trophy Rack, its Hellforged Weapons also have Anti-Hero (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Daemon Prince: Immortal Champion`,
        desc: `Effect: Roll a dice. On a 4+, this unit has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Godmarked Legion - Passive`,
        desc: `Effect: The unit in this Regiment of Renown gains the 'Gifts of Chaos' ability and one of the following faction keywords that matches your army's faction.`,
        when: [DURING_GAME],
      },
      {
        name: `Gifts of Chaos - Passive`,
        desc: `Effect:
        If this unit has the Blades of Khorne keyword, add 1 to the Attacks characteristic of its Hellforged Weapons.
        If this unit has the Disciples of Tzeentch keyword, it has Wizard (1).
        If this unit has the Maggotkin of Nurgle keyword, it has Ward (5+).
        If this unit has the Hedonites of Slaanesh keyword, add 1 to run rolls and charge rolls for it.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Squires of the Everchosen': {
    effects: [
      {
        name: `Varghulf Courtier: Bounding Strides - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Varghulf Courtier: Victory Feast`,
        desc: `Effect: If any models were slain by this unit this turn: 
        Heal (D6) this unit. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Morbheg Knights: Shrieking Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Morbheg Knights: Predator's Pounce - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `A Deluded Quest - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Enemy of the Everchosen keyword.`,
        when: [DURING_SETUP],
      },
      {
        name: `A Quest Well Done - Once Per Battle`,
        desc: `Effect: If the enemy Enemy of the Everchosen unit is destroyed by a unit in this Regiment of Renown, add 10 to the control score of each unit in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
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
  'ROR: Snerks Trogg-Fer-Hire': {
    effects: [
      {
        name: `Dankhold Troggoth: Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Dankhold Troggoth: Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dankhold Troggoth: Wade and Smash - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move 6" but must end that move in combat. Then, roll a D3 for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Go Dat Way!`,
        desc: `Declare: Pick the Dankhold Troggoth in this Regiment of Renown to be the target if it is within 12" of the Loonboss in this Regiment of Renown. 
        Effect: For the rest of the turn, the target can still use Charge abilities even if it used a Retreat ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Taktikal Cowering - Passive`,
        desc: `Effect: While the Loonboss in this Regiment of Renown is within the combat range of the Dankhold Troggoth in this Regiment of Renown: 
        That Loonboss has Ward (4+). 
        Each time you make a successful ward roll for that Loonboss, allocate 1 damage point to that Dankhold Troggoth after the damage sequence for that Loonboss has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
