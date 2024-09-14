import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_SETUP,
  HERO_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const CommandTraits = {
  // Shared Command Traits
  'Deathmonger': {
    effects: [
      {
        name: `Deathmonger - Once Per Battle`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Favoured of the Pantheon': {
    effects: [
      {
        name: `Favoured of the Pantheon`,
        desc: `Effect: This unit can use the Eye of the Gods ability as if it were the end of the turn and it had destroyed an enemy unit this turn.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Radiance of Dark Glory': {
    effects: [
      {
        name: `Radiance of Dark Glory`,
        desc: `Declare: Pick each damaged friendly unit wholly within 12" of this unit to be the targets. 
        Effect: Roll a dice for each target. On a 3+, Heal (1) the target. Heal (3) the target instead if it is a Monster.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Idolater Lord': {
    effects: [
      {
        name: `Idolater Lord`,
        desc: `This general becomes a PRIEST. In addition, you can choose to replace the UNDIVIDED keyword on every UNDIVIDED CULTIST unit in your army with one of the following keywords: KHORNE, TEENTCH, NURGLE or SLAANESH. All CULTIST units must be given the same keyword and it must be one this general has too.`,
        when: [DURING_GAME],
      },
    ],
  },

  //SLAVES TO DARKNESS DAEMON PRINCES only
  'Not to be Denied': {
    effects: [
      {
        name: `Not to be Denied`,
        desc: `In each hero phase, once you have carried out a heroic action, if you did not carry out the heroic action with this general you carry out an additional heroic action with this general. The heroic action carried out with this general cannot be the same as the other heroic action you carried out in this phase.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Bolstered by Chaos': {
    effects: [
      {
        name: `Bolstered by Chaos`,
        desc: `Add 2 to this general's Wounds characteristic.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Bolstered by Chaos`,
        desc: `This general becomes a MONSTER.`,
        when: [DURING_GAME, END_OF_CHARGE_PHASE],
      },
    ],
  },
  'Radiance of Dark Glory': {
    effects: [
      {
        name: `Radiance of Dark Glory`,
        desc: `At the start of your hero phase, roll a dice for each friendly model within 9" of this general that has any wounds allocated to them. On a 3+, you can heal 1 wound from the model being rolled for. If the model being rolled for is a MONSTER, on a 3+ you can heal up to 3 wounds instead.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Diabolic Majesty': {
    effects: [
      {
        name: `Diabolic Majesty`,
        desc: `UNDIVIDED only. Once per battle, when you carry out a heroic action with this general you can carry out any one of the heroic actions on its warscroll even if it does not have the required keywords.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
