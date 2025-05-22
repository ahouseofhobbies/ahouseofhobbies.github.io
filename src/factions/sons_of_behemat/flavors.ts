import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  'Taker Tribe': {
    effects: [
      {
        name: `More Stuff For Me Collection - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Sons of Behemat Hero that does not have an artefact of power. 
        Effect: Give that Hero 1 artefact of power from Titanic Trophies.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Boss Tribe': {
    effects: [
      {
        name: `Big Mouth - Once Per Turn - Reaction: You declared a Fight ability for a friendly Mega-Gargant`,
        desc: `Used By: The Mega-Gargant using that Fight ability. 
        Effect: Pick a friendly Gargant unit that has not used a Fight ability this turn and is wholly within 12" of this unit to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Stomper Tribe': {
    effects: [
      {
        name: `Revel in War - Passive`,
        desc: `Effect: You can pick 2 friendly Mega-Gargants or Gargant units that have not used a Rampage ability this turn to use the Jump Up and Down ability instead of 1.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Breaker Tribe': {
    effects: [
      {
        name: `Besiieging Bulk - Passive`,
        desc: `Effect: Friendly Mega-Gargants have Ward (6+) while they are within the combat ranges of any other friendly Mega-Gargants.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Manskittle Mob': {
    effects: [
      {
        name: `Strike! Hur! Hur! - Once Per Turn`,
        desc: `Declare: Pick up to 2 friendly Mega-Gargant units within 3" of any terrain features and pick any friendly Gargant units within 3" of any terrain features to be the targets. 
        Effect: Double the Attacks characteristic of each targets ranged weapons for the rest of the turn. If the target has no ranged weapons, pick an enemy unit within 12" of the target instead and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Big Toes': {
    effects: [
      {
        name: `Lofty Louts - Once Per Battle`,
        desc: `Declare: Pick a friendly Mancrusher Gargant unit to be the target. 
        Effect: For the rest of the battle, add 1 to hit rolls for combat attacks made by friendly Gargant units while they are wholly within 12" of the target and not wholly within 12" of any friendly Mega-Gargant units.`,
        when: [DURING_SETUP],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
