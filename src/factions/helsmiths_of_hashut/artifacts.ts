import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  'Scroll of Petrification': {
    effects: [
      {
        name: `Scroll of Petrification - Once Per Battle`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut unit wholly within 12" of this unit to be the target.
        Effect: For the rest of the turn:
        The target has Ward (2+).
        The target cannot use non-passive abilities or be picked to be the target of friendly abilities.
        Enemy units can ignore the target's combat range for the purposes of movement and charging.
        Enemy units can ignore the target for the purposes of setting up on the battlefield but cannot be set up on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Crucible of Spite': {
    effects: [
      {
        name: `Crucible of Spite  - Once Per Battle`,
        desc: `Effect: Give up to 3 daemonic power points to this unit. However, you cannot allocate or give any more daemonic power points to this unit for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gauntlets of Punishment': {
    effects: [
      {
        name: `Gauntlets of Punishment`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target.
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Taars Grand Forgehost (AoR)': {
    effects: [
      {
        name: `Tailsman of Obsidian (AoR) - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ziggurat Stampede (AoR)': {
    effects: [
      {
        name: `Visage of the Great Bull (AoR) - Passive`,
        desc: `Effect: In your charge phase, add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
