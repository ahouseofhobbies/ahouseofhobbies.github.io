import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  DURING_TURN,
  END_OF_COMBAT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SHOOTING_PHASE,
  START_OF_TURN,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Scurry Away': {
    effects: [
      {
        name: `Scurry Away`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 3+, this unit can immediately use the Retreat ability as if it were your movement phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Short-Tempered': {
    effects: [
      {
        name: `Short-Tempered - Passive`,
        desc: `Effect: Add 1 to run rolls and charge rolls for friendly Skaven units while they are wholly within 13" of this unit.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Skilled Manipulator': {
    effects: [
      {
        name: `Skilled Manipulator - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly non-Hero Skaven Infantry unit: 
        This unit has Ward (4+). 
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly non-Hero Skaven Infantry unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_TURN],
      },
    ],
  },
  'Devious Underling': {
    effects: [
      {
        name: `Devious Underling`,
        desc: `Declare: Pick a friendly Skaven Hero on the battlefield with a Health characteristic that equals or exceeds this units Health characteristic to be the target. 
        Effect: For the rest of the battle: 
        While the target has not been slain, friendly Skaven Infantry units have Ward (6+) while they are wholly within 13" of this unit. 
        Once the target has been slain, add 2 to charge rolls for friendly Skaven Infantry units while they are wholly within 13" of this unit.`,
        when: [DURING_SETUP],
      },
    ],
  },
  Fleshmeddler: {
    effects: [
      {
        name: `Fleshmeddler`,
        desc: `Declare: Pick a friendly Moulder unit wholly within 13" of this unit to be the target. 
        Effect: Pick 1 of the targets melee weapons. Add 1 to the Rend characteristic of that weapon for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Pit Tinkerer': {
    effects: [
      {
        name: `Pit Tinkerer - Passive`,
        desc: `Effect: You can reroll the random characteristic rolls for the Move characteristic of friendly Skryre War Machines while they are wholly within 13" of this unit. In addition, each time a friendly Skryre War Machine wholly within 18" of this unit uses the Rolling Doom or Whirling Doom ability, add 1 to the amount of mortal damage inflicted, if any.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Thanquols Mutated Menagerie (AoR)': {
    effects: [
      {
        name: `Pack Tactics (AoR) - Once Per Battle`,
        desc: `Declare: Pick up to 2 friendly non-Hero Mutated Menagerie Monster units wholly within 13" of this unit to be the targets.
        Effect: The targets can each use the All-out Attack or All-out Defense command this phase even if that command has been used by a friendly unit this phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Great-Grand Gnawhorde (AoR)': {
    effects: [
      {
        name: `Harbinger of the Great Ascendancy (AoR) - Once Per Battle`,
        desc: `Effect: If this unit is not in combat, you can use 2 different Warpshatter Throes abilities this turn instead of 1.`,
        when: [START_OF_TURN],
      },
    ],
  },
  /* 'Master of Magic': {
    effects: [
      {
        name: `Master of Magic`,
        desc: `MASTERCLAN HERO only. You can reroll casting, dispelling and unbinding rolls for this general.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Diabolical Schemer': {
    effects: [
      {
        name: `Diabolical Schemer`,
        desc: `MASTERCLAN HERO only. Roll a dice each time an enemy model issues a command within 13" of this general. On a 5+, that command is not received, the command point spent is lost and you receive 1 command point.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Cunning Mutator': {
    effects: [
      {
        name: `Cunning Mutator`,
        desc: `CLANS MOULDER HERO only. If this general is within 3" of another friendly CLANS MOULDER unit, before you allocate a wound or mortal wound to this general, or instead of making a ward roll for a wound or mortal wound that would be allocated to this general, you can roll a dice. On a 3+, that wound or mortal wound is allocated to that friendly unit instead of this general.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Masterful Scavenger': {
    effects: [
      {
        name: `Masterful Scavenger`,
        desc: `CLANS SKRYRE HERO only. Add 2 to the number of warpstone sparks you can use during a battle if your army includes this general.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Deranged Inventor': {
    effects: [
      {
        name: `Deranged Inventor`,
        desc: `CLANS SKRYRE HERO only At the start of your shooting phase, you can pick 1 friendly CLANS SKRYRE unit wholly within 13" of this general. Add 1 to hit rolls for attacks made with missile weapons by that unit until the end of that phase.`,
        when: [START_OF_SHOOTING_PHASE],
      },
    ],
  },
  'Overseer of Destruction': {
    effects: [
      {
        name: `Overseer of Destruction`,
        desc: `CLANS SKRYRE HERO only. If a friendly unit within 13" of this general that is hiding a WEAPON TEAM is destroyed, the hidden WEAPON TEAM is not destroyed. Instead, before removing the last slain model in the destroyed unit from play, you can set up the hidden WEAPON TEAM wholly within 3" of that model and more than 3" from all enemy units.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Master of Rot and Ruin': {
    effects: [
      {
        name: `Master of Rot and Ruin`,
        desc: `CLANS PESTILENS HERO only. Add 1 to chanting rolls for this general.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Architect of Death': {
    effects: [
      {
        name: `Architect of Death`,
        desc: `CLANS PESTILENS HERO only. Add 1 to the Damage characteristic of missile weapons used by friendly PLAGUECLAW units wholly within 18" of this general.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Ridden with Poxes': {
    effects: [
      {
        name: `Ridden with Poxes`,
        desc: `CLANS PESTILENS HERO only. At the end of the combat phase, roll a dice if this general is within 3" of any enemy units. On a 4+, each enemy unit within 3" of this general suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Powerful Alpha': {
    effects: [
      {
        name: `Powerful Alpha`,
        desc: `CLANS VERMINUS HERO only. The first 2 wounds or mortal wounds caused to this general in each phase are negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Devious Adversary': {
    effects: [
      {
        name: `Devious Adversary`,
        desc: `In the combat phase, if this general fights within 3" of an enemy unit that has not yet fought in that phase, add 2 to the Attacks characteristic of this general's melee weapon until the end of that phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Moulder Supreme': {
    effects: [
      {
        name: `Moulder Supreme`,
        desc: `CLANS MOULDER HERO only. Add 1 to hit rolls and wound rolls for attacks made by friendly FIGHTING BEAST units wholly within 13" of this general.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Hordemaster: {
    effects: [
      {
        name: `Hordemaster`,
        desc: `CLANS MOULDER HERO only. Once per battle, if this general is on the battlefield when a friendly PACK unit is destroyed, you can say that they will call more of their creatures to the fore. If you do so, roll a dice. On a 3+, a new replacement unit identical to the unit that was destroyed is added to your army. Set that unit wholly within 13" of this general and than 9" from all enemy units, A destroyed unit can only be replaced once - replacement units cannot themselves be replaced.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Unrivalled Killer': {
    effects: [
      {
        name: `Unrivalled Killer`,
        desc: `CLANS ESHIN HERO only. This general counts as 2 CLANS ESHIN HEROES for the purposes of the Masters of Murder battle trait.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  Shadowmaster: {
    effects: [
      {
        name: `Shadowmaster`,
        desc: `CLANS ESHIN HERO only. This general cannot be picked as the target of attacks made with missile weapons while they are within 1" of a terrain feature.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Incredible Agility': {
    effects: [
      {
        name: `Incredible Agility`,
        desc: `CLANS ESHIN HERO only. This general can fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Incredible Agility`,
        desc: `CLANS ESHIN HERO only. You can carry out the Their Finest Hour heroic action (core rules, 7.1) with this general twice in the same battle instead of once.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
