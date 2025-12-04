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
  'Hashutite Host': {
    effects: [
      {
        name: `Amassed Legions - Passive`,
        desc: `Effect: Each time a friendly Helsmiths of Hashut Infantry unit with 3 daemonic power points uses the 'Rally' command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Castigation Battery': {
    effects: [
      {
        name: `Experimental Munitions - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of ranged weapons used by friendly Helsmiths of Hashut War Machines while they have 3 daemonic power points.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'The Bullfathers Horns': {
    effects: [
      {
        name: `Bulls of the Ziggurat - Passive`,
        desc: `Effect: Add 2" to the Move characteristic of friendly Helsmiths of Hashut Cavalry and Monster units while they have 3 daemonic power points.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Daemonsmith Cabal': {
    effects: [
      {
        name: `Arcane Dominance - Passive`,
        desc: `Effect: Add 1 to casting rolls, unbinding rolls, banishment rolls and chanting rolls for friendly Helsmiths of Hashut Wizards and Priests while they have 3 daemonic power points.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Domination Force': {
    effects: [
      {
        name: `Dominion Hexes - Passive`,
        desc: `Effect: Double the Health characteristic of friendly non-Hobgrot Helsmiths of Hashut units for the purposes of the Power Through command.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Industrial Polluters': {
    effects: [
      {
        name: `Smog and Smoke - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target friendly Helsmiths of Hashut Infantry or Cavalry units while they are wholly within 9" of a friendly Helsmiths of Hashut War Machine.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Taars Grand Forgehost (AoR)': {
    effects: [
      {
        name: `Rising FIre - Passive`,
        desc: `Effect: The following cumulative effects apply to friendly Grand Forgehost units in each battle round after the first:
        Battle Round 2: Daemonic Weaponry: Those units' weapons have Crit (2 Hits).
        Battle Round 3: Harnessed Sorcery: Add 1 to casting rolls and chanting rolls for those units.
        Battle Round 4: Channelled Power: Attacks made by those units score critical hits on unmodified hit rolls of 5+.
        Battle Round 5: Arcane Dominance: Add 1 to the power level of those units if they are a Wizard or Priest.`,
        when: [DURING_GAME],
      },
      {
        name: `Masterful Daemonworks - Passive`,
        desc: `Effect: Friendly Grand Forgehost War Machines have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Command Ability: Dread Ranks Unbroken - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Grand Forgehost Infantry unit that has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up), wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Ziggurat Stampede (AoR)': {
    effects: [
      {
        name: `Rising FIre - Passive`,
        desc: `Effect: Add X to charge rolls for friendly Ziggurat Stampede units, where X is the number of friendly Ziggurat Stampede units that have already charged this phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Break Them, One and All - Passive`,
        desc: `Effect: Any number of friendly Ziggurat Stampede units can use the 'Power Through' command in the same turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Command Ability: Run Roughshod`,
        desc: `Declare: Pick a friendly Ziggurat Stampede unit in combat to be the target.
        Effect: For the rest of the turn:
        The target can use Shoot and/or Fight abilities even if it used a Retreat ability in the same turn.
        No mortal damage is inflicted on the target by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
