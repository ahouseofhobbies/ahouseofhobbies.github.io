import { TItemDescriptions } from 'factions/factionTypes'
import { COMBAT_PHASE, DURING_GAME, DURING_SETUP, HERO_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE, START_OF_HERO_PHASE, START_OF_SETUP } from 'types/phases'

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
