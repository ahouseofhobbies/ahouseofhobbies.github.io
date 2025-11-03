import { keyPicker } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  Scathcoven: {
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
  'Coven Zealots': {
    effects: [
      {
        name: `Higher Purpose - Once Per Turn`,
        desc: `Effect: Return D3 slain models to each friendly Daughters of Khaine Aelf Infantry unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Arena Veterans': {
    effects: [
      {
        name: `Graceful Elusion`,
        desc: `Effect: For the rest of the phase, friendly Daughters of Khaine Aelf Infantry units have Ward (5+) until they have used a Fight ability.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Croneseers Pariahs (AoR)': {
    effects: [
      {
        name: `Guided by Morai-Hag - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of combat attacks made by friendly non-Hero Infantry units while they are wholly within 9" of a friendly Krethusa.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Plumes of Auspicious Smoke - Passive`,
        desc: `Effect: Friendly Cauldron of Blood units are either empty or full. They start the battle empty. 
        While a friendly Cauldron of Blood unit is full: 
        That Cauldron of Blood has Ward (4+) against damage points inflicted by shooting attacks. 
        Subtract 1 from hit rolls for shooting attacks that target friendly Croneseers Pariahs units while they are wholly within 9" of that Cauldron of Blood.`,
        when: [DURING_GAME, SHOOTING_PHASE],
      },
      {
        name: `Laden with Prophecy`,
        desc: `Declare: Pick a friendly empty Cauldron of Blood. 
        Effect: If any enemy models were slain this turn by that Cauldron of Bloods combat attacks, it becomes full.`,
        when: [END_OF_TURN],
      },
      {
        name: `Skilled Skirmishers - Once Per Turn`,
        desc: `Declare: Pick a friendly Croneseers Pariahs Cavalry unit that has not charged this turn and is in combat with an enemy unit that charged this turn to be the target. 
        Effect: Roll a dice. On 3+, the target can immediately use a Retreat ability as if it were your movement phase. In addition, no mortal damage is inflicted on the target by that Retreat ability.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The Blood Reveals All - Once Per Battle`,
        desc: `Declare: Pick a friendly Croneseers Pariahs Hero within the combat range of a friendly empty Cauldron of Blood. Then, pick another unit within the combat range of that Hero to be the target. 
        Effect: Roll a dice. Allocate a number of damage points to the target equal to the roll (ward rolls cannot be made for those damage points). Then, that Cauldron of Blood becomes full.`,
        when: [HERO_PHASE],
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
