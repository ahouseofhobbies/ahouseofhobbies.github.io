import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_ANY_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const CommandTraits = {
  'Servile Automaton': {
    effects: [
      {
        name: `Servile Automaton`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Automaton unit within this unit's combat range to be the target.
        Effect: For the rest of the battle, the target is this unit's bodyguard and the following effects apply:
        While this unit is in combat and its bodyguard is within its combat range, its bodyguard has Strike-First.
        If this unit is Infantry, it has Ward (5+) while its bodyguard is within its combat range.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Fire You Worms!': {
    effects: [
      {
        name: `Fire, You Worms! - Enemy Charge Phase`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Infantry unit that is not in combat and is wholly within 12" of this unit to be the target.
        Effect: The target can immediately use the 'Shoot' ability as if it were your shooting phase. All attacks must target the same enemy unit, and the enemy unit picked to be the target of the attack must have charged this phase. If the unmodified hit roll for any of those attacks is 1-5, the attack fails and the attack sequence ends.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'An Eye for Weakness': {
    effects: [
      {
        name: `An Eye for Weakness`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Until the start of your next turn, add 1 to wound rolls for combat attacks made by friendly Helsmiths of Hashut units that target that enemy unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Taars Grand Forgehost (AoR)': {
    effects: [
      {
        name: `Ruthless Overseer (AoR) - Passive`,
        desc: `Effect: Each time a friendly Grand Forgehost unit wholly within 12" of this unit uses the 'Rally' command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ziggurat Stampede (AoR)': {
    effects: [
      {
        name: `Raging Animus (AoR) - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 1 for a combat attack that targets this unit, inflict D3 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
