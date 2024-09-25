import { keyPicker } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  MOVEMENT_PHASE,
  START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Scathcoven': {
    effects: [
      {
        name: `Speed of the Scathborn - Passive`,
        desc: `Effect: If the unmodified charge roll for a friendly Melusai or Khinerai unit is 8+, that unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Shadow Patrol': {
    effects: [
      {
        name: `Shadowpaths - Once Per Turn`,
        desc: `Declare: Pick a friendly Daughters of Khaine Infantry unit that is not in combat to use this ability. 
        Effect: Roll a dice. On a 3+, remove that unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Cauldron Guard': {
    effects: [
      {
        name: `Frenzied Devotees - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Daughters of Khaine Infantry or War Machine units that are in combat to be the targets. 
        Effect: For each target:  
        Make a pile-in move.  
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
 /* Khailebron: {
    mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Masters of the Shadowpaths'])],
    }, 
    effects: [],
  }, */
  'Slaughter Troupe': {
    effects: [
      {
        name: `Gladiatorial Acrobatics - Once Per Turn - Reaction: You declared a Charge ability for a friendly Daughters of Khaine Aelf unit`,
        desc: `Effect: Change one of the dice in the charge roll to a 4.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  /*'Zainthar Kai': {
    effects: [
      {
        name: `Khaine's Essence`,
        desc: `Each time a model in a friendly ZAINTHAR KAI MELUSAI unit is slain by an attack made with a melee weapon, that model can fight before it is removed from play.`,
        when: [WOUND_ALLOCATION_PHASE],
        rule_sources: [rule_sources.BATTLETOME_DAUGHTERS_OF_KHAINE, rule_sources.ERRATA_JULY_2022],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
