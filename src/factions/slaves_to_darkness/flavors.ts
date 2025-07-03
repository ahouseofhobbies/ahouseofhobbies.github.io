import { TItemDescriptions } from 'factions/factionTypes'
import { keyPicker } from 'factions/metatagger'
import { MARK_KHORNE, MARK_NURGLE, MARK_SLAANESH, MARK_TZEENTCH, MARK_UNDIVIDED } from 'meta/alliances'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
  WARDS_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import rule_sources from './rule_sources'
import spells from './spells'

const Flavors = {
  'Legion of Chaos': {
    effects: [
      {
        name: `United in Darkness - Passive`,
        desc: `Effect: While there is at least 1 friendly Warriors of Chaos Hero and 1 other friendly Daemon Hero or Darkoath Hero on the battlefield, add 2 to the control scores of friendly Slaves to Darkness units while they are contesting an objective that is wholly outside friendly territory.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Godswrath Warband': {
    effects: [
      {
        name: `Ironclad Onslaught - Once Per Turn`,
        desc: `Declare: Pick an objective that is contested by any friendly units to be the target. 
        Effect: Place a defiled token next to the target objective. Then, roll a D3 for each enemy unit contesting an objective that has a friendly defiled token. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Despoilers: {
    effects: [
      {
        name: `Feral Ruin - Once Per Turn - Reaction: You declared a Fight ability for a friendly Daemon Prince unit`,
        desc: `Used By: The Daemon Prince unit using that Fight ability. 
        Effect: Pick a friendly non-Hero Slaves to Darkness Monster or Beast unit that has not used a Fight ability this turn and is wholly within 12" of this unit to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Darkoath Horde': {
    effects: [
      {
        name: `Rally the Tribes - Once Per Turn`,
        desc: `Declare: If there is a friendly Darkoath Hero on the battlefield, pick a friendly non-Hero non-Unique Darkoath unit that has been destroyed to be the target. 
        Effect: Roll a dice. On a 3+, set up a replacement unit with half the number of models from the target unit (rounding up) on the battlefield, wholly within 6" of a battlefield edge and more than 3" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Chaos Horde': {
    effects: [
      {
        name: `Devotees of Ruin - Once Per Turn`,
        desc: `Declare: Pick a friendly Warriors of Chaos unit. Then, pick up to 2 visible friendly Darkoath units that do not have a Pledge to Chaos keyword and are wholly within 12" of that Warriors of Chaos unit to be the targets. 
        Effect: Until the start of your next turn, the targets have the same Pledge to Chaos keyword as that Warriors of Chaos unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Champions of Chaos': {
    effects: [
      {
        name: `Paragons of Darkness - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of melee weapons used by friendly non-Monster Slaves to Darkness Heroes.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Legion of the First Prince (AoR)': {
    effects: [
      {
        name: `Bestow Favour - Once Per Turn`,
        desc: `Declare: If a friendly Be'lakor is on the battlefield, pick a non-Hero Legion of the First Prince unit to be the target.
            Effect: Until the start of your next turn:
            Add 5 to the target's control score.
            If the target is a Daemon unit, add 1 to save rolls for the target.
            If the target is a non-Daemon unit, it has Ward (6+).`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Daemonic Reinforcements - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Legion of the First Prince Daemon Infantry or Cavalry unit that has been destroyed to be the target.
            Effect: Set up a replacement unit with half the number of models from the target unit (rounded up) wholly within 12" of a friendly Be'lakor and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `First-Damned Prince - Passive`,
        desc: `Effect: While a friendly Be'lakor is within the combat range of any friendly non-Hero Legion of the First Prince Daemon unit:
          That friendly Be'lakor has Ward (4+).
          In addition, each time you make a successful ward roll for that friendly Be'lakor, allocate 1 damage point to a friendly non-Hero Legion of the First Prince Daemon unit within Be'lakor's combat range after the damage sequence has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Storm of Blackened Blades - Once Per Battle`,
        desc: `Declare: Pick a friendly Eternus that is in combat and up to 2 friendly non-Hero non-Daemon Legion of the First Prince units wholly within 12" of that Eternus to be the targets.
            Effect: Add 1 to the Attacks characteristic of the targets' melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Swords of Chaos (AoR)': {
    effects: [
      {
        name: `Demands of the Dark Gods - Once Per Turn`,
        desc: `Effect: Pick 1 of the following effects: 
            Demand of Khorne: For the rest of the battle round, add 1 to the Rend characteristic of melee weapons used by friendly Swords of Chaos units. 
            Demand of Tzeentch: Pick 1 visible enemy unit within 9" of a friendly Swords of Chaos unit that is not in combat and roll a D6. On a 3+, inflict an amount of mortal damage on that enemy unit equal to the roll. 
            Demand of Nurgle: Heal (D3) each friendly Swords of Chaos unit. Then pick a friendly Swords of Chaos unit that healed any damage points this turn. Until the start of the next battle round, that unit has Ward (6+). 
            Demand of Slaanesh: Add 2" to the Move characteristic of friendly Swords of Chaos units until the start of the next battle round.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Knights of the First Circle`,
        desc: `Declare: If there are more friendly Swords of Chaos units on the battlefield than there are set up in reserve, pick a friendly Swords of Chaos unit that has not been deployed. 
            Effect: Set up that unit in reserve in the Ruinous Skies. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Descent from Ruinous Skies`,
        desc: `Declare: Pick a friendly Swords of Chaos unit that is in the Ruinous Skies. 
            Effect: Set up that unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Grimroot Order (First Circle Title) - Passive`,
        desc: `Effect: Add 1 to this units Health characteristic.`,
        when: [DURING_GAME],
      },
      {
        name: `Tamers of Haradh's Torment (First Circle Title) - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Companion weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Hounds Apocalyptus (First Circle Title) - Passive`,
        desc: `Effect: While this unit is wholly within enemy territory, add 1 to the Attacks characteristic of this units melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Blackstorm Apostates (First Circle Title) - Passive`,
        desc: `Effect: Add 3" to this units Move characteristic.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Betrayers of the Anvilking (First Circle Title) - Passive`,
        desc: `Effect: This unit has Ward (6+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Tribes of the Snow Peaks (AoR)': {
    effects: [
      {
        name: `Pledges to the Dark Gods - Passive`,
        desc: `Effect: Each time a friendly Snow Peaks unit uses 1 of the following abilities and the effect of that ability is resolved, gain 1 oath point. 
            Oath of Bloodshed  
            Oath of Murder  
            Oath of Supremacy  
            Oath of the Marauder  
            Oath of the Raider  
            Oath of Conquest  
            Oath of Dark Sacrifice`,
        when: [DURING_GAME],
      },
      {
        name: `Daemonfire Weapons - Once Per Phase`,
        desc: `Declare: If you have 1 or more oath points, pick a friendly Snow Peaks unit that has not used an Oath ability this turn to be the target. 
            Effect: Spend 1 oath point. For the rest of the turn, add 1 to the Rend characteristic of the targets melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Speed of the Blood Crow - Once Per Phase`,
        desc: `Declare: If you have 1 or more oath points, pick a friendly Snow Peaks unit that has not used an Oath ability this turn to be the target. 
            Effect: Spend 1 oath point. For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Hunger of Shesh'shan - Once Per Phase`,
        desc: `Declare: If you have 1 or more oath points, pick a friendly Snow Peaks unit that has not used an Oath ability this turn to be the target. 
            Effect: Spend 1 oath point. For the rest of the turn, add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Messengers of the Gods`,
        desc: `Declare: If you have 1 or more oath points, pick a friendly Snow Peaks Darkoath Marauders or Fellriders unit that has been destroyed and has not used an Oath ability this turn to be the target. 
            Effect: Spend 2 oath points. Set up a replacement unit with half the number of models from the target unit (rounding up) on the battlefield, wholly within 6" of a battlefield edge and more than 3" from all enemy units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Rage of Arkhar - Once Per Phase`,
        desc: `Declare: If you have 1 or more oath points, pick a friendly Snow Peaks unit that has not used an Oath ability this turn to be the target. 
            Effect: Spend 2 oath points. The target can use 2 Fight abilities this phase. After the first is used, however, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shroud of the Pale Elk - Once Per Phase - Reaction: Opponent declared an Attack ability`,
        desc: `Used By: A friendly Snow Peaks unit targeted by that Attack ability, if you have 1 or more oath points. 
            Effect: If that friendly Snow Peaks unit has not used an Oath ability this turn, spend 1 oath point. For the rest of the turn, that friendly unit has Ward (4+).`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  /* Khorne: {
    effects: [
      {
        name: `Mark of ${MARK_KHORNE}`,
        desc: `Add 1 to the attacks characteristic of melee weapons used by KHORNE SLAVES TO DARKNESS units if they made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Banner of Rage: Khorne Unit Only`,
        desc: `Add 1 to wound roll for attacks made with melee weapons by this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Let the Blood Flow'])],
    },
  },
  Tzeentch: {
    effects: [
      {
        name: `Mark of ${MARK_TZEENTCH}`,
        desc: `You can roll a dice each time a spell targets a friendly TZEENTCH SLAVES TO DARKNESS unit. On a 6, that spell has no effect on that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Blasted Standard: Tzeentch Unit Only`,
        desc: `This unit has a ward of 4+ for attacks made with missile weapons that target this unit.`,
        when: [WARDS_PHASE],
      },
    ],
    mandatory: {
      spells: [keyPicker(spells, ['Warp Reality'])],
    },
  },
  Nurgle: {
    effects: [
      {
        name: `Mark of ${MARK_NURGLE}`,
        desc: `Subtract 1 from wound rolls for attacks made with melee weapons that target NURGLE SLAVES TO DARKNESS units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Eroding Icon: Nurgle Unit Only`,
        desc: `Worsen the Rend characteristic of melee weapons that target this unit by 1.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.ERRATA_JANUARY_2023],
      },
    ],
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Bestow Contagion'])],
    },
  },
  Slaanesh: {
    effects: [
      {
        name: `Mark of ${MARK_SLAANESH}`,
        desc: `Add 1 to run and charge rolls for SLAANESH SLAVES TO DARKNESS units.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `The Banner of Screaming Flesh: Slaanesh Unit Only`,
        desc: `Add 1 to the Attacks characteristic of this unit's melee weapons if it made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Close in for the Kill'])],
    },
  },
  Undivided: {
    effects: [
      {
        name: `Mark of ${MARK_UNDIVIDED}`,
        desc: `All MORTAL and OGROID SLAVES TO DARKNESS UNDIVIDED units that are not unique gain the EYE OF THE GODS keyword.`,
        when: [DURING_SETUP],
      },
      {
        name: `Mark of ${MARK_UNDIVIDED}`,
        desc: `When a SLAVES TO DARKNESS UNDIVIDED HERO rolls on the Eye of the Gods table, you can reroll any 1 of the dice.`,
        when: [DURING_GAME],
      },
      {
        name: `The Dread Banner: Undivided Unit Only`,
        desc: `Each time this unit rolls on the Eye of the Gods table, you can roll 2 dice instead of 1 and pick 1 to be used as your roll.`,
        when: [DURING_GAME],
      },
    ],
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Slay Worthy Foes'])],
    },
  }, */
} satisfies TItemDescriptions

export default Flavors
