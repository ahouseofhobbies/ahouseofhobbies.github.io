import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
} from 'types/phases'

const Flavors = {
  'Iron Sky Attack Squadron': {
    effects: [
      {
        name: `Meticulously Maintained - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to each friendly Skyvessel in each phase.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Aether-Runners': {
    effects: [
      {
        name: `Fastest Vessels in the Fleet - Passive`,
        desc: `Effect: Add 2" to the Move characteristic of all friendly Skyvessels.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Endrineers Guild Expeditionary Force': {
    effects: [
      {
        name: `Special Procurement - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Kharadron Overlords Hero that does not have an artefact of power. 
        Effect: Give that Hero 1 artefact of power from the Inventions of the Sky-ports.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Grundcorps Wing': {
    effects: [
      {
        name: `Grudgesettler Protocols - Once Per Battle`,
        desc: `Effect: Add 3" to the Range characteristic of ranged weapons used by friendly Grundstok Thunderers and Grundstok Gunhaulers units for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Grundstok Expeditionary Force (AoR)': {
    effects: [
      {
        name: `Transport Skyfarers - Reaction: You declared a non-Charge Move ability for a friendly Skyvessel`,
        desc: `Used By: The Skyvessel using that Move ability. 
        Effect: Pick a number of units up to that Skyvessels Transport Capacity (see its warscroll) that are wholly within 6" of it to be the targets. Units that have been transported this turn cannot be targets. 
        Remove the targets from the battlefield. After the Skyvessel ends its move, you must set up each target unit on the battlefield, wholly within 6" of that Skyvessel and not in combat. Those units have been transported. A unit cannot use Charge abilities if it was transported in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gun Butt Low Blow - Passive`,
        desc: `Effect: While a friendly Expeditionary Force Infantry unit is contesting an objective that you control, its melee weapons have Crit (Mortal).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `No Safe Haven`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: Subtract 1 from the control score of that unit for each damage point allocated to it this turn by a shooting attack made by a friendly Expeditionary Force unit, to a maximum of 10 damage points.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grudgefire Rounds - Once Per Turn`,
        desc: `Declare: Pick a friendly Expeditionary Force Infantry unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the targets ranged weapons. Add 1 to the Attacks characteristic of that weapon for the rest of the phase.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /* 'Barak-Thryng, City of the Ancestors (Skyport)': {
    effects: [
      {
        name: `Honour the Gods, Just in Case`,
        desc: `Allied DUARDIN PRIESTS know the prayer "Rune of Ancestral Guidance" in addition to any others they know.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Rune of Ancestral Guidance`,
        desc: `Answer value of 3 and a range of 16". If answered, pick 1 friendly ARKANAUT COMPANY or GRUNDSTOK THUNDERERS unit wholly within range. Until the start of your next hero phase, unmodified hit rolls of 6 for attacks made with missile weapons by that unit cause a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Barak-Nar, City of the First Sunrise (Skyport)': {
    effects: [
      {
        name: `Scholars and Commanders`,
        desc: `At the start of your hero phase, roll a dice for each friendly BARAK-NAR HERO on the battlefield (including any that are embarked). For each 4+, you receive 1 extra command point.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
